
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data for featured listings
const featuredListings = [
  {
    id: 1,
    title: "Mercedes-Benz C-Class C200",
    year: 2021,
    price: "£36,995",
    mileage: "18,000",
    transmission: "Automatic",
    fuel: "Petrol",
    location: "London",
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    title: "BMW 5 Series 530e",
    year: 2020,
    price: "£42,850",
    mileage: "15,500",
    transmission: "Automatic",
    fuel: "Hybrid",
    location: "Manchester",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
  },
  {
    id: 3,
    title: "Audi A6 Avant",
    year: 2022,
    price: "£48,750",
    mileage: "8,200",
    transmission: "Automatic",
    fuel: "Diesel",
    location: "Birmingham",
    image: "https://images.unsplash.com/photo-1606664922998-f1a95737e087?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 4,
    title: "Volvo XC90 T8",
    year: 2021,
    price: "£57,995",
    mileage: "12,500",
    transmission: "Automatic",
    fuel: "Hybrid",
    location: "Edinburgh",
    image: "https://images.unsplash.com/photo-1653417580576-69120329f5bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 5,
    title: "Porsche Taycan",
    year: 2022,
    price: "£82,995",
    mileage: "5,100",
    transmission: "Automatic",
    fuel: "Electric",
    location: "London",
    image: "https://images.unsplash.com/photo-1611958219676-dc53ca85842a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 6,
    title: "Range Rover Sport",
    year: 2021,
    price: "£65,995",
    mileage: "16,800",
    transmission: "Automatic",
    fuel: "Diesel",
    location: "Bristol",
    image: "https://images.unsplash.com/photo-1651749345786-526aa2c63021?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
];

// Mock testimonials
const testimonials = [
  {
    id: 1,
    name: "James Wilson",
    title: "Happy Customer",
    text: "The service was excellent. I found the perfect left-hand drive BMW for my needs, and the team was professional throughout the entire process.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sophie Blake",
    title: "Satisfied Buyer",
    text: "I was looking for a specific Mercedes model with left-hand drive and UK-LHD Motors found it for me within weeks. Fantastic service and follow-up.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Thompson",
    title: "Regular Customer",
    text: "This is my third car from UK-LHD Motors. Their expertise in the left-hand drive market is unmatched. Highly recommend their services!",
    rating: 4,
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] bg-charcoal flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-navy/80">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1320&q=80"
              alt="Luxury cars"
              className="w-full h-full object-cover mix-blend-overlay"
            />
          </div>
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-shadow">
              Premium Left-Hand Drive Vehicles in the UK
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Discover our collection of high-quality left-hand drive cars, meticulously selected for the UK market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-motor-red hover:bg-red-700 text-white">
                <Link to="/cars">View Our Stock</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-navy">
                <Link to="/sell-your-car">Sell Your Car</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Featured Vehicles</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our selection of premium left-hand drive vehicles, ready for the UK roads.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredListings.map((car) => (
              <Link 
                to={`/cars/${car.id}`}
                key={car.id}
                className="car-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-48 sm:h-52 md:h-56 overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.title}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-4 md:p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-navy">{car.title}</h3>
                    <span className="text-motor-red font-semibold text-lg">{car.price}</span>
                  </div>
                  <p className="text-gray-500 mb-3">{car.year}</p>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                    <div>• {car.mileage} miles</div>
                    <div>• {car.transmission}</div>
                    <div>• {car.fuel}</div>
                    <div>• {car.location}</div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-navy font-medium">View Details</span>
                    <ChevronRight size={20} className="text-motor-red" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link to="/cars">View All Vehicles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Why Choose UK-LHD Motors</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We specialize in premium left-hand drive vehicles with unmatched service and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <div className="w-16 h-16 bg-motor-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-motor-red" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                Every vehicle undergoes a comprehensive inspection before joining our stock to ensure top condition.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gray-50">
              <div className="w-16 h-16 bg-motor-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-motor-red" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Specialized Expertise</h3>
              <p className="text-gray-600">
                Our team has over 20 years of experience in the left-hand drive vehicle market.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gray-50">
              <div className="w-16 h-16 bg-motor-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-motor-red" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Exceptional Service</h3>
              <p className="text-gray-600">
                From initial inquiry to after-sales support, we provide personalized service throughout your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sell Your Car CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Looking to Sell Your Left-Hand Drive Car?</h2>
            <p className="text-xl text-gray-300 mb-8">
              We offer competitive prices and a hassle-free process. Get a valuation today!
            </p>
            <Button asChild size="lg" className="bg-motor-red hover:bg-red-700">
              <Link to="/sell-your-car">Sell Your Car</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our customers have to say about their experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-navy">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
