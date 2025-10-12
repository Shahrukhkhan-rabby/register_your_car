"use client";

import { motion } from "motion/react";
import { Cookie, BarChart3, Settings, Shield, ExternalLink } from "lucide-react";

const CookiePolicy = () => {
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
            <Cookie className="w-8 h-8 text-[#5f9a26]" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#5f9a26]/20 text-[#5f9a26] text-sm font-medium mb-4"
          >
            DATA & PRIVACY
          </motion.div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Cookies Policy
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
              This Cookies Policy explains how Register Your Car uses cookies and similar technologies 
              to recognize you when you visit our website. It explains what these technologies are and 
              why we use them, as well as your rights to control our use of them.
            </p>
          </motion.div>

          {/* What Are Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl shadow-lg p-6 md:p-8 border border-[#343a42] mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#5f9a26]/20 rounded-lg">
                <Cookie className="w-5 h-5 text-[#5f9a26]" />
              </div>
              <h2 className="text-2xl font-semibold text-white">1. What Are Cookies?</h2>
            </div>
            
            <div className="space-y-4 text-[#d2d5da]">
              <p>
                Cookies are small text files that are placed on your computer, smartphone, or other 
                device when you visit websites. They are widely used to make websites work more 
                efficiently and provide information to the website owners.
              </p>
              <div className="bg-[#1d253f] rounded-lg p-4 border border-[#343a42]">
                <p className="text-[#d2d5da] text-sm">
                  Cookies are not viruses and cannot install malware on your device. They simply 
                  help websites remember your preferences and improve your browsing experience.
                </p>
              </div>
            </div>
          </motion.div>

          {/* How We Use Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl shadow-lg p-6 md:p-8 border border-[#343a42] mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#5f9a26]/20 rounded-lg">
                <BarChart3 className="w-5 h-5 text-[#5f9a26]" />
              </div>
              <h2 className="text-2xl font-semibold text-white">2. How We Use Cookies</h2>
            </div>
            
            <ul className="space-y-4 text-[#d2d5da]">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5f9a26] mt-2 flex-shrink-0"></div>
                <div>Track website traffic and user behavior with analytics tools (e.g., Google Analytics)</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5f9a26] mt-2 flex-shrink-0"></div>
                <div>Understand how visitors use our website to improve content and functionality</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5f9a26] mt-2 flex-shrink-0"></div>
                <div>Improve website performance and loading speed</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5f9a26] mt-2 flex-shrink-0"></div>
                <div>Save form inputs temporarily for your convenience during the quoting process</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5f9a26] mt-2 flex-shrink-0"></div>
                <div>Remember your preferences and settings for future visits</div>
              </li>
            </ul>
          </motion.div>

          {/* Types of Cookies We Use */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl shadow-lg p-6 md:p-8 border border-[#343a42] mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#5f9a26]/20 rounded-lg">
                <Settings className="w-5 h-5 text-[#5f9a26]" />
              </div>
              <h2 className="text-2xl font-semibold text-white">3. Types of Cookies We Use</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#1d253f] rounded-lg p-4 border border-[#343a42]">
                <h3 className="text-lg font-semibold text-white mb-2">Strictly Necessary Cookies</h3>
                <p className="text-[#d2d5da] text-sm">
                  These cookies are essential for the website to function properly. They enable basic 
                  functions like page navigation and access to secure areas of the website.
                </p>
              </div>
              
              <div className="bg-[#1d253f] rounded-lg p-4 border border-[#343a42]">
                <h3 className="text-lg font-semibold text-white mb-2">Performance Cookies</h3>
                <p className="text-[#d2d5da] text-sm">
                  These cookies allow us to count visits and traffic sources so we can measure and 
                  improve the performance of our site. They help us know which pages are the most 
                  and least popular and see how visitors move around the site.
                </p>
              </div>
              
              <div className="bg-[#1d253f] rounded-lg p-4 border border-[#343a42]">
                <h3 className="text-lg font-semibold text-white mb-2">Functional Cookies</h3>
                <p className="text-[#d2d5da] text-sm">
                  These cookies enable the website to provide enhanced functionality and 
                  personalization. They may be set by us or by third-party providers whose 
                  services we have added to our pages.
                </p>
              </div>
              
              <div className="bg-[#1d253f] rounded-lg p-4 border border-[#343a42]">
                <h3 className="text-lg font-semibold text-white mb-2">Third-Party Cookies</h3>
                <p className="text-[#d2d5da] text-sm">
                  These cookies may come from services like Google Analytics, social media platforms, 
                  or WhatsApp integrations. They are used for analytics, advertising, and social 
                  media functionality.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Managing Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl shadow-lg p-6 md:p-8 border border-[#343a42] mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#5f9a26]/20 rounded-lg">
                <Shield className="w-5 h-5 text-[#5f9a26]" />
              </div>
              <h2 className="text-2xl font-semibold text-white">4. Managing Cookies</h2>
            </div>
            
            <div className="space-y-4 text-[#d2d5da]">
              <p>
                You can control and/or delete cookies as you wish. You can delete all cookies that 
                are already on your computer and you can set most browsers to prevent them from 
                being placed.
              </p>
              
              <p>
                If you do this, however, you may have to manually adjust some preferences every 
                time you visit a site and some services and functionalities may not work.
              </p>
              
              <div className="bg-[#1d253f] rounded-lg p-4 border border-[#343a42] mt-4">
                <p className="text-[#d2d5da]">
                  For detailed information about cookies and how to manage them, visit{" "}
                  <a 
                    href="https://www.allaboutcookies.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#5f9a26] hover:text-[#4c7a20] font-medium transition-colors inline-flex items-center gap-1"
                  >
                    www.allaboutcookies.org
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </p>
              </div>
              
              <div className="bg-[#1d253f] rounded-lg p-4 border border-[#343a42] mt-4">
                <h3 className="text-lg font-semibold text-white mb-2">Browser-Specific Instructions:</h3>
                <ul className="text-[#d2d5da] text-sm space-y-1">
                  <li>• Google Chrome: Settings → Privacy and security → Cookies and other site data</li>
                  <li>• Mozilla Firefox: Preferences → Privacy & Security → Cookies and Site Data</li>
                  <li>• Safari: Preferences → Privacy → Cookies and website data</li>
                  <li>• Microsoft Edge: Settings → Cookies and site permissions</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Updates to Policy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-[#2a2f34] to-[#23282d] rounded-2xl shadow-lg p-6 md:p-8 border border-[#343a42]"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">5. Updates to This Policy</h2>
            
            <div className="space-y-4 text-[#d2d5da]">
              <p>
                We may update this Cookies Policy from time to time to reflect changes in our 
                practices or for other operational, legal, or regulatory reasons.
              </p>
              <p>
                The updated version will be indicated by an updated "Last updated" date and the 
                updated version will be effective as soon as it is accessible. We encourage you to 
                review this Cookies Policy frequently to be informed of how we are using cookies.
              </p>
            </div>
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
              <Cookie className="w-6 h-6 text-[#5f9a26]" />
            </div>
            <p className="text-[#d2d5da] text-lg italic max-w-2xl mx-auto">
              "We believe in transparency about how we use data. If you have any questions about our use of cookies, please contact us."
            </p>
            <div className="mt-6">
              <a 
                href="/contact" 
                className="text-[#5f9a26] hover:text-[#4c7a20] font-medium transition-colors"
              >
                Contact Us for Questions →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CookiePolicy;