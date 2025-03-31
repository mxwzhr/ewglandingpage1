import React from "react";
import { Card, CardContent } from "@/components/ui/card";
const ProjectsSection = () => {
  const projects = [{
    title: "Commercial Plaza Development",
    description: "Site preparation and excavation for a new commercial plaza, including utility installation and drainage systems.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    type: "Commercial"
  }, {
    title: "Residential Subdivision",
    description: "Complete groundwork for a 24-home subdivision, including road construction and utility infrastructure.",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    type: "Residential"
  }, {
    title: "Municipal Park Renovation",
    description: "Excavation and drainage solutions for a city park renovation project, including new pathways and landscape features.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    type: "Municipal"
  }];
  return <section id="projects" className="py-20 px-6 bg-white">
      
    </section>;
};
export default ProjectsSection;