import { Link } from "react-router-dom";
import { BrainIcon } from "../ui/Icons/BrainIcon";

export const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-20">
      <div className="text-center max-w-5xl mx-auto">
        <div className="flex justify-center mb-8 animate-pulse">
          <div className="transform hover:scale-110 transition-transform duration-300">
            <BrainIcon />
          </div>
        </div>

        <h1 className="text-7xl md:text-8xl font-extrabold text-gray-900 mb-8 leading-tight">
          Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 animate-gradient">
            Second Brain
          </span>
        </h1>

        <p className="text-2xl md:text-3xl text-gray-600 mb-6 leading-relaxed font-light">
          Capture, organize, and share your thoughts effortlessly.
        </p>

        <p className="text-xl text-gray-500 mb-12 max-w-3xl mx-auto">
          The personal knowledge management platform that grows with you. Store
          ideas, links, notes, and memories in your digital second brain.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          <Link to="/signup">
            <button className="group relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-5 px-10 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/50">
              <span className="relative z-10">Get Started Free</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
            </button>
          </Link>
          <Link to="/signin">
            <button className="bg-white hover:bg-gray-50 text-purple-600 font-bold py-5 px-10 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-purple-600 hover:border-purple-700">
              Sign In →
            </button>
          </Link>
        </div>

        {/* Social Proof */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-3xl">⭐</span>
            <span className="text-lg">Easy to Use</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-3xl">🔒</span>
            <span className="text-lg">100% Secure</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-3xl">⚡</span>
            <span className="text-lg">Lightning Fast</span>
          </div>
        </div>
      </div>
    </div>
  );
};
