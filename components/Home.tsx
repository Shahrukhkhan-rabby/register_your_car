"use client";

import { AnimatePresence, motion } from "motion/react";
import { Car, Phone, Mail, MessageCircle, ChevronDown, ArrowRight, Shield, FileText, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

// Home Page Component
export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#1d253f] to-[#12182b] py-20 md:py-28 lg:py-36 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-[#5f9a26]/10 to-transparent"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#5f9a26]/5 rounded-full blur-3xl"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#5f9a26]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block px-4 py-1.5 rounded-full bg-[#5f9a26]/20 text-[#5f9a26] text-sm font-medium mb-6"
            >
              REGISTER YOUR CAR IN SPAIN
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Import Your Car to <span className="text-[#5f9a26]">Spain</span> Stress-Free
            </h1>
            
            <p className="text-[#d2d5da] text-lg sm:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              Your trusted partner for vehicle imports, registration, and compliance in Spain. 
              We handle the entire process so you can drive legally without the paperwork hassle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                className="bg-[#5f9a26] hover:bg-[#4c7a20] text-white font-semibold px-8 py-3.5 text-base rounded-lg shadow-md"
              >
                Start Your Import
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-[#5f9a26] text-[#5f9a26] hover:bg-[#5f9a26] hover:text-white font-semibold px-8 py-3.5 text-base rounded-lg shadow-md"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl p-8 border border-[#343a42] shadow-2xl">
              <div className="aspect-video intro-video rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="relative z-10 text-center p-6">
                  <div className="w-20 h-20 mx-auto mb-6 bg-[#5f9a26]/20 rounded-full flex items-center justify-center">
                    <Car className="w-10 h-10 text-[#5f9a26]" />
                  </div>
                  <p className="text-[#d2d5da] text-lg font-medium">
                    Watch our introduction video to learn how we simplify car imports
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#5f9a26]/20 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-[#5f9a26]" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#5f9a26]/20 rounded-full flex items-center justify-center">
              <FileText className="w-6 h-6 text-[#5f9a26]" />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-[#5f9a26] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#5f9a26] rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

// Services Section Component
const ServicesSection = () => {
  const services = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Car Import Service",
      description: "Complete import handling from documentation to delivery"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Registration",
      description: "Full Spanish registration and ITV compliance"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Legal Compliance",
      description: "Ensure your vehicle meets all Spanish regulations"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Consultation",
      description: "Expert guidance throughout the entire process"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#1d253f] to-[#161e32] py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            OUR SERVICES
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comprehensive Import Solutions
          </h2>
          
          <p className="text-[#d2d5da] text-lg max-w-2xl mx-auto">
            We handle every aspect of importing your vehicle to Spain, from paperwork to final registration
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl p-6 text-center border border-[#343a42] hover:shadow-xl transition-all"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[#5f9a26]/20 rounded-xl text-[#5f9a26]">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-[#d2d5da] text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Process Section Component
const ProcessSection = () => {
  const steps = [
    { number: "01", title: "Consultation", description: "We discuss your needs and provide a detailed plan" },
    { number: "02", title: "Documentation", description: "We handle all paperwork and customs declarations" },
    { number: "03", title: "Shipping", description: "Your vehicle is safely transported to Spain" },
    { number: "04", title: "Registration", description: "We complete all Spanish registration requirements" }
  ];

  return (
    <section className="bg-gradient-to-b from-[#161e32] to-[#1d253f] py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            OUR PROCESS
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How We Make It Simple
          </h2>
          
          <p className="text-[#d2d5da] text-lg max-w-2xl mx-auto">
            Our streamlined process takes the complexity out of importing your vehicle to Spain
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#5f9a26]/30"></div>
            
            {/* Process steps */}
            <div className="space-y-12 relative">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start"
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#5f9a26] text-white font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-[#d2d5da]">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Brought my BMW from Germany – everything was handled professionally and efficiently.",
      author: "James, Madrid"
    },
    {
      quote: "Saved me countless hours of paperwork and stress. Highly recommended!",
      author: "Sarah, Barcelona"
    },
    {
      quote: "The entire process was seamless from start to finish. Excellent service!",
      author: "David, Valencia"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#1d253f] to-[#161e32] py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            TESTIMONIALS
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          
          <p className="text-[#d2d5da] text-lg max-w-2xl mx-auto">
            Hear from satisfied customers who have successfully imported their vehicles with our help
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl p-6 border border-[#343a42]"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#d2d5da] italic mb-4">"{testimonial.quote}"</p>
              <p className="text-[#5f9a26] font-semibold">– {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section Component
const FAQSection = () => {
  const [active, setActive] = useState<string | null>(null);
  
  const faqs = [
    {
      number: "01",
      question: "Do I need to pay import duty?",
      answer: "Yes, import duty and VAT are applicable depending on the type and age of the car. Classic and modern cars have different tax rules."
    },
    {
      number: "02",
      question: "How long does the process take?",
      answer: "Typically 6–8 weeks including shipping, customs clearance, and registration. Times may vary depending on origin country."
    },
    {
      number: "03",
      question: "Can you import cars from the USA/Japan/EU?",
      answer: "Yes, we regularly import vehicles from the USA, Japan, and across the EU with full compliance to regulations."
    },
    {
      number: "04",
      question: "Do you handle classic/vintage cars?",
      answer: "Absolutely. We specialize in handling classic and vintage cars, ensuring careful shipping, tax handling, and registration."
    }
  ];

  return (
    <section className="relative bg-[#1d253f] py-16 md:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading & Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Section Intro */}
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-[#5f9a26] text-sm md:text-md tracking-wider uppercase">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-snug text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#d2d5da] max-w-md mx-auto lg:mx-0">
              We've compiled the most common questions our customers ask when
              importing a car to Spain. Click a question to reveal the answer.
            </p>
          </div>

          {/* Right Column: FAQ List */}
          <div className="space-y-6">
            {faqs.map((faq) => {
              const isOpen = active === faq.number;
              return (
                <motion.div
                  key={faq.number}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  onClick={() => setActive(isOpen ? null : faq.number)}
                  className={`rounded-xl border cursor-pointer p-5 sm:p-6 transition-all duration-300 ${
                    isOpen
                      ? "bg-[#2a2f34] border-[#5f9a26] shadow-lg"
                      : "bg-[#2a2f34]/60 border-[#333] hover:border-[#5f9a26]/60 hover:bg-[#2a2f34]/80"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    {/* Left: Number + Question */}
                    <div className="flex items-start gap-4">
                      <span className="text-[#5f9a26] font-bold text-lg sm:text-xl w-10 flex-shrink-0">
                        {faq.number}
                      </span>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                        {faq.question}
                      </h3>
                    </div>

                    {/* Chevron Icon */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#d2d5da]"
                    >
                      <ChevronDown size={22} />
                    </motion.div>
                  </div>

                  {/* Answer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <p className="text-sm sm:text-base mt-4 text-[#d2d5da] leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      {/* <motion.a
        href="https://wa.me/34691900773"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[#5f9a26] w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg hover:bg-[#4c7a20] transition-colors"
      >
        <MessageCircle size={26} className="text-white" />
      </motion.a> */}
    </section>
  );
};



// Contact Section Component
const ContactSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#1d253f] to-[#12182b] py-16 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-[#5f9a26]/10 to-transparent"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#5f9a26]/5 rounded-full blur-3xl"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#5f9a26]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            GET STARTED
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Import Your Car?
          </h2>
          
          <p className="text-[#d2d5da] text-lg max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Let us handle the complexities while you look forward to driving your imported car.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl p-6 border border-[#343a42]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#5f9a26]/20 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-[#5f9a26]" />
                </div>
                <h3 className="text-xl font-semibold text-white">WhatsApp Support</h3>
              </div>
              <p className="text-[#d2d5da] mb-4">
                Get quick answers to your questions. We typically respond within 1-2 hours on business days.
              </p>
              <Button
                className="bg-[#5f9a26] hover:bg-[#4c7a20] text-white w-full"
              >
                Start WhatsApp Chat
              </Button>
            </div>

            <div className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl p-6 border border-[#343a42]">
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-[#1d253f]/50 rounded-lg">
                  <div className="p-2 bg-[#5f9a26]/20 rounded-lg">
                    <Mail className="w-4 h-4 text-[#5f9a26]" />
                  </div>
                  <a href={`mailto:${process.env.NEXT_PUBLIC_ADMIN_EMAIL}`} className="text-[#d2d5da] hover:text-white">
                  {process.env.NEXT_PUBLIC_ADMIN_EMAIL}
                  </a>
                </div>
                
                <div className="flex items-center gap-4 p-3 bg-[#1d253f]/50 rounded-lg">
                  <div className="p-2 bg-[#5f9a26]/20 rounded-lg">
                    <Phone className="w-4 h-4 text-[#5f9a26]" />
                  </div>
                  <span className="text-[#d2d5da]">+34 691 900 773</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl p-8 border border-[#343a42]"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Send us a Message</h3>
            <p className="text-[#d2d5da] mb-6">Fill out the form below and we'll get back to you shortly.</p>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name*"
                    required
                    className="w-full bg-[#1d253f] border border-[#343a42] text-white rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#5f9a26]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address*"
                    required
                    className="w-full bg-[#1d253f] border border-[#343a42] text-white rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#5f9a26]"
                  />
                </div>
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number (optional)"
                  className="w-full bg-[#1d253f] border border-[#343a42] text-white rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#5f9a26]"
                />
              </div>
              
              <div>
                <textarea
                  placeholder="How can we help you?*"
                  required
                  rows={5}
                  className="w-full bg-[#1d253f] border border-[#343a42] text-white rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#5f9a26] resize-none"
                />
              </div>
              
              <Button
                type="submit"
                className="bg-[#5f9a26] hover:bg-[#4c7a20] text-white w-full py-3.5"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};