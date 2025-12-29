import { Link } from "react-router-dom";
import { BrainIcon } from "../ui/Icons/BrainIcon";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <BrainIcon />
              <span className="text-2xl font-bold">Second Brain</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your personal knowledge management platform. Capture, organize,
              and share your thoughts effortlessly.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl"
              >
                🐦
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl"
              >
                📘
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl"
              >
                💼
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl"
              >
                📷
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/signup"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Second Brain. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
