"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import Container from "./Container";
import Logo from "./Logo";
import {
  SignInIcon,
  UserIcon,
  XIcon,
  ListIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "../ui/button";
import { useState } from "react";

const navLinks = [
  {
    label: "How it works",
    href: "#how-it-works",
  },
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 text-amber-50 right-0 z-50">
        <Container className="px-4 md:px-6 bg-transparent backdrop-blur-lg">
          {" "}
          <div className="flex items-center justify-between py-3 md:py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Logo />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-medium text-white font-space-grotesk hover:text-foreground transition-colors group"
                  >
                    {link.label}
                    <motion.span
                      className="absolute bottom-0 left-0 text-white right-0 h-0.5 bg-primary origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <Button variant="ghost" className="font-space-grotesk">
                  <UserIcon weight="light" className="size-4" />
                  Login
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <Button variant="default" className="font-space-grotesk">
                  <SignInIcon weight="light" className="size-4" />
                  Sign Up
                </Button>
              </motion.div>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XIcon weight="light" className="size-6" />
              ) : (
                <ListIcon weight="light" className="size-6" />
              )}
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0 bg-background/95 backdrop-blur-md"
            >
              <div className="flex flex-col items-start justify-center h-full gap-8 px-6">
                {/* Mobile Navigation Links */}
                <div className="flex flex-col items-start gap-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      <Link
                        href={link.href}
                        onClick={toggleMenu}
                        className="text-2xl font-medium hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Auth Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col items-center gap-4 w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={toggleMenu}
                  >
                    <UserIcon weight="light" className="size-4" />
                    Login
                  </Button>
                  <Button
                    variant="default"
                    className="w-full"
                    onClick={toggleMenu}
                  >
                    <SignInIcon weight="light" className="size-4" />
                    Sign Up
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
