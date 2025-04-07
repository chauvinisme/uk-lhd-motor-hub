
import React, { useState } from "react";
import { ChevronRight, CheckCircle, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

const SellYourCarPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    registration: "",
    vin: "",
    make: "",
    model: "",
    year: "",
    mileage: "",
    fuel: "",
    transmission: "",
    description: "",
    images: [],
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files);
      setFormData({
        ...formData,
        images: [...formData.images, ...filesArray],
      });
    }
  };

  const removeImage = (index: number) => {
    const updatedImages = [...formData.images];
    updatedImages.splice(index, 1);
    setFormData({
      ...formData,
      images: updatedImages,
    });
  };

  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">Car Information</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="registration" className="block text-sm font-medium text-gray-700 mb-1">
                    Registration Number (Optional)
                  </label>
                  <input
                    type="text"
                    id="registration"
                    name="registration"
                    value={formData.registration}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-motor-red"
                    placeholder="e.g. AB12 CDE"
                  />
                </div>
                <div>
                  <label htmlFor="vin" className="block text-sm font-medium text-gray-700 mb-1">
                    VIN (Optional)
                  </label>
                  <input
                    type="text"
                    id="vin"
                    name="vin"
                    value={formData.vin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-motor-red"
                    placeholder="e.g. WVWZZZ1JZXW000001"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-1">
                    Make *
                  </label>
                  <input
                    type="text"
                    id="make"
                    name="make"
                    value={formData.make}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-motor-red"
                    placeholder="e.g. Mercedes-Benz"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                    Model *
                  </label>
                  <input
                    type="text"
                    id="model"
                    name="model"
                    value={formData.model}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-motor-red"
                    placeholder="e.g. C-Class"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                    Year *
                  </label>
                  <input
                    type="number"
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-motor-red"
                    placeholder="e.g. 2020"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="mileage" className="block text-sm font-medium text-gray-700 mb-1">
                    Mileage *
                  </label>
                  <input
                    type="number"
                    id="mileage"
                    name="mileage"
                    value={formData.mileage}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-motor-red"
                    placeholder="e.g. 15000"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="fuel" className="block text-sm font-medium text-gray-700 mb-1">
                    Fuel Type *
                  </label>
                  <select
                    id="fuel"
                    name="fuel"
                    value={formData.fuel}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-motor-red"
                    required
                  >
                    <option value="">Select Fuel Type</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="transmission" className="block text-sm font-medium text-gray-700 mb-1">
                  Transmission *
                </label>
                <select
                  id="transmission"
                  name="transmission"
                  value={formData.transmission}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-motor-red"
                  required
                >
                  <option value="">Select Transmission</option>
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
                </select>
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description (Optional)
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-motor-red"
                  placeholder="Please provide additional details about your car, including its condition, features, and any other relevant information."
                ></textarea>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">Upload Photos</h2>
            <p className="text-gray-600 mb-6">
              Please upload clear photos of your car to help us provide an accurate valuation. 
              We recommend uploading images of the exterior from multiple angles, the interior, 
              and any notable features or damage.
            </p>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
              <input
                type="file"
                id="car-images"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="car-images"
                className="cursor-pointer flex flex-col items-center justify-center"
              >
                <Upload size={36} className="text-gray-400 mb-2" />
                <p className="text-lg font-medium text-gray-700 mb-1">
                  Drop files here or click to upload
                </p>
                <p className="text-sm text-gray-500">
                  Upload up to 10 images (max 5MB each)
                </p>
              </label>
            </div>

            {formData.images.length > 0 && (
              <div className="mt-6">
                <h3 className="font-medium text-navy mb-3">Uploaded Photos</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {formData.images.map((image, index) => (
                    <div key={index} className="relative">
                      <div className="aspect-square rounded-md overflow-hidden bg-gray-100">
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Car photo ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">Your Information</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-motor-red"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-motor-red"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-motor-red"
                  required
                />
              </div>

              <div className="mt-6">
                <div className="flex items-center">
                  <input
                    id="privacy-policy"
                    name="privacy-policy"
                    type="checkbox"
                    className="h-4 w-4 text-motor-red focus:ring-motor-red border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="privacy-policy" className="ml-2 block text-sm text-gray-700">
                    I agree to the{" "}
                    <a href="/privacy-policy" className="text-motor-red hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="/terms" className="text-motor-red hover:underline">
                      Terms of Service
                    </a>
                  </label>
                </div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-navy mb-4">Thank You!</h2>
            <p className="text-lg mb-6">
              Your car details have been successfully submitted. Our team will review your information 
              and get back to you within 24 hours with a valuation.
            </p>
            <div className="p-6 bg-gray-50 rounded-lg mb-8 max-w-md mx-auto">
              <h3 className="font-medium text-navy mb-2">Your Reference Number</h3>
              <p className="text-xl font-bold text-motor-red mb-2">SYC-{Math.floor(100000 + Math.random() * 900000)}</p>
              <p className="text-sm text-gray-600">
                Please keep this reference number for future communications.
              </p>
            </div>
            <Button asChild>
              <a href="/">Return to Home</a>
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  const renderProgressSteps = () => {
    const steps = ["Car Information", "Photos", "Your Information", "Confirmation"];
    
    return (
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {steps.map((stepName, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                  step > index + 1
                    ? "bg-green-500 text-white"
                    : step === index + 1
                    ? "bg-motor-red text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step > index + 1 ? <CheckCircle size={16} /> : index + 1}
              </div>
              <span className="text-xs text-center hidden sm:block">{stepName}</span>
            </div>
          ))}
        </div>
        <div className="relative mt-2">
          <div className="absolute h-1 bg-gray-200 top-0 left-0 right-0"></div>
          <div 
            className="absolute h-1 bg-motor-red top-0 left-0 transition-all duration-300" 
            style={{ width: `${(step - 1) * 33.33}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Hero Section */}
      <div className="bg-navy py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Sell Your Left-Hand Drive Car</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Get a fair and competitive offer for your left-hand drive vehicle with our hassle-free process.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          {step < 4 && renderProgressSteps()}
          
          <form onSubmit={(e) => {
            e.preventDefault();
            if (step < 4) {
              nextStep();
            }
          }}>
            {renderStepContent()}

            {step < 4 && (
              <div className="mt-8 flex justify-between">
                {step > 1 && (
                  <Button type="button" variant="outline" onClick={prevStep}>
                    Back
                  </Button>
                )}
                <div className={`${step > 1 ? 'ml-auto' : ''}`}>
                  <Button type="submit">
                    {step === 3 ? "Submit" : "Continue"} <ChevronRight size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Why Sell With Us */}
      {step < 4 && (
        <div className="container mx-auto px-4 mt-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Why Sell Your Left-Hand Drive Car With Us?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make selling your left-hand drive vehicle simple, transparent, and rewarding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={24} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-3">Fair Valuations</h3>
              <p className="text-gray-700">
                We understand the unique value of left-hand drive vehicles in the UK market and offer competitive prices based on real market data.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={24} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-3">Hassle-Free Process</h3>
              <p className="text-gray-700">
                Our streamlined process handles all the paperwork and administrative tasks, making selling your car quick and easy.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={24} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-3">Expert Team</h3>
              <p className="text-gray-700">
                Our specialists have years of experience with left-hand drive vehicles and provide personalized service throughout the selling process.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellYourCarPage;
