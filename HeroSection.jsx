import React from "react";
import fleetImage from "../assets/fleetedge-image.jpg"; // Ensure correct image path

const HeroSection = () => {
  return (
    <section className="container mx-auto px-6 lg:px-16 py-12 flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
      
      {/* Image on the Left */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img src={fleetImage} alt="Fleet Edge Vehicles" className="w-full h-auto max-w-[500px] shadow-lg" />
      </div>

      {/* Text & Stats on the Right */}
      <div className="w-full lg:w-1/2">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Maximize your Business Potential</h1>
        <p className="text-gray-700 mb-6 leading-relaxed">
          From impactful decision-making to future planning, everything needs relevant information
          provided in real-time. Tata Motors Fleet Edge with its state-of-the-art connected platform
          technology, provides your business with every need in the way of building stronger, data-driven,
          real-time business with a focus on providing better decision-making for greater success to your business.
        </p>

        {/* Stats */}
        <div className="flex space-x-10">
          <div>
            <span className="text-2xl font-bold text-gray-900">2.8 L+</span>
            <p className="text-gray-600 text-sm">Total Users</p>
          </div>
          <div>
            <span className="text-2xl font-bold text-gray-900">7L+</span>
            <p className="text-gray-600 text-sm">Total Vehicles</p>
          </div>
          <div>
            <span className="text-2xl font-bold text-gray-900">2B+</span>
            <p className="text-gray-600 text-sm">User Events</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
