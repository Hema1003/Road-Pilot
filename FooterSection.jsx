import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";

const FooterSection = () => {
  return (
    <footer className="bg-black text-white">
      {/* Upper Footer - Links */}
      <div className="py-10 px-6 lg:px-16">
        {/* Keep Exploring Section */}
        <div className="flex items-center justify-between border-b border-gray-700 pb-4">
          <button className="bg-blue-600 text-white px-6 py-2 font-bold uppercase">
            Keep Exploring
          </button>
          <nav className="flex space-x-8 text-sm">
            <a href="#" className="hover:text-blue-500">About Us</a>
            <a href="#" className="hover:text-blue-500">Features</a>
            <a href="#" className="hover:text-blue-500">Contact Us</a>
          </nav>
        </div>

        {/* Quick Links Section */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <div className="flex flex-wrap gap-6 mt-2 text-gray-400">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Resources</a>
            <a href="#">FAQs</a>
            <a href="#">Contact Us</a>
          </div>
        </div>

        {/* Commercial Vehicles */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold">Commercial Vehicles</h3>
          <div className="flex flex-wrap gap-6 mt-2 text-gray-400">
            <a href="#">CV</a>
            <a href="#">Small Trucks</a>
            <a href="#">Trucks</a>
            <a href="#">Buses & Vans</a>
            <a href="#">Tata OK</a>
            <a href="#">REWIRE</a>
          </div>
        </div>

        {/* Services */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold">Services</h3>
          <div className="flex flex-wrap gap-6 mt-2 text-gray-400">
            <a href="#">Fleetcare</a>
            <a href="#">Tata Alert</a>
            <a href="#">Tata Zippy</a>
            <a href="#">Tata Kavach</a>
            <a href="#">Tata Delight</a>
            <a href="#">Tata Motors Genuine Oil</a>
            <a href="#">Sampoorna Seva 2.0</a>
          </div>
        </div>

        {/* Spares */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold">Spares</h3>
          <div className="flex flex-wrap gap-6 mt-2 text-gray-400">
            <a href="#">Tata Genuine Parts</a>
            <a href="#">Tata Motors e-Dukaan</a>
            <a href="#">Tata Prolife</a>
            <a href="#">Tata Durafits</a>
          </div>
        </div>

        {/* Aggregates */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold">Aggregates</h3>
          <div className="flex flex-wrap gap-6 mt-2 text-gray-400">
            <a href="#">Tata Industrial Engines</a>
            <a href="#">Tata Motors Axle & Trailer Components</a>
            <a href="#">Tata Motors Gensets</a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-blue-600 text-white py-6 px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img src="/path/to/tata-logo.png" alt="Tata Motors Logo" className="h-10" />
            <span className="text-lg font-semibold">Better Always</span>
          </div>

          {/* Social Media */}
          <div className="flex space-x-6 mt-4 lg:mt-0">
            <a href="#" className="text-white text-2xl"><FaLinkedinIn /></a>
            <a href="#" className="text-white text-2xl"><FaFacebookF /></a>
            <a href="#" className="text-white text-2xl"><MdRestaurantMenu /></a>
            <a href="#" className="text-white text-2xl"><FaInstagram /></a>
          </div>

          {/* Legal Links */}
          <div className="mt-4 lg:mt-0 flex space-x-6">
            <a href="#" className="hover:underline">Disclaimer</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm mt-4">
          © 2025 Tata Motors Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
