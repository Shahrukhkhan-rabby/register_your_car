"use client";

import { motion } from "motion/react";
import { Scale, FileText, Shield, AlertCircle, Copyright } from "lucide-react";

const Terms = () => {
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
            <Scale className="w-8 h-8 text-[#5f9a26]" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#5f9a26]/20 text-[#5f9a26] text-sm font-medium mb-4"
          >
            LEGAL TERMS
          </motion.div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Terms & Conditions
          </h1>
          
          <p className="text-[#d2d5da] text-lg">
            Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </motion.div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl shadow-lg p-6 md:p-8 border border-[#343a42] mb-8"
          >
            <p className="text-[#d2d5da] text-lg leading-relaxed">
              Please read these Terms and Conditions carefully before using our services. 
              By accessing or using Register Your Car's services, you agree to be bound by these terms.
            </p>
          </motion.div>

          {/* Services Offered */}
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
              <h2 className="text-2xl font-semibold text-white">1. Services Offered</h2>
            </div>
            
            <div className="space-y-4 text-[#d2d5da]">
              <p>
                We assist with importing and registering vehicles from the UK to Spain. 
                Our services include documentation preparation, customs clearance, 
                and vehicle registration assistance.
              </p>
              <div className="bg-[#1d253f] rounded-lg p-4 border border-[#343a42]">
                <p className="text-[#d2d5da] text-sm">
                  <strong className="text-white">Important:</strong> Online quotes are estimates only. 
                  Final costs may vary based on government fees, customs duties, 
                  and documentation requirements.
                </p>
              </div>
            </div>
          </motion.div>

          {/* User Responsibilities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl shadow-lg p-6 md:p-8 border border-[#343a42] mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#5f9a26]/20 rounded-lg">
                <Shield className="w-5 h-5 text-[#5f9a26]" />
              </div>
              <h2 className="text-2xl font-semibold text-white">2. User Responsibilities</h2>
            </div>
            
            <ul className="space-y-4 text-[#d2d5da]">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5f9a26] mt-2 flex-shrink-0"></div>
                <div>Provide accurate and complete details when submitting information about your vehicle and import requirements.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5f9a26] mt-2 flex-shrink-0"></div>
                <div>Ensure all documentation provided to us is legitimate and accurate.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5f9a26] mt-2 flex-shrink-0"></div>
                <div>Do not use the website for unlawful or fraudulent purposes.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5f9a26] mt-2 flex-shrink-0"></div>
                <div>Cooperate with our team throughout the import process by providing necessary information in a timely manner.</div>
              </li>
            </ul>
          </motion.div>

          {/* Disclaimer of Liability */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl shadow-lg p-6 md:p-8 border border-[#343a42] mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#5f9a26]/20 rounded-lg">
                <AlertCircle className="w-5 h-5 text-[#5f9a26]" />
              </div>
              <h2 className="text-2xl font-semibold text-white">3. Disclaimer of Liability</h2>
            </div>
            
            <ul className="space-y-4 text-[#d2d5da]">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5f9a26] mt-2 flex-shrink-0"></div>
                <div>We do not guarantee the website will always be error-free or uninterrupted.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5f9a26] mt-2 flex-shrink-0"></div>
                <div>We are not liable for financial or legal consequences resulting from the use of information provided on this website.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5f9a26] mt-2 flex-shrink-0"></div>
                <div>We are not responsible for delays or changes in government policies that may affect import costs or timelines.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5f9a26] mt-2 flex-shrink-0"></div>
                <div>Vehicle import regulations change frequently; we strive to provide current information but cannot guarantee its accuracy at all times.</div>
              </li>
            </ul>
          </motion.div>

          {/* Intellectual Property */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl shadow-lg p-6 md:p-8 border border-[#343a42] mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#5f9a26]/20 rounded-lg">
                <Copyright className="w-5 h-5 text-[#5f9a26]" />
              </div>
              <h2 className="text-2xl font-semibold text-white">4. Intellectual Property</h2>
            </div>
            
            <div className="space-y-4 text-[#d2d5da]">
              <p>
                All content on this website, including but not limited to text, graphics, logos, 
                images, and software, is the property of{" "}
                <span className="text-white font-semibold">Register Your Car</span> and is protected 
                by international copyright and intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, display, prepare derivative works based on, 
                or otherwise use any content from this website without prior written permission from 
                Register Your Car.
              </p>
            </div>
          </motion.div>

          {/* Updates to Terms */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl shadow-lg p-6 md:p-8 border border-[#343a42] mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#5f9a26]/20 rounded-lg">
                <FileText className="w-5 h-5 text-[#5f9a26]" />
              </div>
              <h2 className="text-2xl font-semibold text-white">5. Updates to Terms</h2>
            </div>
            
            <div className="space-y-4 text-[#d2d5da]">
              <p>
                We reserve the right to revise these Terms and Conditions at any time without prior notice. 
                The updated version will be indicated by a revised "Last updated" date.
              </p>
              <p>
                By continuing to use our services after any revisions become effective, 
                you agree to be bound by the updated terms. We encourage you to review 
                these Terms periodically for any changes.
              </p>
            </div>
          </motion.div>

          {/* Governing Law */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl shadow-lg p-6 md:p-8 border border-[#343a42]"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">6. Governing Law</h2>
            
            <div className="space-y-4 text-[#d2d5da]">
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with 
                the laws of Spain. Any disputes relating to these terms will be subject to the 
                exclusive jurisdiction of the courts of Spain.
              </p>
              <p>
                If any provision of these Terms is found to be invalid or unenforceable by a court 
                of competent jurisdiction, the remaining provisions will remain in full force and effect.
              </p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#5f9a26]/20 mb-6">
              <Scale className="w-6 h-6 text-[#5f9a26]" />
            </div>
            <p className="text-[#d2d5da] text-lg italic max-w-2xl mx-auto">
              "We believe in transparency and clear communication. If you have any questions about our Terms and Conditions, please don't hesitate to contact us."
            </p>
            <div className="mt-6">
              <a 
                href="/contact" 
                className="text-[#5f9a26] hover:text-[#4c7a20] font-medium transition-colors"
              >
                Contact Us for Clarification →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Terms;