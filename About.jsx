import React from "react";

function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="/banner.jpg"
          alt="FleetEdge Banner"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl font-bold">About Tata FleetEdge</h1>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-5xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800">What is FleetEdge?</h2>
        <p className="text-gray-600 mt-4">
          FleetEdge is a next-generation connected vehicle platform from Tata Motors
          that enables fleet owners to efficiently manage their vehicles, improve
          productivity, and reduce operational costs.
        </p>
      </div>

      {/* Features Section */}
      <div className="max-w-5xl mx-auto my-10">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Live Tracking", desc: "Monitor vehicles in real-time" },
            { title: "Fuel Monitoring", desc: "Track fuel consumption & efficiency" },
            { title: "Driver Behavior", desc: "Analyze driver habits and safety" },
          ].map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-12 text-center">
        <h2 className="text-2xl font-bold">Get Started with FleetEdge Today!</h2>
        <button className="mt-4 px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default About;
