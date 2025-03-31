
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const values = [
    {
      title: "Quality",
      description: "We never compromise on quality, delivering excellence in every project."
    },
    {
      title: "Reliability",
      description: "Count on us to deliver on time and within budget, every time."
    },
    {
      title: "Safety",
      description: "Safety is our priority, with rigorous standards maintained on every job site."
    },
    {
      title: "Integrity",
      description: "We operate with honesty and transparency in all our business dealings."
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emmell-navy mb-4">
            About Emmell Ground Worx
          </h2>
          <div className="w-24 h-1 bg-emmell-orange mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1433086966358-54859d0ed716" 
              alt="Excavation work" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-emmell-navy">
              We Are Your Trusted Groundwork Partner
            </h3>
            <p className="text-gray-600">
              Emmell Ground Worx has been providing top-quality excavation and groundwork services 
              for over 25 years. Our experienced team brings expertise and dedication to every project, 
              no matter the size or complexity.
            </p>
            <p className="text-gray-600">
              From residential to commercial projects, we take pride in our precision, 
              attention to detail, and commitment to exceeding client expectations. 
              Our state-of-the-art equipment and skilled operators ensure efficient and 
              cost-effective solutions for all your groundwork needs.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-emmell-navy text-center mb-10">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-t-4 border-emmell-orange">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold text-emmell-navy mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
