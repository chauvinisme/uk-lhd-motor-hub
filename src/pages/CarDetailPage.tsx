
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Phone, Mail, MessageCircle, Share2, Heart, Clock, MapPin, Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CarCard from "@/components/CarCard";

// Mock car data
const carsData = [
  {
    id: 1,
    title: "Mercedes-Benz C-Class C200",
    year: 2021,
    price: "£36,995",
    mileage: "18,000",
    transmission: "Automatic",
    fuel: "Petrol",
    location: "London",
    engine: "2.0L I4",
    color: "Metallic Silver",
    doors: 4,
    bodyStyle: "Saloon",
    description: "This stunning Mercedes-Benz C-Class is in excellent condition with low mileage. Features include premium leather interior, panoramic sunroof, heated seats, LED headlights, and the latest MBUX infotainment system. Full service history available.",
    features: [
      "Leather Seats",
      "Navigation System",
      "Bluetooth",
      "Heated Seats",
      "Parking Sensors",
      "Reversing Camera",
      "Climate Control",
      "Cruise Control",
      "Alloy Wheels",
      "LED Headlights",
      "Panoramic Sunroof"
    ],
    images: [
      "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
    ]
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
    engine: "2.0L I4 + Electric",
    color: "Mineral White",
    doors: 4,
    bodyStyle: "Saloon",
    description: "This BMW 5 Series Hybrid combines luxury with efficiency. It features premium leather interior, professional navigation system, heated seats, and the latest BMW iDrive infotainment system. The hybrid powertrain provides excellent performance with lower emissions.",
    features: [
      "Leather Seats",
      "Navigation System",
      "Bluetooth",
      "Heated Seats",
      "Parking Sensors",
      "Reversing Camera",
      "Climate Control",
      "Cruise Control",
      "Alloy Wheels",
      "LED Headlights",
      "Hybrid Technology"
    ],
    images: [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
      "https://images.unsplash.com/photo-1543952560-8a1799c6665c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ]
  }
];

// Mock similar cars
const similarCars = [
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
  }
];

const CarDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [tab, setTab] = useState("overview");
  
  const car = carsData.find(c => c.id === Number(id));
  
  if (!car) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Car Not Found</h1>
        <p className="mb-8">Sorry, we couldn't find the vehicle you're looking for.</p>
        <Button asChild>
          <a href="/cars">Browse All Cars</a>
        </Button>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === car.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? car.images.length - 1 : prevIndex - 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="bg-gray-50 pb-16">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <nav className="text-sm">
            <ol className="list-none p-0 flex flex-wrap">
              <li className="flex items-center">
                <a href="/" className="text-gray-500 hover:text-motor-red">Home</a>
                <span className="mx-2 text-gray-400">/</span>
              </li>
              <li className="flex items-center">
                <a href="/cars" className="text-gray-500 hover:text-motor-red">Cars</a>
                <span className="mx-2 text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-800">{car.title}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Gallery */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              {/* Main Image with Navigation */}
              <div className="relative aspect-video overflow-hidden rounded-md mb-4">
                <img 
                  src={car.images[currentImageIndex]} 
                  alt={`${car.title} - Image ${currentImageIndex + 1}`} 
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                >
                  <ArrowLeft size={20} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                >
                  <ArrowRight size={20} />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-2">
                {car.images.map((image, index) => (
                  <div 
                    key={index}
                    className={`relative aspect-video cursor-pointer rounded-md overflow-hidden ${currentImageIndex === index ? 'ring-2 ring-motor-red' : ''}`}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${car.title} - Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <Tabs value={tab} onValueChange={setTab}>
                <TabsList className="w-full border-b">
                  <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
                  <TabsTrigger value="features" className="flex-1">Features</TabsTrigger>
                  <TabsTrigger value="contact" className="flex-1">Contact</TabsTrigger>
                </TabsList>
                <div className="p-6">
                  <TabsContent value="overview" className="space-y-6 mt-0">
                    <h2 className="text-2xl font-bold text-navy">{car.title}</h2>
                    <p className="text-gray-700">{car.description}</p>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Vehicle Specifications</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Make</span>
                          <span className="font-medium">{car.title.split(' ')[0]}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Model</span>
                          <span className="font-medium">{car.title.split(' ').slice(1).join(' ')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Year</span>
                          <span className="font-medium">{car.year}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Mileage</span>
                          <span className="font-medium">{car.mileage} miles</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Fuel</span>
                          <span className="font-medium">{car.fuel}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Transmission</span>
                          <span className="font-medium">{car.transmission}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Engine</span>
                          <span className="font-medium">{car.engine}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Color</span>
                          <span className="font-medium">{car.color}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Body Style</span>
                          <span className="font-medium">{car.bodyStyle}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Doors</span>
                          <span className="font-medium">{car.doors}</span>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="features" className="mt-0">
                    <h2 className="text-2xl font-bold text-navy mb-4">Vehicle Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2">
                      {car.features.map((feature, index) => (
                        <div key={index} className="flex items-center py-2">
                          <div className="w-2 h-2 bg-motor-red rounded-full mr-2"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="contact" className="mt-0">
                    <h2 className="text-2xl font-bold text-navy mb-4">Contact Seller</h2>
                    <p className="text-gray-600 mb-6">
                      Interested in this vehicle? Fill in the form below and we'll get back to you as soon as possible.
                    </p>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-motor-red"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-motor-red"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-motor-red"
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                            Subject
                          </label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            defaultValue={`Enquiry about ${car.title}`}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-motor-red"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-motor-red"
                          defaultValue={`Hi, I'm interested in the ${car.title} (£${car.price}) and would like more information.`}
                        ></textarea>
                      </div>
                      <div>
                        <Button type="submit" className="w-full">Send Enquiry</Button>
                      </div>
                    </form>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            {/* Price Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-navy mb-2">{car.price}</div>
              <div className="text-sm text-gray-500 mb-6">Price includes all taxes</div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <Calendar size={16} className="text-gray-500 mr-2" />
                  <span>{car.year}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="text-gray-500 mr-2" />
                  <span>{car.mileage} miles</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="text-gray-500 mr-2" />
                  <span>{car.location}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button className="w-full">
                  <Phone size={16} className="mr-2" /> Call
                </Button>
                <Button className="w-full" variant="outline">
                  <MessageCircle size={16} className="mr-2" /> WhatsApp
                </Button>
              </div>
            </div>

            {/* Actions Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Mail size={16} className="mr-2" /> Email Seller
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Share2 size={16} className="mr-2" /> Share
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Heart size={16} className="mr-2" /> Save
                </Button>
              </div>
            </div>

            {/* Seller Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Seller Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white font-bold mr-3">
                    UK
                  </div>
                  <div>
                    <div className="font-medium">UK-LHD Motors</div>
                    <div className="text-sm text-gray-500">Premium Dealer</div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View Seller Profile
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Cars */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-navy mb-6">Similar Vehicles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {similarCars.map((car) => (
              <CarCard
                key={car.id}
                id={car.id}
                title={car.title}
                year={car.year}
                price={car.price}
                mileage={car.mileage}
                transmission={car.transmission}
                fuel={car.fuel}
                location={car.location}
                image={car.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;
