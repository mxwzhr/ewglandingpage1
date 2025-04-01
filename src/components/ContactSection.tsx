
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
    // In a real implementation, you would send this data to your backend
  };
  return <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emmell-navy mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-emmell-orange mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to start your project? Contact us today for a free consultation and quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-emmell-navy mb-6">Get In Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <Input id="name" type="text" placeholder="John Doe" className="w-full" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" className="w-full" required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" className="w-full" />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <Input id="subject" type="text" placeholder="Project Inquiry" className="w-full" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea id="message" placeholder="Tell us about your project..." className="w-full min-h-[150px]" required />
              </div>
              <Button type="submit" className="w-full bg-emmell-orange hover:bg-emmell-orange/90 text-white py-6">
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
              <h3 className="text-2xl font-semibold text-emmell-navy mb-4">Contact Information</h3>
              
              <div className="flex items-start space-x-4">
                <Phone className="text-emmell-orange h-5 w-5 mt-1" />
                <div>
                  <p className="font-medium text-emmell-navy">Phone</p>
                  <p className="text-gray-600">(828) 471-6511</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="text-emmell-orange h-5 w-5 mt-1" />
                <div>
                  <p className="font-medium text-emmell-navy">Email</p>
                  <p className="text-gray-600">info@emmellgroundworx.com</p>
                </div>
              </div>
              
              
            </div>

            
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;
