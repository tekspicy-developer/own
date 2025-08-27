import React from 'react'

const Services = () => {
    return (
        <>
            <section id="services" className="py-24 bg-[#0d0f12]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                            <span className="text-foreground">We Build </span>
                            <span className="bg-[linear-gradient(135deg,hsl(15,100%,55%)_0%,hsl(5,85%,50%)_50%,hsl(350,90%,45%)_100%)] bg-clip-text text-transparent">Amazing Websites</span>
                        </h2>
                        <p className="text-xl max-w-3xl mx-auto">From concept to launch, we provide end-to-end web development services that help your business thrive in the digital world.</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
                        <div className='rounded-lg border shadow-sm group bg-[linear-gradient(145deg,_hsl(220_15%_8%)_0%,_hsl(220_15%_10%)_100%)] border-gray-600 hover:shadow-card transition-all duration-300 hover:scale-105'>
                            <div className="flex flex-col space-y-1.5 p-6 pb-4">
                                <div className="w-14 h-14 bg-[linear-gradient(135deg,hsl(15,100%,55%)_0%,hsl(5,85%,50%)_50%,hsl(350,90%,45%)_100%)] rounded-xl flex items-center justify-center mb-4 group-hover:shadow-[0_0_30px_hsl(15_100%_55%_/_0.3)] transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-7 h-7 text-white"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                                </div>
                                <h3 className="tracking-tight text-xl font-bold text-foreground group-hover:text-[#ff531a] transition-colors">Custom Web Development</h3>
                            </div>
                            <div className="p-6 pt-0">
                                <p className="mb-6 leading-relaxed">
                                    Bespoke websites built from scratch with modern technologies like React, Next.js, and Javascript.
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center text-sm">
                                        <div className="w-1.5 h-1.5 bg-[#ff531a] rounded-full mr-3"></div>
                                        <p className="text-muted-foreground">Responsive Design</p>
                                    </div>

                                    <div className="flex items-center text-sm">
                                        <div className="w-1.5 h-1.5 bg-[#ff531a] rounded-full mr-3"></div>
                                        <p className="text-muted-foreground">Fast Loading</p>
                                    </div>

                                    <div className="flex items-center text-sm">
                                        <div className="w-1.5 h-1.5 bg-[#ff531a] rounded-full mr-3"></div>
                                        <p className="text-muted-foreground">SEO Optimized</p>
                                    </div>

                                    <div className="flex items-center text-sm">
                                        <div className="w-1.5 h-1.5 bg-[#ff531a] rounded-full mr-3"></div>
                                        <p className="text-muted-foreground">Secure &amp; Scalable</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='rounded-lg border shadow-sm group bg-[linear-gradient(145deg,_hsl(220_15%_8%)_0%,_hsl(220_15%_10%)_100%)] border-gray-600 hover:shadow-card transition-all duration-300 hover:scale-105'>
                            <div className="flex flex-col space-y-1.5 p-6 pb-4">
                                <div className="w-14 h-14 bg-[linear-gradient(135deg,hsl(230,35%,15%)_0%,hsl(260,70%,60%)_100%)] rounded-xl flex items-center justify-center mb-4 group-hover:shadow-[0_0_30px_hsl(15_100%_55%_/_0.3)] transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone w-7 h-7 text-white"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>
                                </div>
                                <h3 className="tracking-tight text-xl font-bold text-foreground group-hover:text-[#ff531a] transition-colors">Mobile-First Design</h3>
                            </div>
                            <div className="p-6 pt-0">
                                <p className="mb-6 leading-relaxed">
                                    Stunning mobile experiences that work flawlessly across all devices and screen sizes.
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center text-sm">
                                        <div className="w-1.5 h-1.5 bg-[#ff531a] rounded-full mr-3"></div>
                                        <p className="text-muted-foreground">Touch Optimized</p>
                                    </div>

                                    <div className="flex items-center text-sm">
                                        <div className="w-1.5 h-1.5 bg-[#ff531a] rounded-full mr-3"></div>
                                        <p className="text-muted-foreground">App-like Feel</p>
                                    </div>

                                    <div className="flex items-center text-sm">
                                        <div className="w-1.5 h-1.5 bg-[#ff531a] rounded-full mr-3"></div>
                                        <p className="text-muted-foreground">Offline Support</p>
                                    </div>

                                    <div className="flex items-center text-sm">
                                        <div className="w-1.5 h-1.5 bg-[#ff531a] rounded-full mr-3"></div>
                                        <p className="text-muted-foreground">Secure &amp; Scalable</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='rounded-lg border shadow-sm group bg-[linear-gradient(145deg,_hsl(220_15%_8%)_0%,_hsl(220_15%_10%)_100%)] border-gray-600 hover:shadow-card transition-all duration-300 hover:scale-105'>
                            <div className="flex flex-col space-y-1.5 p-6 pb-4">
                                <div className="w-14 h-14 bg-[linear-gradient(135deg,hsl(15,100%,55%)_0%,hsl(5,85%,50%)_50%,hsl(350,90%,45%)_100%)] rounded-xl flex items-center justify-center mb-4 group-hover:shadow-[0_0_30px_hsl(15_100%_55%_/_0.3)] transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart w-7 h-7 text-white"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                                </div>
                                <h3 className="tracking-tight text-xl font-bold text-foreground group-hover:text-[#ff531a] transition-colors">E-commerce Solutions</h3>
                            </div>
                            <div className="p-6 pt-0">
                                <p className="mb-6 leading-relaxed">
                                    Bespoke websites built from scratch with modern technologies like React, Next.js, and TypeScript.
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center text-sm">
                                        <div className="w-1.5 h-1.5 bg-[#ff531a] rounded-full mr-3"></div>
                                        <p className="text-muted-foreground">Responsive Design</p>
                                    </div>

                                    <div className="flex items-center text-sm">
                                        <div className="w-1.5 h-1.5 bg-[#ff531a] rounded-full mr-3"></div>
                                        <p className="text-muted-foreground">Fast Loading</p>
                                    </div>

                                    <div className="flex items-center text-sm">
                                        <div className="w-1.5 h-1.5 bg-[#ff531a] rounded-full mr-3"></div>
                                        <p className="text-muted-foreground">SEO Optimized</p>
                                    </div>

                                    <div className="flex items-center text-sm">
                                        <div className="w-1.5 h-1.5 bg-[#ff531a] rounded-full mr-3"></div>
                                        <p className="text-muted-foreground">Secure &amp; Scalable</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='rounded-lg border shadow-sm group bg-[linear-gradient(145deg,_hsl(220_15%_8%)_0%,_hsl(220_15%_10%)_100%)] border-gray-600 hover:shadow-card transition-all duration-300 hover:scale-105'>
                            <div className="flex flex-col space-y-1.5 p-6 pb-4">
                                <div className="w-14 h-14 bg-[linear-gradient(135deg,hsl(230,35%,15%)_0%,hsl(260,70%,60%)_100%)] rounded-xl flex items-center justify-center mb-4 group-hover:shadow-[0_0_30px_hsl(15_100%_55%_/_0.3)] transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette w-7 h-7 text-white"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>
                                </div>
                                <h3 className="tracking-tight text-xl font-bold text-foreground group-hover:text-[#ff531a] transition-colors">UI/UX Design</h3>
                            </div>
                            <div className="p-6 pt-0">
                                <p className="mb-6 leading-relaxed">
                                    Bespoke websites built from scratch with modern technologies like React, Next.js, and TypeScript.
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center text-sm">
                                        <div className="w-1.5 h-1.5 bg-[#ff531a] rounded-full mr-3"></div>
                                        <p className="text-muted-foreground">Responsive Design</p>
                                    </div>

                                    <div className="flex items-center text-sm">
                                        <div className="w-1.5 h-1.5 bg-[#ff531a] rounded-full mr-3"></div>
                                        <p className="text-muted-foreground">Fast Loading</p>
                                    </div>

                                    <div className="flex items-center text-sm">
                                        <div className="w-1.5 h-1.5 bg-[#ff531a] rounded-full mr-3"></div>
                                        <p className="text-muted-foreground">SEO Optimized</p>
                                    </div>

                                    <div className="flex items-center text-sm">
                                        <div className="w-1.5 h-1.5 bg-[#ff531a] rounded-full mr-3"></div>
                                        <p className="text-muted-foreground">Secure &amp; Scalable</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='rounded-lg border shadow-sm group bg-[linear-gradient(145deg,_hsl(220_15%_8%)_0%,_hsl(220_15%_10%)_100%)] border-gray-600 hover:shadow-card transition-all duration-300 hover:scale-105'>
                            <div className="flex flex-col space-y-1.5 p-6 pb-4">
                                <div className="w-14 h-14 bg-[linear-gradient(135deg,hsl(15,100%,55%)_0%,hsl(5,85%,50%)_50%,hsl(350,90%,45%)_100%)] rounded-xl flex items-center justify-center mb-4 group-hover:shadow-[0_0_30px_hsl(15_100%_55%_/_0.3)] transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search w-7 h-7 text-white"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                                </div>
                                <h3 className="tracking-tight text-xl font-bold text-foreground group-hover:text-[#ff531a] transition-colors">SEO Optimization</h3>
                            </div>
                            <div className="p-6 pt-0">
                                <p className="mb-6 leading-relaxed">
                                    Bespoke websites built from scratch with modern technologies like React, Next.js, and TypeScript.
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center text-sm">
                                        <div className="w-1.5 h-1.5 bg-[#ff531a] rounded-full mr-3"></div>
                                        <p className="text-muted-foreground">Responsive Design</p>
                                    </div>

                                    <div className="flex items-center text-sm">
                                        <div className="w-1.5 h-1.5 bg-[#ff531a] rounded-full mr-3"></div>
                                        <p className="text-muted-foreground">Fast Loading</p>
                                    </div>

                                    <div className="flex items-center text-sm">
                                        <div className="w-1.5 h-1.5 bg-[#ff531a] rounded-full mr-3"></div>
                                        <p className="text-muted-foreground">SEO Optimized</p>
                                    </div>

                                    <div className="flex items-center text-sm">
                                        <div className="w-1.5 h-1.5 bg-[#ff531a] rounded-full mr-3"></div>
                                        <p className="text-muted-foreground">Secure &amp; Scalable</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='rounded-lg border shadow-sm group bg-[linear-gradient(145deg,_hsl(220_15%_8%)_0%,_hsl(220_15%_10%)_100%)] border-gray-600 hover:shadow-card transition-all duration-300 hover:scale-105'>
                            <div className="flex flex-col space-y-1.5 p-6 pb-4">
                                <div className="w-14 h-14 bg-[linear-gradient(135deg,hsl(230,35%,15%)_0%,hsl(260,70%,60%)_100%)] rounded-xl flex items-center justify-center mb-4 group-hover:shadow-[0_0_30px_hsl(15_100%_55%_/_0.3)] transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-7 h-7 text-white"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                                </div>
                                <h3 className="tracking-tight text-xl font-bold text-foreground group-hover:text-[#ff531a] transition-colors">Performance Optimization</h3>
                            </div>
                            <div className="p-6 pt-0">
                                <p className="mb-6 leading-relaxed">
                                    Bespoke websites built from scratch with modern technologies like React, Next.js, and TypeScript.
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center text-sm">
                                        <div className="w-1.5 h-1.5 bg-[#ff531a] rounded-full mr-3"></div>
                                        <p className="text-muted-foreground">Responsive Design</p>
                                    </div>

                                    <div className="flex items-center text-sm">
                                        <div className="w-1.5 h-1.5 bg-[#ff531a] rounded-full mr-3"></div>
                                        <p className="text-muted-foreground">Fast Loading</p>
                                    </div>

                                    <div className="flex items-center text-sm">
                                        <div className="w-1.5 h-1.5 bg-[#ff531a] rounded-full mr-3"></div>
                                        <p className="text-muted-foreground">SEO Optimized</p>
                                    </div>

                                    <div className="flex items-center text-sm">
                                        <div className="w-1.5 h-1.5 bg-[#ff531a] rounded-full mr-3"></div>
                                        <p className="text-muted-foreground">Secure &amp; Scalable</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[linear-gradient(145deg,_hsl(220_15%_8%)_0%,_hsl(220_15%_10%)_100%)] rounded-2xl p-8 border border-gray-600 flex flex-col items-center">
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                            Ready to spice up your digital presence?
                        </h3>

                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-c">
                            Let&apos;s discuss your project and create something amazing together. Get a free consultation and project estimate.
                        </p>

                        <button
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-backgroundfocus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-primary/90 h-11 rounded-md px-8 bg-[linear-gradient(135deg,hsl(15,100%,55%)_0%,hsl(5,85%,50%)_50%,hsl(350,90%,45%)_100%)] text-white transition-all duration-300 group cursor-pointer hover:shadow-[0_0_30px_hsl(15_100%_55%_/_0.3)]"
                        >
                            Get Free Consultation
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-arrow-right ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                            >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>


                </div>
            </section>
        </>
    )
}
export default Services
