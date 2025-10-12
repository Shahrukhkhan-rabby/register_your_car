"use client";

import Link from "next/link";
import { Phone, MessageCircle, Mail, Globe, Send, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";

function Contact (){

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" }); // reset form
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section className="bg-gradient-to-br from-[#1d253f] to-[#12182b] py-16 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-[#5f9a26]/10 to-transparent"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#5f9a26]/5 rounded-full blur-3xl"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#5f9a26]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Headline */}
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#5f9a26]/20 text-[#5f9a26] text-sm font-medium mb-4"
          >
            Get In Touch
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-snug md:leading-tight"
          >
            Contact Us – We're Here to Help You <span className="text-[#5f9a26]">Import Your Car</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#d2d5da] text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Have questions about importing your car to Spain? Our expert team is ready to guide you through the process, paperwork, and requirements.
          </motion.p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Column - Contact Methods */}
          <div className="lg:col-span-2 space-y-8">
            {/* WhatsApp Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl p-6 shadow-lg border border-[#343a42] space-y-5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#5f9a26]/10 rounded-bl-full"></div>
              <div className="flex items-center gap-3 relative z-10">
                <div className="p-2 bg-[#5f9a26]/20 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-[#5f9a26]" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  WhatsApp Support
                </h3>
              </div>
              <p className="text-[#d2d5da] relative z-10">
                Get quick answers to your questions. We typically respond within <span className="font-medium text-white">1-2 hours</span> on business days.
              </p>
              <Button
                asChild
                className="bg-[#5f9a26] hover:bg-[#4c7a20] text-white font-medium px-6 py-3 rounded-lg shadow-md w-full relative z-10"
              >
                <Link href="https://wa.me/34691900773" className="flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Start WhatsApp Chat
                </Link>
              </Button>
            </motion.div>

            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl p-6 shadow-lg border border-[#343a42] space-y-6 relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-[#5f9a26]/10 rounded-tr-full"></div>
              <h3 className="text-xl font-semibold text-white relative z-10">
                Contact Information
              </h3>
              <div className="space-y-4 text-[#d2d5da] relative z-10">
                <div className="flex items-center gap-4 p-3 bg-[#1d253f]/50 rounded-lg">
                  <div className="p-2 bg-[#5f9a26]/20 rounded-lg">
                    <Mail className="w-4 h-4 text-[#5f9a26]" />
                  </div>
                  <a
                    href={`mailto:${process.env.NEXT_PUBLIC_ADMIN_EMAIL}`}
                    className="hover:text-white transition-colors"
                  >
                    {process.env.NEXT_PUBLIC_ADMIN_EMAIL}
                  </a>
                </div>
                <div className="flex items-center gap-4 p-3 bg-[#1d253f]/50 rounded-lg">
                  <div className="p-2 bg-[#5f9a26]/20 rounded-lg">
                    <Phone className="w-4 h-4 text-[#5f9a26]" />
                  </div>
                  <span>+34 691 900 773</span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-[#1d253f]/50 rounded-lg">
                  <div className="p-2 bg-[#5f9a26]/20 rounded-lg">
                    <Globe className="w-4 h-4 text-[#5f9a26]" />
                  </div>
                  <a
                    href="http://www.register-your-car.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    www.register-your-car.com
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Service Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl p-6 shadow-lg border border-[#343a42]"
            >
              <h4 className="text-lg font-semibold text-white mb-3">Our Service Areas</h4>
              <p className="text-[#d2d5da] text-sm">
                We provide nationwide assistance for UK car imports across all of Spain, including Madrid, Barcelona, Valencia, Malaga, and all other regions.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl shadow-xl p-6 md:p-8 border border-[#343a42] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#5f9a26]/10 rounded-bl-full"></div>
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Send us a Message</h3>
              <p className="text-[#d2d5da] mb-8 relative z-10">Fill out the form below and we'll get back to you shortly.</p>
              
                    {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative">
            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#5f9a26]" />
            <input
              type="text"
              placeholder="Full Name*"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#1d253f] border border-[#343a42] text-white rounded-lg pl-11 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#5f9a26] transition-all"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#5f9a26]" />
            <input
              type="email"
              placeholder="Email Address*"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#1d253f] border border-[#343a42] text-white rounded-lg pl-11 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#5f9a26] transition-all"
            />
          </div>
        </div>

        <div className="relative">
          <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#5f9a26]" />
          <input
            type="tel"
            placeholder="Phone Number (optional)"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-[#1d253f] border border-[#343a42] text-white rounded-lg pl-11 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#5f9a26] transition-all"
          />
        </div>

        <div className="relative">
          <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-[#5f9a26]" />
          <textarea
            placeholder="How can we help you?*"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-[#1d253f] border border-[#343a42] text-white rounded-lg pl-11 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#5f9a26] transition-all resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={status === "loading"}
          className="bg-[#5f9a26] hover:bg-[#4c7a20] text-white font-semibold px-8 py-3.5 text-base w-full rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          {status === "loading" ? "Sending..." : "Send Message"}
        </Button>

        {status === "success" && (
          <p className="text-green-400 text-center">✅ Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-center">❌ Failed to send message. Try again.</p>
        )}
      </form>
            </div>
          </motion.div>
        </div>

        {/* Testimonial/Closing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#5f9a26]/20 mb-6">
            <span className="text-2xl">💬</span>
          </div>
          <blockquote className="text-[#d2d5da] text-lg italic">
            "Importing a car to Spain can feel overwhelming, but you don't have to handle it alone. Our team specializes in making vehicle registration stress-free for expats and residents alike."
          </blockquote>
          <div className="mt-6 text-sm text-[#5f9a26] font-medium">
            The Register Your Car Team
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;