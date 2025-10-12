"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Phone,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Navigation items
const navItems = [
  { name: "HOME", path: "/" },
  {
    name: "SERVICES",
    path: "/services",
    // subItems: [
    //   { name: "Headlight", path: "/services/headlight" },
    // ],
  },
  // { name: "VEHICLE TRACKING", path: "/vehicle-tracking" },
  // { name: "HEADLIGHT", path: "/headlight" },
  // { name: "AUTO CAR SALES", path: "/auto-car-sales" },
  { name: "ABOUT", path: "/about" },
  { name: "CONTACT US", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleSubMenuToggle = (name: string) => {
    setOpenSubMenu(openSubMenu === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white shadow-md bg-[#1d253f]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Auto Import Spain Logo"
            width={150}
            height={150}
            className="rounded-full w-32"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 relative font-medium text-[#d2d5da]">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={item.path}
                  className="hover:text-[#5f9a26] transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </motion.div>

              {/* Desktop Submenu */}
              {/* {item.subItems && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 mt-2 w-40 bg-[#1d253f] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform z-50"
                >
                  {item.subItems.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.path}
                      className="block px-4 py-2 text-[#d2d5da] hover:bg-[#5f9a26] hover:text-[#1d253f] transition-colors duration-200"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </motion.div>
              )} */}
            </div>
          ))}
        </nav>

        {/* Desktop Contact & WhatsApp */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+34691900773"
            className="flex items-center gap-2 text-[#d2d5da] hover:text-[#5f9a26] transition-colors"
          >
            <Phone size={18} />
            <span>(+34) 691 900 773</span>
          </a>

          {/* <a
            href="https://wa.me/34691900773"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#5f9a26] text-[#1d253f] font-semibold rounded-lg hover:bg-[#4c7a20] transition-colors shadow-md"
          >
            <MessageCircle size={18} color="white" />
            WhatsApp
          </a> */}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#5f9a26]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#1d253f] overflow-hidden"
          >
            <nav className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.name} className="flex flex-col">
                  <div className="flex justify-between items-center cursor-pointer text-[#d2d5da] hover:text-[#5f9a26] transition-colors py-2">
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {/* 
                    {item.subItems &&
                      (openSubMenu === item.name ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      ))} */}
                  </div>

                  {/* Mobile Submenu */}
                  {/* <AnimatePresence>
                    {item.subItems && openSubMenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4 flex flex-col space-y-1"
                      >
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.path}
                            className="text-[#d2d5da] hover:text-[#5f9a26] transition-colors py-1"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence> */}
                </div>
              ))}

              {/* Mobile Contact & WhatsApp */}
              <div className="flex flex-col gap-2 pt-4 border-t border-[#d2d5da]">
                <a
                  href="tel:+34691900773"
                  className="flex items-center gap-2 text-[#d2d5da] hover:text-[#5f9a26] transition-colors"
                >
                  <Phone size={18} />
                  (+34) 691 900 773
                </a>
                <a
                  href="https://wa.me/34691900773"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#5f9a26] text-white font-semibold rounded-lg hover:bg-[#4c7a20] transition-colors text-center justify-center"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
