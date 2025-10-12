"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 bg-[#03091c]">
      <div className="container mx-auto px-4">
        {/* Top Row - 3 Columns */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          {/* Column 1 - Address */}
          <div className="space-y-2">
            <p className="font-semibold text-[#5f9a26] mb-2">Address</p>
            <p>CC/ Sayonar 20</p>
            <p>03369 Rafal, Alicante</p>
            <p>Spain</p>
          </div>

          {/* Column 2 - Contact */}
          <div className="flex flex-col space-y-2">
            <p className="font-semibold text-[#5f9a26] mb-2">Contact</p>
            <p>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_ADMIN_EMAIL}`}
                className="hover:text-[#5f9a26] transition-colors"
              >
                {process.env.NEXT_PUBLIC_ADMIN_EMAIL}
              </a>
            </p>
            <p>
              <a
                href="tel:+34691900773"
                className="hover:text-[#5f9a26] transition-colors"
              >
                (+34) 691-900-773
              </a>
            </p>
          </div>

          {/* Column 3 - Policies */}
          <div className="flex flex-col space-y-2 md:items-end">
            <Link
              href="/privacy-policy"
              className="hover:text-[#5f9a26] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#5f9a26] transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/cookies"
              className="hover:text-[#5f9a26] transition-colors"
            >
              Cookies Policy
            </Link>
          </div>
        </motion.div>

        {/* Bottom Row - Copyright */}
        <motion.div
          className="border-t border-[#d2d5da]/20 pt-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>© {new Date().getFullYear()} Register Your Car. All rights reserved.</p>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      {/* <motion.a
        href="https://wa.me/34691900773"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[#5f9a26] w-16 h-16 rounded-full shadow-lg text-[#1d253f] hover:bg-[#4c7a20] transition-colors"
      >
        <MessageCircle size={28} />
      </motion.a> */}
    </footer>
  );
};

export default Footer;
