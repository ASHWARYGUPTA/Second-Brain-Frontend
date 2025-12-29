import { useEffect } from "react";
import { NavBar } from "./components/ui/NavBar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";
import {
  isLoggedIn,
  LoggedInCheck,
  triggerLoggedInCheck,
} from "./components/ui/States/RecoilAtoms";
import { Loader } from "./components/ui/Loader";
import { BrainIcon } from "./components/ui/Icons/BrainIcon";
import { HeroSection } from "./components/landing/HeroSection";
import { FeaturesSection } from "./components/landing/FeaturesSection";
import { HowItWorksSection } from "./components/landing/HowItWorksSection";
import { TestimonialsSection } from "./components/landing/TestimonialsSection";
import { StatsSection } from "./components/landing/StatsSection";
import { CTASection } from "./components/landing/CTASection";
import { Footer } from "./components/landing/Footer";
import { FAQSection } from "./components/landing/FAQSection";

const LandingPage = () => {
  const navigate = useNavigate();
  const isLoggedInVal = useRecoilValueLoadable(LoggedInCheck);
  const setTrigger = useSetRecoilState(triggerLoggedInCheck);

  useEffect(() => {
    document.title = "Second Brain - Your Personal Knowledge Hub";
    setTrigger((e) => e + 1);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {isLoggedInVal.state === "loading" ? (
        <Loader />
      ) : (
        <>
          {isLoggedInVal.state === "hasValue" &&
          isLoggedInVal.contents === true ? (
            <>
              <NavBar
                textButton1="Dashboard"
                textButton2="Sign Out"
                onClickButton1={() => {
                  navigate("/dashboard");
                }}
                onClickButton2={() => {
                  // Add sign out logic here
                  navigate("/signin");
                }}
              />
              <div className="flex flex-col justify-center items-center min-h-screen px-4">
                <div className="text-center max-w-2xl">
                  <div className="flex justify-center mb-6">
                    <BrainIcon />
                  </div>
                  <h1 className="text-5xl font-bold text-gray-800 mb-6">
                    Welcome Back!
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    Your knowledge hub awaits. Continue organizing your thoughts
                    and ideas.
                  </p>
                  <Link to="/dashboard">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Go to Dashboard →
                    </button>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Show landing page for both logged out and error states */}
              <NavBar
                textButton1="Sign Up"
                textButton2="Sign In"
                onClickButton1={() => {
                  navigate("/signup");
                }}
                onClickButton2={() => {
                  navigate("/signin");
                }}
              />

              {/* Hero Section */}
              <HeroSection />

              {/* Stats Section */}
              <StatsSection />

              {/* Features Section */}
              <FeaturesSection />

              {/* How It Works Section */}
              <HowItWorksSection />

              {/* Testimonials Section */}
              <TestimonialsSection />

              {/* FAQ Section */}
              <FAQSection />

              {/* CTA Section */}
              <CTASection />

              {/* Footer */}
              <Footer />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default LandingPage;
