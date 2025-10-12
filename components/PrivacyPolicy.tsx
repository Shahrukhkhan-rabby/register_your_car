"use client";

import { motion } from "motion/react";
import { Shield, Lock, Eye, Mail, FileText } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-gradient-to-br from-[#1d253f] to-[#12182b] py-16 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-[#5f9a26]/10 to-transparent"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#5f9a26]/5 rounded-full blur-3xl"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#5f9a26]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#5f9a26]/20 mb-6">
            <Shield className="w-8 h-8 text-[#5f9a26]" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#5f9a26]/20 text-[#5f9a26] text-sm font-medium mb-4"
          >
            PRIVACY & DATA PROTECTION
          </motion.div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          
          <p className="text-[#d2d5da] text-lg">
            Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </motion.div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl shadow-lg p-6 md:p-8 border border-[#343a42] mb-8"
          >
            <p className="text-[#d2d5da] text-lg leading-relaxed">
              At <span className="text-white font-semibold">Register Your Car</span>, your privacy matters. 
              We are committed to protecting the information you share with us and being transparent about 
              how we collect, use, and store it.
            </p>
          </motion.div>

          {/* Information We Collect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl shadow-lg p-6 md:p-8 border border-[#343a42] mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#5f9a26]/20 rounded-lg">
                <FileText className="w-5 h-5 text-[#5f9a26]" />
              </div>
              <h2 className="text-2xl font-semibold text-white">1. Information We Collect</h2>
            </div>
            
            <ul className="space-y-4 text-[#d2d5da]">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5f9a26] mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-white">Information you provide:</strong> Name, email, phone number, car details, and other information necessary for importing your vehicle.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5f9a26] mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-white">Technical data:</strong> IP address, browser type, time zone, device type, and usage data collected through cookies and similar technologies.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5f9a26] mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-white">Cookies:</strong> Stored to improve your experience (see our full Cookies Policy for details).
                </div>
              </li>
            </ul>
          </motion.div>

          {/* How We Use Your Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl shadow-lg p-6 md:p-8 border border-[#343a42] mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#5f9a26]/20 rounded-lg">
                <Eye className="w-5 h-5 text-[#5f9a26]" />
              </div>
              <h2 className="text-2xl font-semibold text-white">2. How We Use Your Information</h2>
            </div>
            
            <ul className="space-y-4 text-[#d2d5da]">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5f9a26] mt-2 flex-shrink-0"></div>
                <div>To prepare and deliver accurate car import quotes and services.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5f9a26] mt-2 flex-shrink-0"></div>
                <div>To communicate with you via email, WhatsApp, or phone regarding your import process.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5f9a26] mt-2 flex-shrink-0"></div>
                <div>To improve our services and website performance based on user interactions.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5f9a26] mt-2 flex-shrink-0"></div>
                <div>To comply with legal obligations related to vehicle importation and registration.</div>
              </li>
            </ul>
          </motion.div>

          {/* Data Storage and Security */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl shadow-lg p-6 md:p-8 border border-[#343a42] mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#5f9a26]/20 rounded-lg">
                <Lock className="w-5 h-5 text-[#5f9a26]" />
              </div>
              <h2 className="text-2xl font-semibold text-white">3. Data Storage and Security</h2>
            </div>
            
            <p className="text-[#d2d5da] mb-4">
              Your data is stored securely on trusted servers with appropriate encryption measures. 
              We take comprehensive measures to protect your personal information against unauthorized 
              access, alteration, disclosure, or destruction.
            </p>
            
            <p className="text-[#d2d5da]">
              We never sell, rent, or trade your personal information to third parties for marketing purposes. 
              Data is only shared with necessary service providers involved in the vehicle import process 
              (shipping companies, registration authorities, etc.) under strict confidentiality agreements.
            </p>
          </motion.div>

          {/* Your Rights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl shadow-lg p-6 md:p-8 border border-[#343a42] mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#5f9a26]/20 rounded-lg">
                <Mail className="w-5 h-5 text-[#5f9a26]" />
              </div>
              <h2 className="text-2xl font-semibold text-white">4. Your Rights</h2>
            </div>
            
            <p className="text-[#d2d5da] mb-4">
              Under data protection laws, you have rights including:
            </p>
            
            <ul className="space-y-4 text-[#d2d5da] mb-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5f9a26] mt-2 flex-shrink-0"></div>
                <div>Request access to the personal data we hold about you.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5f9a26] mt-2 flex-shrink-0"></div>
                <div>Ask us to correct or update inaccurate or incomplete information.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5f9a26] mt-2 flex-shrink-0"></div>
                <div>Request deletion of your personal data when it's no longer necessary for our services.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5f9a26] mt-2 flex-shrink-0"></div>
                <div>Object to processing of your personal data in certain circumstances.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5f9a26] mt-2 flex-shrink-0"></div>
                <div>Request the transfer of your data to another organization in a structured format.</div>
              </li>
            </ul>
            
            <div className="bg-[#1d253f] rounded-lg p-4 border border-[#343a42]">
              <p className="text-[#d2d5da]">
                To exercise your rights or for any privacy-related questions, contact us at:{" "}
                <a 
                  href={`mailto:${process.env.NEXT_PUBLIC_ADMIN_EMAIL}`} 
                  className="text-[#5f9a26] hover:text-[#4c7a20] font-medium transition-colors"
                >
                  {process.env.NEXT_PUBLIC_ADMIN_EMAIL}
                </a>
              </p>
            </div>
          </motion.div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl shadow-lg p-6 md:p-8 border border-[#343a42]"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">5. Changes to This Policy</h2>
            
            <p className="text-[#d2d5da]">
              We may update this Privacy Policy from time to time to reflect changes in our practices 
              or for other operational, legal, or regulatory reasons. The updated version will be 
              indicated by an updated "Last updated" date and the updated version will be effective 
              as soon as it is accessible. We encourage you to review this privacy policy frequently 
              to be informed of how we are protecting your information.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#5f9a26]/20 mb-6">
              <Shield className="w-6 h-6 text-[#5f9a26]" />
            </div>
            <p className="text-[#d2d5da] text-lg italic max-w-2xl mx-auto">
              "We take your privacy seriously and are committed to protecting your personal information 
              throughout the car import process."
            </p>
            <div className="mt-4 text-sm text-[#5f9a26] font-medium">
              The Register Your Car Team
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;