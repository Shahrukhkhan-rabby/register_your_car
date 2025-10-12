"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Car, Target, CheckCircle, ArrowRight, Home, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const headlightTypes = [
    {
      title: "Reflector Beam",
      description: "Realigned for perfect compliance with Spanish ITV standards.",
      img: "https://images.squarespace-cdn.com/content/v1/68b4cc69d9311521f7061381/ddcfa912-f6f2-4c83-a38c-f48c96c46309/headlights.jpg?format=1500w",
    },
    {
      title: "Projector Beam",
      description: "Precision-adjusted with specialist equipment for optimal performance.",
      img: "https://images.squarespace-cdn.com/content/v1/68b4cc69d9311521f7061381/e8168d66-47cb-4e07-af06-a50624e79296/projectorlight.jpg?format=1500w",
    },
    {
      title: "LED Headlamps",
      description: "Modern units professionally realigned for European road compliance.",
      img: "https://images.squarespace-cdn.com/content/v1/68b4cc69d9311521f7061381/ddcfa912-f6f2-4c83-a38c-f48c96c46309/headlights.jpg?format=1500w",
    },
    {
      title: "Xenon & Bi-Xenon",
      description: "Fully road-legal in Europe and the UK after professional adjustment.",
      img: "https://images.squarespace-cdn.com/content/v1/68b4cc69d9311521f7061381/899465be-3185-4e50-8f35-891ff1274d0d/Diffrent-Types-of-Headlights-Used-in-Car-haseebautos.jpg?format=1500w",
    },
    {
      title: "Halogen Headlamps",
      description: "Cost-effective realignment without the need for replacement units.",
      img: "https://images.squarespace-cdn.com/content/v1/68b4cc69d9311521f7061381/ddcfa912-f6f2-4c83-a38c-f48c96c46309/headlights.jpg?format=1500w",
    },
    {
      title: "Low Beam Units",
      description: "Laser-precision alignment for any vehicle model and make.",
      img: "https://images.squarespace-cdn.com/content/v1/68b4cc69d9311521f7061381/899465be-3185-4e50-8f35-891ff1274d0d/Diffrent-Types-of-Headlights-Used-in-Car-haseebautos.jpg?format=1500w",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#1d253f] to-[#12182b] py-16 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-[#5f9a26]/10 to-transparent"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#5f9a26]/5 rounded-full blur-3xl"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#5f9a26]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-sm text-[#d2d5da] flex items-center gap-2"
        >
          <Link href="/" className="hover:text-[#5f9a26] transition-colors flex items-center gap-1">
            <Home className="w-3 h-3" />
            Home
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-[#5f9a26] transition-colors">
            Services
          </Link>
          <span>/</span>
          <span className="text-[#5f9a26]">Headlight Realignment</span>
        </motion.div> */}

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#5f9a26]/20 text-[#5f9a26] text-sm font-medium mb-4"
          >
            ITV COMPLIANCE SERVICE
          </motion.div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Headlamp Realignment for <span className="text-[#5f9a26]">Spanish ITV Test</span>
          </h1>
          
          <p className="text-[#d2d5da] text-lg max-w-3xl mx-auto mb-8">
            Importing your UK vehicle to Spain? Don't let your headlights fail the ITV test.
            Our expert technicians can realign almost every type of UK right-hand drive
            headlamp to meet European standards — saving you the cost of replacements.
          </p>
          
          <Button
            asChild
            className="bg-[#5f9a26] hover:bg-[#4c7a20] text-white font-semibold px-8 py-3.5 text-base rounded-lg shadow-md"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Book Your Headlight Service
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <div className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl p-6 text-center border border-[#343a42]">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#5f9a26]/20 mb-4">
              <Target className="w-6 h-6 text-[#5f9a26]" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Precision Alignment</h3>
            <p className="text-[#d2d5da] text-sm">Laser-guided adjustment for perfect beam pattern compliance</p>
          </div>
          
          <div className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl p-6 text-center border border-[#343a42]">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#5f9a26]/20 mb-4">
              <CheckCircle className="w-6 h-6 text-[#5f9a26]" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">ITV Guarantee</h3>
            <p className="text-[#d2d5da] text-sm">Fully compliant with Spanish ITV regulations and standards</p>
          </div>
          
          <div className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl p-6 text-center border border-[#343a42]">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#5f9a26]/20 mb-4">
              <Wrench className="w-6 h-6 text-[#5f9a26]" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Cost Effective</h3>
            <p className="text-[#d2d5da] text-sm">Avoid expensive headlight replacements with our professional service</p>
          </div>
        </motion.div>

        {/* Headlight Types Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Headlight Types We Service
            </h2>
            <p className="text-[#d2d5da] max-w-2xl mx-auto">
              We specialize in realigning all types of UK headlights for Spanish road compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {headlightTypes.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl p-6 border border-[#343a42] hover:shadow-xl transition-all"
              >
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#5f9a26] mb-2">{item.title}</h3>
                <p className="text-[#d2d5da] text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl p-8 md:p-12 border border-[#343a42] text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#5f9a26]/20 mb-6">
            <Car className="w-8 h-8 text-[#5f9a26]" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready for Your ITV Test?
          </h2>
          
          <p className="text-[#d2d5da] text-lg max-w-2xl mx-auto mb-6">
            Don't risk failing your Spanish import test due to headlight alignment issues. 
            Our expert service ensures your vehicle meets all European standards.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-[#5f9a26] hover:bg-[#4c7a20] text-white font-semibold px-8 py-3.5 text-base rounded-lg shadow-md"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Schedule Service
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="border-[#5f9a26] text-[#5f9a26] hover:bg-[#5f9a26] hover:text-white font-semibold px-8 py-3.5 text-base rounded-lg shadow-md"
            >
              <Link href="/services" className="flex items-center gap-2">
                View All Services
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Testimonial/Closing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#5f9a26]/20 mb-6">
            <span className="text-2xl">💡</span>
          </div>
          <blockquote className="text-[#d2d5da] text-lg italic">
            "Drive with confidence knowing your headlights are safe, legal, and road-ready in Spain. 
            Our professional realignment service ensures your vehicle passes the ITV test first time."
          </blockquote>
          <div className="mt-6 text-sm text-[#5f9a26] font-medium">
            The Register Your Car Team
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;