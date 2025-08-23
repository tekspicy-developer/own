import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Github, Twitter, Linkedin, Mail, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0d0f12] border-t border-[0.5px] border-gray-800 text-[#abb1ba] ">
            <div className="container mx-auto  px-4 sm:px-6 lg:px-10 lg:pl-18 pt-4 pb-4">
                <div className="flex flex-wrap justify-between gap-y-8">
                    {/* Brand Info */}
                    <div className="w-full md:w-1/2 space-y-4">
                        <div className="logo flex items-center">
                            <Image
                                width={50}
                                height={50}
                                src="/logo.png"
                                alt="logo"
                                className="w-14 sm:w-12 md:w-14 lg:w-16 h-auto"
                            />
                            <Image
                                width={120}
                                height={33}
                                src="/logoName.png"
                                alt="logo name"
                                className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto"
                            />
                        </div>
                        <p className="text-md text-muted-foreground w-3/4 mb-6">
                            Empowering businesses with innovative digital solutions that drive
                            growth and create lasting competitive advantages.
                        </p>
                        <div className="space-y-2 mb-6">
                            <div className="flex items-center text-sm text-muted-foreground">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-4 h-4 mr-2 text-orange-600">
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </svg>tekspicy@gmail.com
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-4 h-4 mr-2 text-orange-600">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                                    </path>
                                </svg>
                                +91 9522927436
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-4 h-4 mr-2 text-orange-600">
                                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                                    </path>
                                    <circle cx="12" cy="10" r="3">
                                    </circle>
                                </svg>Indore, Madhya Pradesh, India
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 hover:duration-300 hover:ease-in-out hover:text-orange-600">
                                <Github className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 hover:duration-300 hover:ease-in-out hover:text-orange-600">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 hover:duration-300 hover:ease-in-out hover:text-orange-600">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="mailto:info@tekspicy.com" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 hover:duration-300 hover:ease-in-out hover:text-orange-600">
                                <Mail className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="w-full md:w-1/4 space-y-4">
                        <h4 className="font-bold text-white">Services</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground ">
                            <li><Link href="#" className="hover:text-primary hover:text-white transition-colors my-2">Web Development</Link></li>
                            <li><Link href="#" className="hover:text-primary hover:text-white transition-colors my-2">Mobile Apps</Link></li>
                            <li><Link href="#" className="hover:text-primary hover:text-white transition-colors my-2">E-commerce</Link></li>
                            <li><Link href="#" className="hover:text-primary hover:text-white transition-colors my-2">Digital Marketing</Link></li>
                            <li><Link href="#" className="hover:text-primary hover:text-white transition-colors my-2">Brand Strategy</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="w-full md:w-1/4 space-y-4">
                        <h4 className="font-bold text-white">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary hover:text-white transition-colors my-2">About Us</Link></li>
                            <li><Link href="#" className="hover:text-primary hover:text-white transition-colors my-2">Our Team</Link></li>
                            <li><Link href="#" className="hover:text-primary hover:text-white transition-colors my-2">Careers</Link></li>
                            <li><Link href="#" className="hover:text-primary hover:text-white transition-colors my-2">Case Studies</Link></li>
                            <li><Link href="#" className="hover:text-primary hover:text-white transition-colors my-2">Blog</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="seperator h-[0.5px] bg-gray-800 mt-8"></div>
                <div>
                    <div className="container mx-auto py-4 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-center text-muted-foreground">
                            &copy; 2025 Tek Spicy. All rights reserved.
                        </p>
                        <div className="flex gap-8 mt-2 md:mt-0">
                            <Link href="#" className="hover:text-primary hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="#" className="hover:text-primary hover:text-white transition-colors">Terms of Services</Link>
                            <Link href="#home" className="group flex items-center hover:text-primary text-white transition-colors hover:bg-[#A385E0] px-3 py-1 rounded-md border boredr-[1px] border-gray-800 hover:border-transparent">
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
                                    className="lucide lucide-arrow-up w-4 h-4 mr-1 transition-transform group-hover:-translate-y-1"
                                >
                                    <path d="m5 12 7-7 7 7"></path>
                                    <path d="M12 19V5"></path>
                                </svg>
                                Top
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}