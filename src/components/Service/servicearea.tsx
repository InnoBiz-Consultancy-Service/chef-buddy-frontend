import React from 'react';

const ServiceArea = () => {
  // Edinburgh, UK er location
  const mapAddress = "Edinburgh, United Kingdom";
  const mapSource = `https://maps.google.com/maps?q=${encodeURIComponent(mapAddress)}&t=&z=11&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Service Area
          </h2>
          <p className="text-[#E67E22] font-medium text-lg">
            Edinburgh and surrounding areas within a 50-mile radius.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative w-full h-[464px] rounded-lg overflow-hidden shadow-lg border border-gray-200">
          <iframe
            title="ChefBuddy Service Area"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src={mapSource}
            className="grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;