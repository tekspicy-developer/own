"use client"
import React from 'react';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import { CheckCircle } from 'lucide-react';

const Contact = () => {

    const handleSubmit = async (e) => {

        toast.custom((t) => (
            <div
                className={`${t.visible ? 'animate-enter-right' : 'animate-leave-right'
                    } flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 bg-[#0e0f13] border border-[#fd4d19] text-white px-4 py-3 rounded-lg shadow-lg w-[90vw] sm:w-auto max-w-sm`}
            >
                <CheckCircle size={24} color="#fd4d19" className="flex-shrink-0" />
                <div className="flex flex-col text-left">
                    <span className="font-semibold text-sm sm:text-base">
                        Message sent successfully!
                    </span>
                    <span className="text-xs sm:text-sm text-muted">
                        We&apos;ll get back to you within 24 hours.
                    </span>
                </div>
            </div>
        ));


    };
    return (
        <>
            <Toaster
                position="bottom-right"
                toastOptions={{
                    duration: 2000,
                    style: {
                        background: '#0e0f13',
                        color: '#ffffff',
                        border: '1px solid #fd4d19',
                        padding: '16px',
                        borderRadius: '8px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '4px',
                        fontSize: '14px',
                    },
                    iconTheme: {
                        primary: '#fd4d19',
                        secondary: '#ffffff',
                    },
                }}
            />

            <section id="contact" className="py-24 bg-[#13161b]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                            <span className="text-foreground ">Let&apos;s Create Something </span>
                            <span className="bg-gradient-to-r from-[#fd4d19]  to-[#e01425] bg-clip-text text-transparent">
                                Spicy Together
                            </span>
                        </h2>
                        <p className="text-xl text-[#abb1ba] text-muted-foreground max-w-3xl mx-auto">
                            Ready to transform your digital presence? We&apos;d love to hear about your project and discuss how we can help bring your vision to life.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Form Section */}
                        <div className="lg:col-span-2">
                            <div className="rounded-lg border border-[#22252c] text-card-foreground shadow-sm bg-[#121317] ">
                                <div className="flex flex-col space-y-1.5 p-6">
                                    <h3 className="tracking-tight text-2xl font-bold text-foreground flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="url(#zapGradient)"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-6 h-6 mr-2"
                                        >
                                            <defs>
                                                <linearGradient id="zapGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#fd4d19" />
                                                    <stop offset="100%" stopColor="#e01425" />
                                                </linearGradient>
                                            </defs>
                                            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                                        </svg>
                                        Start Your Project
                                    </h3>
                                </div>
                                <div className="p-6 pt-0">
                                    <form className="space-y-6" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                                                <input
                                                    className="flex h-10 w-full rounded-md px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-0 focus:border-transparent focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-[#0e0f13] border border-[#22252c] focus:shadow-[0_0_0_2px_#fd4d19,0_0_0_4px_#e01425]"
                                                    name="fullName"
                                                    placeholder="John Doe"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                                                <input
                                                    className="flex h-10 w-full rounded-md px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-0 focus:border-transparent focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-[#0e0f13] border border-[#22252c] focus:shadow-[0_0_0_2px_#fd4d19,0_0_0_4px_#e01425]"
                                                    name="email"
                                                    placeholder="John Doe"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-foreground mb-2">Project Type</label>
                                                <select
                                                    name="projectType"
                                                    className="w-full px-3 py-2 bg-[#0e0f13] border border-[#22252c] rounded-md text-foreground focus:outline-none focus:ring-0 focus:border-transparent focus:shadow-[0_0_0_2px_#fd4d19,0_0_0_4px_#e01425]"
                                                >
                                                    <option value="">Select project type</option>
                                                    <option value="website">New Website</option>
                                                    <option value="redesign">Website Redesign</option>
                                                    <option value="ecommerce">E-commerce Store</option>
                                                    <option value="webapp">Web Application</option>
                                                    <option value="other">Other</option>
                                                </select>

                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                                                <input
                                                    className="flex h-10 w-full rounded-md  px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:border-transparent focus-visible:shadow-[0_0_0_2px_#fd4d19,0_0_0_4px_#e01425] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-[#0e0f13] border border-[#22252c]"
                                                    name="phone"
                                                    placeholder="John Doe"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">Project Details *</label>
                                            <textarea
                                                className="flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:border-transparent focus-visible:shadow-[0_0_0_2px_#fd4d19,0_0_0_4px_#e01425] disabled:cursor-not-allowed disabled:opacity-50 bg-[#0e0f13] border-[#22252c]"
                                                name="projectDetails"
                                                placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                                                rows="6"
                                                required
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:opacity-90 h-11 rounded-md px-8 w-full bg-gradient-to-r from-[#fd4d19] to-[#e01425] text-white hover:shadow-glow transition-all duration-300 group"
                                        >
                                            Send Message
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
                                                className="lucide lucide-send ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                                            >
                                                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                                                <path d="m21.854 2.147-10.94 10.939"></path>
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info Section */}
                        <div className="space-y-6">
                            {/* Email */}
                            <div className="rounded-lg border text-card-foreground shadow-sm bg-[#121317] border-[#22252c] hover:shadow-card transition-all duration-300">
                                <div className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-[#fd4d19] to-[#e01425] rounded-lg flex items-center justify-center flex-shrink-0">

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
                                                className="lucide lucide-mail w-6 h-6 text-white"
                                            >
                                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-foreground mb-1">Email Us</h3>
                                            <p className="text-primary font-medium mb-1 text-[#ff531a]">tekspicy@gmail.com</p>
                                            <p className="text-sm text-muted-foreground">Send us an email anytime</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="rounded-lg border text-card-foreground shadow-sm bg-[#121317] border-[#22252c] hover:shadow-card transition-all duration-300">
                                <div className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-[#fd4d19] to-[#e01425] rounded-lg flex items-center justify-center flex-shrink-0">

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
                                                className="lucide lucide-phone w-6 h-6 text-white"
                                            >
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-foreground mb-1">Call Us</h3>
                                            <p className="text-primary font-medium mb-1 text-[#ff531a]">+91 9522927436</p>
                                            <p className="text-sm text-muted-foreground">24 / 7 available for you</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="rounded-lg border text-card-foreground shadow-sm bg-[#121317] border-[#22252c] hover:shadow-card transition-all duration-300">
                                <div className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-[#fd4d19] to-[#e01425] rounded-lg flex items-center justify-center flex-shrink-0">

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
                                                className="lucide lucide-map-pin w-6 h-6 text-white"
                                            >
                                                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-foreground mb-1">Visit Us</h3>
                                            <p className="text-primary font-medium mb-1 text-[#ff531a]">Indore, Madhya Pradesh, India</p>
                                            <p className="text-sm text-muted-foreground">Remote-first company</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Guarantee */}
                            <div className="rounded-lg border text-card-foreground shadow-sm bg-gradient-card border-[#22252c]">
                                <div className="p-6 text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="url(#grad)"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-clock w-8 h-8 mx-auto mb-4"
                                    >
                                        <defs>
                                            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                                                <stop offset="0%" stopColor="#fd4d19" />
                                                <stop offset="100%" stopColor="#e01425" />
                                            </linearGradient>
                                        </defs>
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>

                                    <h3 className="text-lg font-semibold text-foreground mb-2">Quick Response Guarantee</h3>
                                    <p className="text-muted-foreground text-sm">
                                        We respond to all inquiries within 24 hours. For urgent projects, call us directly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;