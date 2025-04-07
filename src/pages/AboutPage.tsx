
import React from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage: React.FC = () => {
  const team = [
    {
      name: "James Wilson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "With over 20 years in the automotive industry, James founded UK-LHD Motors to provide high-quality left-hand drive vehicles to the UK market."
    },
    {
      name: "Sarah Thompson",
      role: "Sales Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      bio: "Sarah has extensive experience in premium car sales and ensures our customers receive exceptional service and find their perfect vehicle."
    },
    {
      name: "Michael Chen",
      role: "Technical Specialist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "Michael oversees all technical aspects of our vehicles, ensuring each car meets our strict quality standards before being offered to our clients."
    },
  ];

  return (
    <div className="bg-gray-50 pb-16">
      {/* Hero Section */}
      <div className="bg-navy py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">About UK-LHD Motors</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Your trusted source for premium left-hand drive vehicles in the UK market.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-6">Our Story</h2>
            <p className="text-gray-700 mb-6">
              Founded in 2010, UK-LHD Motors began with a simple mission: to provide high-quality left-hand drive vehicles to the UK market with exceptional service and expertise.
            </p>
            <p className="text-gray-700 mb-6">
              What started as a small family business has grown into one of the UK's leading specialists in left-hand drive vehicles. Our founder, James Wilson, identified a gap in the market for premium LHD cars and created a business dedicated to sourcing the finest vehicles from across Europe.
            </p>
            <p className="text-gray-700">
              Today, we continue to uphold our founding principles of quality, transparency, and customer satisfaction. Our experienced team works tirelessly to ensure that every vehicle we offer meets our exacting standards, and that every customer receives personalized service throughout their journey with us.
            </p>
          </div>
          <div className="relative">
            <div className="bg-navy absolute w-full h-full -translate-x-4 translate-y-4 rounded-lg"></div>
            <img
              src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
              alt="Premium car showroom"
              className="w-full h-full object-cover rounded-lg relative z-10"
            />
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-motor-red/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={28} className="text-motor-red" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Quality</h3>
              <p className="text-gray-700">
                We only source the finest left-hand drive vehicles, each undergoing a rigorous inspection process to ensure top condition and reliability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-motor-red/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={28} className="text-motor-red" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Transparency</h3>
              <p className="text-gray-700">
                We believe in complete honesty with our customers, providing detailed information about each vehicle's history, condition, and specifications.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-motor-red/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={28} className="text-motor-red" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Service</h3>
              <p className="text-gray-700">
                Our team is dedicated to providing exceptional customer service, from the initial inquiry through to after-sales support and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Team */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-navy mb-12 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-1">{member.name}</h3>
                <p className="text-motor-red mb-4">{member.role}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Why Choose UK-LHD Motors?</h2>
              <ul className="space-y-4">
                <li className="flex">
                  <CheckCircle size={20} className="text-motor-red mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy">Specialized Expertise</h3>
                    <p className="text-gray-700">We focus exclusively on left-hand drive vehicles for the UK market, making us true specialists in this niche.</p>
                  </div>
                </li>
                <li className="flex">
                  <CheckCircle size={20} className="text-motor-red mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy">Curated Selection</h3>
                    <p className="text-gray-700">Every vehicle in our inventory has been carefully selected for its quality, condition, and desirability.</p>
                  </div>
                </li>
                <li className="flex">
                  <CheckCircle size={20} className="text-motor-red mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy">Comprehensive Service</h3>
                    <p className="text-gray-700">From sourcing your perfect car to handling all documentation and registration, we make the process seamless.</p>
                  </div>
                </li>
                <li className="flex">
                  <CheckCircle size={20} className="text-motor-red mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy">After-Sales Support</h3>
                    <p className="text-gray-700">Our relationship with customers doesn't end at the sale. We provide ongoing support for your vehicle.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1320&q=80" 
                alt="Luxury car" 
                className="rounded-lg w-full h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Luxury car" 
                className="rounded-lg w-full h-full object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-navy mb-6">Ready to Find Your Perfect Left-Hand Drive Car?</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Browse our current inventory or contact us to discuss your specific requirements. Our team is here to help you find your ideal vehicle.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/cars">View Our Stock</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
