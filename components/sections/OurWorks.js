import React from "react";
import Image from "next/image";
const OurServices = () => {
  return (
    <>
      <section id="portfolio" className="py-20 bg-[#13161b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <!-- Section Header --> */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#fd4d19]  to-[#e01425] bg-clip-text text-transparent">
                Spicy Projects
              </span>
              <span className="text-foreground"> We&apos;ve Cooked Up</span>
            </h2>
            <p className="text-xl text-[#abb1ba] max-w-3xl mx-auto">
              Take a look at some of our recent projects where we&apos;ve helped
              businesses transform their digital presence with cutting-edge web
              solutions.
            </p>
          </div>

          {/* <!-- Projects Grid --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Project Card Component --> */}
            {/* <!-- Repeat this block for each project --> */}
            <div className="rounded-lg border border-[#22252c]  bg-[#121317] text-card-foreground shadow-sm group hover:shadow-card transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src="/bg.png"
                  width={100}
                  height={48}
                  alt="TechStart SaaS Platform"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <a
                      href="#"
                      className="flex-1 inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md text-sm font-medium bg-[#191d34] text-secondary-foreground hover:bg-[#191d34]/80 transition"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      </svg>
                      Live Demo
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md text-sm font-medium border border-input bg-black   transition"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5a6.005 6.005 0 0 0-1-3.5c.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5a6.005 6.005 0 0 0-1 3.5c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65a6.45 6.45 0 0 0-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  TechStart SaaS Platform
                </h3>
                <p className="text-[#abb1ba] mb-4 leading-relaxed">
                  A complete SaaS platform for startup management with user
                  authentication, dashboard analytics, and subscription billing.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs font-medium bg-[#1a1d23] text-muted-foreground rounded-full">
                    React
                  </span>
                  <span className="px-2 py-1 text-xs font-medium bg-[#1a1d23] text-muted-foreground rounded-full">
                    Node.js
                  </span>
                  <span className="px-2 py-1 text-xs font-medium bg-[#1a1d23] text-muted-foreground rounded-full">
                    PostgreSQL
                  </span>
                  <span className="px-2 py-1 text-xs font-medium bg-[#1a1d23] text-muted-foreground rounded-full">
                    Stripe
                  </span>
                </div>
              </div>
            </div>
              <div className="rounded-lg border border-[#22252c]  bg-[#121317] text-card-foreground shadow-sm group hover:shadow-card transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src="/bg.png"

                  width={100}
                  height={48}
                  alt="TechStart SaaS Platform"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <a
                      href="#"
                      className="flex-1 inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md text-sm font-medium bg-[#191d34] text-secondary-foreground hover:bg-[#191d34]/80 transition"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      </svg>
                      Live Demo
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md text-sm font-medium border border-input bg-black   transition"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5a6.005 6.005 0 0 0-1-3.5c.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5a6.005 6.005 0 0 0-1 3.5c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65a6.45 6.45 0 0 0-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  TechStart SaaS Platform
                </h3>
                <p className="text-[#abb1ba] mb-4 leading-relaxed">
                  A complete SaaS platform for startup management with user
                  authentication, dashboard analytics, and subscription billing.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs font-medium bg-[#1a1d23] text-muted-foreground rounded-full">
                    React
                  </span>
                  <span className="px-2 py-1 text-xs font-medium bg-[#1a1d23] text-muted-foreground rounded-full">
                    Node.js
                  </span>
                  <span className="px-2 py-1 text-xs font-medium bg-[#1a1d23] text-muted-foreground rounded-full">
                    PostgreSQL
                  </span>
                  <span className="px-2 py-1 text-xs font-medium bg-[#1a1d23] text-muted-foreground rounded-full">
                    Stripe
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- End of Project Card --> */}

            {/* <!-- Repeat similar blocks for EcoStore, FinanceFlow, FoodieHub, MindfulSpace, CodeLab, etc. --> */}
          </div>

          {/* <!-- Call to Action --> */}
          <div className="text-center mt-16">
            <div className="bg-gradient-card rounded-2xl p-8 border border-[#22252c]">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Want to see your project here?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We&apos;d love to help bring your vision to life. Let&apos;s create
                something amazing together that showcases your brand&apos;s unique
                personality.
              </p>
            <button className="cursor-pointer inline-flex items-center justify-center gap-2 h-11 px-8 text-sm font-medium rounded-md bg-gradient-to-r from-[#fd4d19] to-[#e01425] text-white hover:opacity-90 hover:shadow-glow transition-all duration-300">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;