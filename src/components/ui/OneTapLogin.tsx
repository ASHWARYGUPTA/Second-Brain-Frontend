import { useGoogleOneTapLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isLoggedIn } from "./States/RecoilAtoms";
import { handleGoogleOAuth } from "../../utils/authUtils";
import { useState } from "react";

const OneTapLogin = () => {
  const setIsLoggedInVal = useSetRecoilState(isLoggedIn);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useGoogleOneTapLogin({
    onSuccess: async (credentialResponse) => {
      await handleGoogleOAuth(
        credentialResponse,
        () => {
          // Success callback
          setIsLoggedInVal(true);
          setError(null);
          navigate("/dashboard");
        },
        (errorMessage) => {
          // Error callback
          setError(errorMessage);
          console.error("Google One Tap Login Failed:", errorMessage);
        }
      );
    },
    onError: () => {
      const errorMessage = "Google One Tap Login Failed";
      setError(errorMessage);
      console.error(errorMessage);
    },
  });

  // Optionally display error to user
  if (error) {
    return (
      <div className="fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded shadow-lg">
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{error}</span>
      </div>
    );
  }

  return <></>;
};

export default OneTapLogin;
