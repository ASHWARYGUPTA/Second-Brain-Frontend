import {
  CredentialResponse,
  GoogleLogin,
  useGoogleOneTapLogin,
} from "@react-oauth/google";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isLoggedIn } from "./States/RecoilAtoms";
import { handleGoogleOAuth } from "../../utils/authUtils";

export const SocialNetworkSignIn = () => {
  const setIsLoggedInVal = useSetRecoilState(isLoggedIn);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // One Tap Login
  useGoogleOneTapLogin({
    onSuccess: async (credentialResponse) => {
      setIsLoading(true);
      await handleGoogleOAuth(
        credentialResponse,
        () => {
          setIsLoggedInVal(true);
          setError(null);
          navigate("/dashboard");
        },
        (errorMessage) => {
          setError(errorMessage);
          setIsLoading(false);
        }
      );
    },
    onError: () => {
      setError("Google One Tap Login Failed");
      console.error("Login Failed");
    },
  });

  // Handle Google Login button click
  const handleGoogleLogin = async (credentialResponse: CredentialResponse) => {
    setIsLoading(true);
    setError(null);

    await handleGoogleOAuth(
      credentialResponse,
      () => {
        setIsLoggedInVal(true);
        navigate("/dashboard");
      },
      (errorMessage) => {
        setError(errorMessage);
        setIsLoading(false);
      }
    );
  };

  return (
    <div className="flex flex-col justify-around items-center ml-8 h-[50%] w-[35%] border-solid border-2 rounded-2xl border-black bg-white text-black shadow-xl">
      <div>
        <div className="text-2xl font-bold flex justify-center mb-6">
          <u>SignIn/SignUp</u>
        </div>
        <div className="text-sm align-middle flex justify-center h-[2rem] w-[250px] items-center">
          <p className="">
            Use Social Media Networks to SignIn to Second Brain Platform
          </p>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 max-w-xs text-center">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline text-sm">{error}</span>
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center mb-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
          <span className="ml-2 text-gray-600">Signing in...</span>
        </div>
      )}

      {/* Google Login Button */}
      <div className="flex justify-center items-center">
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={() => {
            setError("Google Login Failed. Please try again.");
            console.error("error");
          }}
          theme="filled_blue"
          shape="rectangular"
          text="signin_with"
          logo_alignment="center"
          width="300px"
          size="large"
          useOneTap
        />
      </div>
    </div>
  );
};
