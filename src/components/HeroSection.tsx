import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
const HeroSection = () => {
  return <section className="pt-28 pb-20 md:pt-36 md:pb-32 px-6 hero-pattern relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emmell-navy leading-tight">Excavation &amp; Ground Work Solutions</h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Professional excavation services with precision, reliability, and excellence for your construction and landscaping needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-emmell-orange hover:bg-emmell-orange/90 text-white font-medium px-8 py-6 rounded-md">
                <a href="#contact">Get a Quote</a>
              </Button>
              <Button asChild variant="outline" className="border-emmell-navy text-emmell-navy hover:bg-emmell-navy/5 font-medium px-8 py-6 rounded-md">
                <a href="#services">Our Services</a>
              </Button>
            </div>
          </div>
          <div className="relative h-80 md:h-auto">
            <img src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" alt="Excavator at work" className="rounded-lg shadow-lg object-cover w-full h-full" />
            
          </div>
        </div>
        <div className="flex justify-center mt-16 md:mt-24">
          <a href="#about" className="flex flex-col items-center text-emmell-navy hover:text-emmell-orange transition-colors">
            <span className="mb-2">Learn More</span>
            <ArrowDown className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>;
};
export default HeroSection;