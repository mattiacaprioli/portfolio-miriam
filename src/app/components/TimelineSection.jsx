import React from "react";
import { timelineData } from "../data";
import TimelineSectionMoblie from "./TimelineSectionMoblie";

const TimelineSection = () => {
  return (
    <section id="experience" className="py-16">
      <div className="text-center">
        <h2 className="text-center text-white text-4xl font-bold mb-12">Esperienza</h2>
      </div>

      <div className="lg:hidden">
        <TimelineSectionMoblie />
      </div>

      <div className="hidden lg:block relative max-w-7xl mx-auto px-0 lg:px-8">
        {/* Linea centrale */}
        <div className="border-l-4 border-primary-500 absolute h-full left-1/2 transform -translate-x-1/2"></div>

        {/* Elementi della timeline */}
        {timelineData.map((item, index) => (
          <div key={index} className="mb-10 flex justify-between items-center w-full">
            {item.align === "right" ? (
              <>
                <div className="order-1 w-5/12">
                  <div className="text-right mb-4">
                    <span className="text-primary-400 font-bold text-lg">{item.year}</span>
                  </div>
                  <div className="bg-[#181818] rounded-lg shadow-sm p-6">
                    <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
                <div className="z-20 flex items-center order-1 bg-gradient-to-r from-primary-400 to-secondary-600 shadow-sm w-5 h-5 rounded-full"></div>
                <div className="order-1 w-5/12"></div>
              </>
            ) : (
              <>
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-gradient-to-r from-primary-400 to-secondary-600 shadow-sm w-5 h-5 rounded-full"></div>
                <div className="order-1 w-5/12">
                  <div className="text-left mb-4">
                    <span className="text-primary-400 font-bold text-lg">{item.year}</span>
                  </div>
                  <div className="bg-[#181818] rounded-lg shadow-sm p-6">
                    <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
