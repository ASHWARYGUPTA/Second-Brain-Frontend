// Centralized authentication utilities
import { CredentialResponse } from "@react-oauth/google";

const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL ||
  "https://second-brain-backend-abk0.onrender.com";

export interface GoogleAuthData {
  email: string;
  name: string;
  username: string;
}

export interface AuthResponse {
  value: boolean;
  message?: string;
  error?: string;
}

/**
 * Decode JWT token from Google OAuth
 */
export const decodeGoogleJWT = async (
  credential: string
): Promise<GoogleAuthData | null> => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/v1/decodeJwt`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: credential,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to decode JWT: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.decoded) {
      throw new Error("Invalid token response");
    }

    return {
      email: data.decoded.email,
      name: data.decoded.name,
      username: data.decoded.name,
    };
  } catch (error) {
    console.error("Error decoding JWT:", error);
    return null;
  }
};

/**
 * Authenticate user with Google OAuth data
 */
export const authenticateWithGoogle = async (
  authData: GoogleAuthData
): Promise<AuthResponse> => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/v1/googleAuth`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(authData),
    });

    if (!response.ok) {
      throw new Error(`Authentication failed: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error authenticating with Google:", error);
    return {
      value: false,
      error: error instanceof Error ? error.message : "Authentication failed",
    };
  }
};

/**
 * Complete Google OAuth flow
 */
export const handleGoogleOAuth = async (
  credentialResponse: CredentialResponse,
  onSuccess: () => void,
  onError: (error: string) => void
): Promise<void> => {
  if (!credentialResponse.credential) {
    onError("No credential received from Google");
    return;
  }

  // Decode the JWT token
  const authData = await decodeGoogleJWT(credentialResponse.credential);

  if (!authData) {
    onError("Failed to decode Google credential");
    return;
  }

  // Authenticate with backend
  const result = await authenticateWithGoogle(authData);

  if (result.value === true) {
    onSuccess();
  } else {
    onError(result.error || "Authentication failed. Please try again.");
  }
};
