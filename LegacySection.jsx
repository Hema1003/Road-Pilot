import React from "react";

const LegacySection = () => {
  return (
    <section className="container mx-auto px-6 lg:px-16 py-16 text-center lg:text-left">
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        The Legacy of Tata Motors
      </h2>

      {/* Description */}
      <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto text-center">
        With a rich heritage spanning several decades, Tata Motors has
        established a strong legacy in the field of Commercial Vehicles. Since
        our inception, we have been at the forefront of innovation, consistently
        delivering reliable and robust vehicles that cater to the diverse needs
        of businesses. Our legacy is built on a foundation of trust, quality,
        and customer satisfaction, making us a preferred choice for commercial
        vehicle solutions.
      </p>

      {/* Stats Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-16 mt-12">
        <div className="text-center">
          <span className="text-4xl font-bold text-gray-900">No. 1</span>
          <p className="text-gray-600 text-lg mt-2">CV Manufacturer</p>
        </div>
        <div className="text-center mt-6 lg:mt-0">
          <span className="text-4xl font-bold text-gray-900">1800+</span>
          <p className="text-gray-600 text-lg mt-2">
            Sales touch points across India
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegacySection;
