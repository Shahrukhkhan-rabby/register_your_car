"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import {
  MapPin,
  Clock,
  Truck,
  CheckCircle,
  AlertCircle,
  Package,
  Search,
  RefreshCw,
  Download,
  Phone,
  MessageCircle,
  Mail,
} from "lucide-react";

// Mock tracking data
const trackingStages = [
  {
    id: 1,
    status: "Processing",
    description: "Your vehicle is being processed for shipping",
    date: "2023-10-15 10:30",
    completed: true,
    icon: <Package className="w-5 h-5" />,
  },
  {
    id: 2,
    status: "In Transit",
    description: "Your vehicle is on its way to the port",
    date: "2023-10-17 14:45",
    completed: true,
    icon: <Truck className="w-5 h-5" />,
  },
  {
    id: 3,
    status: "At Port",
    description: "Your vehicle has arrived at the departure port",
    date: "2023-10-19 09:15",
    completed: true,
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    id: 4,
    status: "Shipping",
    description: "Your vehicle is currently at sea",
    date: "2023-10-20 16:20",
    completed: false,
    icon: <Truck className="w-5 h-5" />,
  },
  {
    id: 5,
    status: "Arrival",
    description: "Your vehicle will arrive at destination port",
    date: "Expected 2023-10-25",
    completed: false,
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    id: 6,
    status: "Customs",
    description: "Your vehicle will go through customs clearance",
    date: "Expected 2023-10-26",
    completed: false,
    icon: <CheckCircle className="w-5 h-5" />,
  },
  {
    id: 7,
    status: "Delivery",
    description: "Your vehicle will be delivered to your location",
    date: "Expected 2023-10-28",
    completed: false,
    icon: <Truck className="w-5 h-5" />,
  },
];

export default function VehicleTrackingPage() {
  const [trackingId, setTrackingId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [trackingData, setTrackingData] = useState(null);

  const handleTrackVehicle = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setTrackingData({
        id: trackingId || "TRK-789012",
        vehicle: "BMW 3 Series",
        vin: "WBA8E9G50JNU90817",
        origin: "Southampton, UK",
        destination: "Barcelona, Spain",
        status: "Shipping",
        estimatedArrival: "2023-10-25",
        currentLocation: "In transit across Bay of Biscay",
        stages: trackingStages,
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="bg-gradient-to-br from-[#1d253f] to-[#12182b] py-16 md:py-24 relative overflow-hidden min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-[#5f9a26]/10 to-transparent"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#5f9a26]/5 rounded-full blur-3xl"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#5f9a26]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Headline */}
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#5f9a26]/20 text-[#5f9a26] text-sm font-medium mb-4"
          >
            VEHICLE TRACKING
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-snug md:leading-tight"
          >
            Track Your Vehicle <span className="text-[#5f9a26]">In Real Time</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#d2d5da] text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Enter your tracking number to get real-time updates on your vehicle's journey from the UK to Spain.
          </motion.p>
        </div>

        {/* Tracking Input Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl p-6 shadow-lg border border-[#343a42] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-28 h-28 bg-[#5f9a26]/10 rounded-bl-full"></div>
            <h3 className="text-xl font-semibold text-white mb-4 relative z-10">Track Your Shipment</h3>
            
            <form onSubmit={handleTrackVehicle} className="relative z-10">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#5f9a26]" />
                  <input
                    type="text"
                    placeholder="Enter your tracking number"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    className="w-full bg-[#1d253f] border border-[#343a42] text-white rounded-lg pl-11 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#5f9a26] transition-all"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[#5f9a26] hover:bg-[#4c7a20] text-white font-medium px-6 py-3.5 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Tracking...
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4" />
                      Track Vehicle
                    </>
                  )}
                </Button>
              </div>
              
              <p className="text-[#d2d5da] text-sm mt-4">
                Don't have your tracking number?{" "}
                <button 
                  type="button" 
                  className="text-[#5f9a26] hover:underline"
                  onClick={() => setTrackingId("TRK-789012")}
                >
                  Use demo tracking number
                </button>
              </p>
            </form>
          </div>
        </motion.div>

        {/* Tracking Results */}
        {trackingData && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-3 gap-8 mb-16"
          >
            {/* Vehicle Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl p-6 shadow-lg border border-[#343a42] relative overflow-hidden h-full">
                <div className="absolute bottom-0 left-0 w-28 h-28 bg-[#5f9a26]/10 rounded-tr-full"></div>
                <h3 className="text-xl font-semibold text-white mb-6 relative z-10">Shipment Details</h3>
                
                <div className="space-y-5 relative z-10">
                  <div>
                    <p className="text-[#d2d5da] text-sm">Tracking Number</p>
                    <p className="text-white font-medium">{trackingData.id}</p>
                  </div>
                  
                  <div>
                    <p className="text-[#d2d5da] text-sm">Vehicle</p>
                    <p className="text-white font-medium">{trackingData.vehicle}</p>
                  </div>
                  
                  <div>
                    <p className="text-[#d2d5da] text-sm">VIN</p>
                    <p className="text-white font-medium">{trackingData.vin}</p>
                  </div>
                  
                  <div>
                    <p className="text-[#d2d5da] text-sm">Origin</p>
                    <p className="text-white font-medium">{trackingData.origin}</p>
                  </div>
                  
                  <div>
                    <p className="text-[#d2d5da] text-sm">Destination</p>
                    <p className="text-white font-medium">{trackingData.destination}</p>
                  </div>
                  
                  <div>
                    <p className="text-[#d2d5da] text-sm">Current Status</p>
                    <p className="text-[#5f9a26] font-medium flex items-center gap-2">
                      {trackingData.status === "Shipping" ? (
                        <AlertCircle className="w-4 h-4" />
                      ) : (
                        <CheckCircle className="w-4 h-4" />
                      )}
                      {trackingData.status}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-[#d2d5da] text-sm">Estimated Arrival</p>
                    <p className="text-white font-medium">{trackingData.estimatedArrival}</p>
                  </div>
                  
                  <div>
                    <p className="text-[#d2d5da] text-sm">Current Location</p>
                    <p className="text-white font-medium">{trackingData.currentLocation}</p>
                  </div>
                </div>
                
                <Button className="w-full mt-6 bg-[#1d253f] hover:bg-[#2a344c] text-white border border-[#343a42] relative z-10">
                  <Download className="w-4 h-4 mr-2" />
                  Download Shipping Documents
                </Button>
              </div>
            </div>

            {/* Tracking Timeline */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl p-6 shadow-lg border border-[#343a42] relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#5f9a26]/10 rounded-bl-full"></div>
                <h3 className="text-xl font-semibold text-white mb-6 relative z-10">Shipping Progress</h3>
                
                <div className="relative z-10">
                  <div className="absolute left-5 top-0 h-full border-l-2 border-dashed border-[#5f9a26]/30"></div>
                  
                  <ul className="space-y-8">
                    {trackingData.stages.map((stage, index) => (
                      <li key={stage.id} className="relative pl-14">
                        <div className={`absolute left-5 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center ${
                          stage.completed ? "bg-[#5f9a26]" : "bg-[#2a344c] border border-[#5f9a26]/50"
                        }`}>
                          <div className={`${stage.completed ? "text-white" : "text-[#5f9a26]"}`}>
                            {stage.icon}
                          </div>
                        </div>
                        
                        <div className="bg-[#1d253f] border border-[#343a42] rounded-lg p-5">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                            <div>
                              <h4 className={`text-lg font-medium ${
                                stage.completed ? "text-[#5f9a26]" : "text-white"
                              }`}>
                                {stage.status}
                              </h4>
                              <p className="text-[#d2d5da] mt-1">{stage.description}</p>
                            </div>
                            <div className="flex items-center gap-2 text-[#d2d5da] text-sm whitespace-nowrap">
                              <Clock className="w-4 h-4" />
                              {stage.date}
                            </div>
                          </div>
                          
                          {stage.completed && (
                            <div className="flex items-center gap-2 text-[#5f9a26] text-sm mt-3">
                              <CheckCircle className="w-4 h-4" />
                              Completed
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl p-8 shadow-lg border border-[#343a42] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-28 h-28 bg-[#5f9a26]/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-28 h-28 bg-[#5f9a26]/10 rounded-tr-full"></div>
            
            <div className="text-center relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Need Help With Your Shipment?</h3>
              <p className="text-[#d2d5da] mb-8">
                Our support team is available to answer any questions about your vehicle's journey
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center p-4 bg-[#1d253f]/50 rounded-lg">
                  <div className="p-3 bg-[#5f9a26]/20 rounded-full mb-4">
                    <Phone className="w-6 h-6 text-[#5f9a26]" />
                  </div>
                  <h4 className="text-white font-medium mb-2">Call Us</h4>
                  <p className="text-[#d2d5da]">+34 691 900 773</p>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-[#1d253f]/50 rounded-lg">
                  <div className="p-3 bg-[#5f9a26]/20 rounded-full mb-4">
                    <MessageCircle className="w-6 h-6 text-[#5f9a26]" />
                  </div>
                  <h4 className="text-white font-medium mb-2">WhatsApp</h4>
                  <p className="text-[#d2d5da]">+34 691 900 773</p>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-[#1d253f]/50 rounded-lg">
                  <div className="p-3 bg-[#5f9a26]/20 rounded-full mb-4">
                    <Mail className="w-6 h-6 text-[#5f9a26]" />
                  </div>
                  <h4 className="text-white font-medium mb-2">Email</h4>
                  <p className="text-[#d2d5da]">support@register-your-car.com</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}