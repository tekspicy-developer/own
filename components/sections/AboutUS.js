import React from 'react'
import Link from 'next/link'

const AboutUs = () => {
    return (
        <>
            <section id="about" className="py-18 bg-[#0d0f12]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/*Section Header */}
                    <div className="text-center mb-16">


                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                            <span className="text-foreground">The Team Behind </span>
                            <span className="bg-gradient-to-r from-[#fd4d19] to-[#e01425]  bg-clip-text text-transparent">Tek Spicy</span>
                        </h2>

                        <p className="text-xl text-[#abb1ba] max-w-3xl mx-auto">
                            We&rsquo;re a passionate team of developers, designers, and digital strategists who believe in the power of great web experiences to transform businesses.
                        </p>
                    </div>

                    {/* Content Section  */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">

                        {/* Our Story  */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-foreground mb-4">Our Story</h3>
                            <div className="space-y-4 text-[#abb1ba] leading-relaxed">
                                <p>Founded in 2021, Tek Spicy emerged from a simple belief: every business deserves a website that truly represents their unique brand and drives real results. We started as a small team of tech enthusiasts who were frustrated with bland, cookie-cutter websites flooding the internet.</p>
                                <p>Our mission became clear - to &ldquo;spice up&ldquo; the digital landscape by creating websites that are not just functional, but memorable, engaging, and powerful. We combine technical excellence with creative flair to deliver digital experiences that stand out in today&rsquo;s crowded online space.</p>
                                <p>Today, we&rsquo;ve helped dozens of businesses transform their digital presence, from startups taking their first steps online to established companies looking to modernize and scale their web presence.</p>
                            </div>

                            <div className="pt-6">
                                <Link href="#contact"
                                    className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-11 px-8 rounded-md 
         bg-gradient-to-r from-[#fd4d19]  to-[#e01425] text-white 
         hover:opacity-90 hover:shadow-glow transition-all duration-300 
         ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
         disabled:opacity-50 group">
                                    Work With Us
                                    <svg
                                        className="lucide lucide-arrow-right ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* What Drives Us  */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-foreground mb-6">What Drives Us</h3>
                            <div className="space-y-6">

                                {/* Innovation First */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-gradient-to-r from-[#fd4d19]  to-[#e01425] rounded-lg flex items-center justify-center">
                                            <svg
                                                className="lucide lucide-lightbulb w-6 h-6 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                                                <path d="M9 18h6" />
                                                <path d="M10 22h4" />
                                            </svg>

                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-foreground mb-2">Innovation First</h4>
                                        <p className="text-[#abb1ba] leading-relaxed">We stay ahead of the curve with the latest technologies and design trends to deliver cutting-edge solutions.</p>
                                    </div>
                                </div>

                                {/* Client Partnership */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-gradient-to-r from-[#fd4d19]  to-[#e01425] rounded-lg flex items-center justify-center">
                                            <svg
                                                className="lucide lucide-users w-6 h-6 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                                <circle cx="9" cy="7" r="4" />
                                                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                            </svg>

                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-foreground mb-2">Client Partnership</h4>
                                        <p className="text-[#abb1ba] leading-relaxed">Your success is our success. We work closely with you throughout the entire development process.</p>
                                    </div>
                                </div>

                                {/* Passion Driven */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-gradient-to-r from-[#fd4d19]  to-[#e01425] rounded-lg flex items-center justify-center">
                                            <svg
                                                className="lucide lucide-heart w-6 h-6 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                            </svg>

                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-foreground mb-2">Passion Driven</h4>
                                        <p className="text-[#abb1ba] leading-relaxed">We love what we do, and it shows in every pixel, every line of code, and every user experience we craft.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default AboutUs