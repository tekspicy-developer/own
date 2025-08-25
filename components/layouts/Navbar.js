"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className='w-full bg-background/80 fixed z-50'>
                <div className='navbar flex justify-between items-center mx-auto w-full bg-[rgba(0,0,0,0.68)] backdrop-blur-md backdrop-saturate-150 shadow px-6 lg:px-40 boreder-b-5'>
                    <div className="logo flex items-center">
                        <Image
                            width={60}
                            height={60}
                            src="/logo.png"
                            alt="logo"
                            className="w-14 sm:w-12 md:w-14 lg:w-16 h-auto"
                        />
                        <Image
                            width={130}
                            height={35}
                            src="/logoName.png"
                            alt="logo name"
                            className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto"
                        />
                    </div>
                    {/* handburger */}
                    <button
                        className={`md:hidden ${menuOpen ? 'hidden' : ''} flex flex-col justify-center items-center w-10 h-10`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                    {/* desktop menu */}
                    <div className="menu hidden md:flex items-center gap-16">
                        <ul className="flex gap-16 text-sm font-bold text-[#abb1ba]">
                            <li><Link href="#home" className="hover:text-white cursor-pointer">Home</Link></li>
                            <li><Link href="#about" className="hover:text-white cursor-pointer">About</Link></li>
                            <li><Link href="#services" className="hover:text-white cursor-pointer">Services</Link></li>
                            <li><Link href="#contact" className="hover:text-white cursor-pointer">Contact</Link></li>
                        </ul>
                        <Link href="#contact" className="font-medium px-2.5 py-1.5 rounded-[10px] cursor-pointer bg-gradient-to-r from-[#fd4d19] to-[#e01425] hover:bg-gradient-to-br">Get Started</Link>
                    </div>
                    {/* Mobile menu */}
                    <div
                        className={`fixed top-0 right-0 h-full w-64 bg-[rgba(0,0,0,0.3)] z-50 transform transition-transform duration-300 ease-in-out
                        ${menuOpen ? 'translate-x-0' : 'translate-x-full '} md:hidden flex flex-col`}
                    >
                        <button
                            className="self-end m-4 text-white text-2xl"
                            onClick={() => setMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            &times;
                        </button>
                        <div className='flex flex-col justify-between h-full'>
                            <ul className="flex flex-col gap-8 text-lg font-bold text-[#abb1ba] px-8 mt-8">
                                <li><Link href="#home" className="hover:text-white cursor-pointer" onClick={() => setMenuOpen(false)}>Home</Link></li>
                                <li><Link href="#about" className="hover:text-white cursor-pointer" onClick={() => setMenuOpen(false)}>About</Link></li>
                                <li><Link href="#services" className="hover:text-white cursor-pointer" onClick={() => setMenuOpen(false)}>Services</Link></li>
                                <li><Link href="#contact" className="hover:text-white cursor-pointer" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                            </ul>
                            <Link
                                href="#contact"
                                className="font-medium mt-8 mx-8 px-2.5 py-1.5 rounded-[10px] cursor-pointer bg-[linear-gradient(135deg,hsl(15,100%,55%)_0%,hsl(5,85%,50%)_50%,hsl(350,90%,45%)_100%)] hover:bg-gradient-to-br text-center"
                                onClick={() => setMenuOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>


                </div>
                <div className="seperator h-[0.5px] bg-gray-800"></div>
            </nav>
            {/* Overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 md:hidden backdrop-blur-md"
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </>
    )
}

export default Navbar
