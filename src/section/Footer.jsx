import React from "react";

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white py-12">
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-amber-400">Modernism</h4>
            <p className="text-stone-400 text-sm">
              Creating beautiful, functional spaces that reflect your unique
              style and needs.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-stone-800 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone h-4 w-4"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="w-8 h-8 bg-stone-800 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail h-4 w-4"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h5 className="font-semibold">Services</h5>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li>Interior Design</li>
              <li>Space Planning</li>
              <li>Consultation</li>
              <li>Project Management</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="font-semibold">Company</h5>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="font-semibold">Contact</h5>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li>123 Design Street</li>
              <li>New York, NY 10001</li>
              <li>(555) 123-4567</li>
              <li>hello@modernism.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-800 pt-8 mt-8 text-center text-stone-400 text-sm">
          © 2024 Modernism Interior Design. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
