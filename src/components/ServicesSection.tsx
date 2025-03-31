
import React from "react";

const ServicesSection = () => {
  const services = [
    {
      title: "General Excavation",
      description: "Professional excavation services for foundations, basements, pools, and other structures.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
    },
    {
      title: "Driveway Repair",
      description: "Expert restoration and maintenance of residential and commercial driveways.",
      image: "https://roadrunnerblade.com/wp-content/uploads/2021/06/skid-steer-grader-in-use-1080x500.jpg"
    },
    {
      title: "Land Clearing",
      description: "Comprehensive land clearing services for construction and development projects.",
      image: "https://www.rentalstops.com/itemimages/33386-2.jpg"
    },
    {
      title: "Site Leveling",
      description: "Precise grading and leveling services to prepare your site for construction or landscaping.",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86"
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emmell-navy mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-emmell-orange mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer specialized excavation and groundwork services to meet all your construction and landscaping needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-emmell-navy mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
