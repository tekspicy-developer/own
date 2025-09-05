"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Intro() {
  return (
    <>
      <section className="relative bg-[url('/bg.png')] bg-cover bg-center min-h-screen">
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.58)] backdrop-blur-sm backdrop-saturate-150 shadow"></div>
        <div className="relative">
          <motion.h1
      className="text-5xl sm:text-6xl lg:text-7xl font-bold halant-bold tracking-tight flex flex-col items-center text-center px-4 pt-50"
      initial={{ y: -100, opacity: 0 }}   // start above
      animate={{ y: 0, opacity: 1 }}      // move into place
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <motion.span
        className="bg-[linear-gradient(135deg,hsl(15,100%,55%)_0%,hsl(5,85%,50%)_50%,hsl(350,90%,45%)_100%)] bg-clip-text text-transparent font-bold mb-4 pb-1"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Spicing Up
      </motion.span>
      <motion.span
        className="text-foreground"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Your Digital Presence
      </motion.span>
    </motion.h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed py-6 text-center">We build powerful websites that ignite your brand and deliver real results. At Tek Spicy, we fuse bold design with modern technology to craft digital experiences that truly stand out.</p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center py-6">

            <Link href="#contact"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-lg font-medium 
             rounded-[10px] bg-[linear-gradient(135deg,hsl(15,100%,55%)_0%,hsl(5,85%,50%)_50%,hsl(350,90%,45%)_100%)] text-white 
             hover:shadow-[0_0_30px_hsl(15_100%_55%_/_0.3)] transition duration-300 group cursor-pointer"
            >
              Start Your Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>

            <Link href="#services"
            className="inline-flex items-center justify-center gap-1 px-4 py-2 rounded-[10px] bg-transparent text-white text-lg font-semibold hover:bg-white transition duration-300 group cursor-pointer border-1 border-white hover:text-black active:bg-white active:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-code w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              Explore Our Services
            </Link>

          </div>

         
        </div>
      </section>
    </>
  );
}
