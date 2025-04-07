
import React, { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  {
    id: 7,
    title: "Jaguar F-Pace",
    year: 2022,
    price: "£54,995",
    mileage: "11,200",
    transmission: "Automatic",
    fuel: "Petrol",
    location: "Leeds",
    image: "https://images.unsplash.com/photo-1605515298946-d931222dad30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 8,
    title: "Lexus RX 450h",
    year: 2020,
    price: "£49,995",
    mileage: "22,500",
    transmission: "Automatic",
    fuel: "Hybrid",
    location: "Glasgow",
    image: "https://images.unsplash.com/photo-1672171773922-fe1da76698c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 9,
    title: "Mercedes-Benz EQC",
    year: 2022,
    price: "£68,995",
    mileage: "9,800",
    transmission: "Automatic",
    fuel: "Electric",
    location: "London",
    image: "https://images.unsplash.com/photo-1617469767053-3f0a8e2f4505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
];

const makes = ["All", "Audi", "BMW", "Jaguar", "Lexus", "Mercedes-Benz", "Porsche", "Range Rover", "Volvo"];
const fuels = ["All", "Petrol", "Diesel", "Electric", "Hybrid"];
const transmissions = ["All", "Automatic", "Manual"];
const years = ["All", "2023", "2022", "2021", "2020", "2019"];
const prices = ["All", "Up to £30,000", "£30,000 - £50,000", "£50,000 - £70,000", "£70,000+"];

const CarsPage: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMake, setSelectedMake] = useState("All");
  const [selectedFuel, setSelectedFuel] = useState("All");
  const [selectedTransmission, setSelectedTransmission] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  // Filter and sort logic
  const filteredCars = carsData.filter((car) => {
    const matchesSearch = car.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMake = selectedMake === "All" || car.title.includes(selectedMake);
    const matchesFuel = selectedFuel === "All" || car.fuel === selectedFuel;
    const matchesTransmission = selectedTransmission === "All" || car.transmission === selectedTransmission;
    const matchesYear = selectedYear === "All" || car.year.toString() === selectedYear;
    
    let matchesPrice = true;
    if (selectedPrice !== "All") {
      const price = parseInt(car.price.replace(/[^0-9]/g, ""));
      if (selectedPrice === "Up to £30,000") {
        matchesPrice = price < 30000;
      } else if (selectedPrice === "£30,000 - £50,000") {
        matchesPrice = price >= 30000 && price <= 50000;
      } else if (selectedPrice === "£50,000 - £70,000") {
        matchesPrice = price >= 50000 && price <= 70000;
      } else if (selectedPrice === "£70,000+") {
        matchesPrice = price > 70000;
      }
    }

    return matchesSearch && matchesMake && matchesFuel && matchesTransmission && matchesYear && matchesPrice;
  }).sort((a, b) => {
    if (sortOrder === "price_asc") {
      return parseInt(a.price.replace(/[^0-9]/g, "")) - parseInt(b.price.replace(/[^0-9]/g, ""));
    } else if (sortOrder === "price_desc") {
      return parseInt(b.price.replace(/[^0-9]/g, "")) - parseInt(a.price.replace(/[^0-9]/g, ""));
    } else if (sortOrder === "mileage") {
      return parseInt(a.mileage.replace(/[^0-9]/g, "")) - parseInt(b.mileage.replace(/[^0-9]/g, ""));
    } else {
      // Default: newest first
      return b.year - a.year;
    }
  });

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Page Header */}
      <div className="bg-navy py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Vehicles</h1>
          <p className="text-lg text-gray-200">
            Browse our collection of premium left-hand drive cars for the UK market.
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <Input
                className="pl-10"
                placeholder="Search by make, model..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button onClick={toggleFilters} className="md:w-auto w-full">
              <SlidersHorizontal className="mr-2" size={18} /> 
              {showFilters ? "Hide Filters" : "Show Filters"}
            </Button>
            <div className="md:w-64">
              <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by: Newest First" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Sort by: Newest First</SelectItem>
                  <SelectItem value="price_asc">Sort by: Price (Low to High)</SelectItem>
                  <SelectItem value="price_desc">Sort by: Price (High to Low)</SelectItem>
                  <SelectItem value="mileage">Sort by: Mileage (Low to High)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4 pt-4 border-t border-gray-200">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Make</label>
                <Select value={selectedMake} onValueChange={setSelectedMake}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {makes.map(make => (
                      <SelectItem key={make} value={make}>
                        {make}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Fuel Type</label>
                <Select value={selectedFuel} onValueChange={setSelectedFuel}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {fuels.map(fuel => (
                      <SelectItem key={fuel} value={fuel}>
                        {fuel}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Transmission</label>
                <Select value={selectedTransmission} onValueChange={setSelectedTransmission}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {transmissions.map(transmission => (
                      <SelectItem key={transmission} value={transmission}>
                        {transmission}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Year</label>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map(year => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Price Range</label>
                <Select value={selectedPrice} onValueChange={setSelectedPrice}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {prices.map(price => (
                      <SelectItem key={price} value={price}>
                        {price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <p className="text-gray-600">
            Showing <span className="font-medium">{filteredCars.length}</span> vehicles
          </p>
        </div>

        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredCars.map((car) => (
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
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No vehicles found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search filters</p>
            <Button onClick={() => {
              setSearchTerm("");
              setSelectedMake("All");
              setSelectedFuel("All");
              setSelectedTransmission("All");
              setSelectedYear("All");
              setSelectedPrice("All");
            }}>
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Pagination placeholder */}
        <div className="mt-12 flex justify-center">
          <div className="flex space-x-2">
            <Button variant="outline" disabled>Previous</Button>
            <Button variant="outline" className="bg-navy text-white">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsPage;
