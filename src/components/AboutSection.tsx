
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
const AboutSection = () => {
  const values = [{
    title: "Quality",
    description: "We never compromise on quality, delivering excellence in every project."
  }, {
    title: "Reliability",
    description: "Count on us to deliver on time and within budget, every time."
  }, {
    title: "Safety",
    description: "Safety is our priority, with rigorous standards maintained on every job site."
  }, {
    title: "Integrity",
    description: "We operate with honesty and transparency in all our business dealings."
  }];
  return <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emmell-navy mb-4">
            About Emmell Ground Worx, LLC
          </h2>
          <div className="w-24 h-1 bg-emmell-orange mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img alt="Excavation work" className="rounded-lg shadow-lg w-full h-auto" src="/lovable-uploads/1b8c5fa3-09e6-401c-a8e4-9352198fbcc7.png" />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-emmell-navy">
              We Are Your Trusted Groundwork Partner
            </h3>
            <p className="text-gray-600">Emmell Ground Worx, LLC provides top-quality excavation and groundwork services for the area of Wilkes County and the  surrounding communities. Our team brings expertise and dedication to every project, no matter the size or complexity.</p>
            <p className="text-gray-600">We take pride in our precision, attention to detail, and commitment to exceeding client expectations. Our skilled operators ensure efficient and cost-effective solutions for all your groundwork needs.</p>
          </div>
        </div>

        
      </div>
    </section>;
};
export default AboutSection;
