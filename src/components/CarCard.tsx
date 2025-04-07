
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface CarCardProps {
  id: number;
  title: string;
  year: number;
  price: string;
  mileage: string;
  transmission: string;
  fuel: string;
  location: string;
  image: string;
}

const CarCard: React.FC<CarCardProps> = ({
  id,
  title,
  year,
  price,
  mileage,
  transmission,
  fuel,
  location,
  image,
}) => {
  return (
    <Link
      to={`/cars/${id}`}
      className="car-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
    >
      <div className="h-48 sm:h-52 md:h-56 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 md:p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-navy">{title}</h3>
          <span className="text-motor-red font-semibold text-lg">{price}</span>
        </div>
        <p className="text-gray-500 mb-3">{year}</p>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
          <div>• {mileage} miles</div>
          <div>• {transmission}</div>
          <div>• {fuel}</div>
          <div>• {location}</div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
          <span className="text-navy font-medium">View Details</span>
          <ChevronRight size={20} className="text-motor-red" />
        </div>
      </div>
    </Link>
  );
};

export default CarCard;
