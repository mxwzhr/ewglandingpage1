
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Commercial Plaza Development",
      description: "Site preparation and excavation for a new commercial plaza, including utility installation and drainage systems.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      type: "Commercial"
    },
    {
      title: "Residential Subdivision",
      description: "Complete groundwork for a 24-home subdivision, including road construction and utility infrastructure.",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
      type: "Residential"
    },
    {
      title: "Municipal Park Renovation",
      description: "Excavation and drainage solutions for a city park renovation project, including new pathways and landscape features.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      type: "Municipal"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emmell-navy mb-4">
            Recent Projects
          </h2>
          <div className="w-24 h-1 bg-emmell-orange mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our recent successful projects that showcase our expertise and quality workmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-3">
                  <span className="inline-block bg-emmell-skyblue text-emmell-navy text-xs px-3 py-1 rounded-full font-medium">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-emmell-navy mb-3">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
