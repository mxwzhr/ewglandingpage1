
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Create email body with form data
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}
    `;

    // Create mailto link
    const mailtoLink = `mailto:info@emmellgroundworx.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    toast({
      title: "Email client opened",
      description: "Your message is ready to send via your email client.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emmell-navy mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-emmell-orange mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to start your project? Contact Emmell Ground Worx, LLC today for a free consultation and quote.
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
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="(828) 471-6511" 
                  className="w-full" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  type="text" 
                  placeholder="Project Inquiry" 
                  className="w-full" 
                  required 
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project..." 
                  className="w-full min-h-[150px]" 
                  required 
                  value={formData.message}
                  onChange={handleChange}
                />
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
