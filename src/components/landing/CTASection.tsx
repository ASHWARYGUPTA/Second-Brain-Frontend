import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
          Ready to Build Your
          <br />
          Second Brain?
        </h2>
        <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join thousands of users organizing their knowledge and ideas. Start
          for free, no credit card required.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <Link to="/signup">
            <button className="group relative bg-white hover:bg-gray-100 text-purple-600 font-bold py-5 px-10 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <span className="relative z-10">Start For Free →</span>
            </button>
          </Link>
          <Link to="/signin">
            <button className="bg-transparent hover:bg-white/10 text-white font-bold py-5 px-10 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 border-2 border-white">
              Sign In
            </button>
          </Link>
        </div>

        {/* Features list */}
        <div className="flex flex-wrap justify-center gap-8 text-white/90 text-lg">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>Free Forever Plan</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>No Credit Card</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>Cancel Anytime</span>
          </div>
        </div>
      </div>
    </div>
  );
};
