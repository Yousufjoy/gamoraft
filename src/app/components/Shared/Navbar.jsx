'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo.png"
              alt="Gamoraft Logo"
              width={84} // Or whatever width you desire
              height={64} // Or whatever height you desire, keep aspect ratio
            />
          </Link>


          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-purple-400 font-medium transition-colors">Home</Link>
            <Link href="#about" className="text-white hover:text-purple-400 font-medium transition-colors">About</Link>
            <Link href="#our-game" className="text-white hover:text-purple-400 font-medium transition-colors">Our Game</Link>
            <Link href="#team" className="text-white hover:text-purple-400 font-medium transition-colors">Our Team</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black bg-opacity-90 py-4">
            <Link href="/" className="block text-white hover:text-purple-400 py-2 px-4">Home</Link>
            <Link href="#about" className="block text-white hover:text-purple-400 py-2 px-4">About</Link>
            <Link href="#our-game" className="block text-white hover:text-purple-400 py-2 px-4">Our Game</Link>
            <Link href="#team" className="block text-white hover:text-purple-400 py-2 px-4">Our Team</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;