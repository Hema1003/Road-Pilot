import React from "react";
import { FaUsers, FaTruckMoving, FaChartLine } from "react-icons/fa";

const timelineData = [
  {
    date: "March 2023",
    title: "Director report release",
    icon: <FaChartLine className="text-blue-500 text-3xl mx-auto" />,
  },
  {
    date: "Feb 2023",
    title: "150k customer onboarded",
    icon: <FaChartLine className="text-blue-500 text-3xl mx-auto" />,
  },
  {
    date: "Jan 2023",
    title: "3 Lakh Vehicles onboarded",
    icon: <FaChartLine className="text-blue-500 text-3xl mx-auto" />,
  },
  {
    date: "Sept 2022",
    title: "Insight release",
    icon: <FaUsers className="text-blue-500 text-3xl mx-auto" />,
  },
  {
    date: "July 2022",
    title: "100k Customer Onboarded",
    icon: <FaUsers className="text-blue-500 text-3xl mx-auto" />,
  },
  {
    date: "May 2022",
    title: "2 Lakh Vehicles Onboarded",
    icon: <FaTruckMoving className="text-blue-500 text-3xl mx-auto" />,
  },
  {
    date: "Oct 2021",
    title: "50K customer onboarded",
    icon: <FaTruckMoving className="text-blue-500 text-3xl mx-auto" />,
  },
];

const JourneySection = () => {
  return (
    <section className="container mx-auto px-6 lg:px-16 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        The Journey of Fleet Edge
      </h2>

      {/* Timeline Container */}
      <div className="relative flex items-center justify-between w-full border-t-2 border-gray-300">
        {timelineData.map((event, index) => (
          <div key={index} className="flex flex-col items-center w-1/7">
            {/* Date */}
            <p className="text-gray-700 mb-2">{event.date}</p>

            {/* Timeline Dot */}
            <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>

            {/* Vertical Line */}
            {index !== timelineData.length - 1 && (
              <div className="h-16 border-l-2 border-dashed border-gray-400"></div>
            )}

            {/* Icon and Text */}
            {event.icon}
            <p className="text-lg font-semibold mt-2 text-center">
              {event.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JourneySection;
