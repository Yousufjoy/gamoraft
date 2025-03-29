"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

function HomeHero() {
  const numberOfParticles = 40;
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles only on the client side
    setParticles(
      Array.from({ length: numberOfParticles }, () => ({
        width: Math.random() * 10 + 4 + "px",
        height: Math.random() * 10 + 4 + "px",
        top: Math.random() * 100 + "%",
        left: Math.random() * 100 + "%",
        opacity: Math.random() * 0.5 + 0.3,
        animationDuration: Math.random() * 3 + 4 + "s",
        animationDelay: "-" + Math.random() * 3 + "s",
      }))
    );
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Gamoraft
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
          Crafting immersive gaming experiences that transport players to new
          worlds
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#our-game"
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Game
          </Link>
          <Link
            href="#about"
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
          >
            About Us
          </Link>
        </div>
      </div>

      {/* Animated Elements - Slower animation & Natural movement */}
      <div className="absolute inset-0 z-0 opacity-40">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: particle.width,
              height: particle.height,
              top: particle.top,
              left: particle.left,
              opacity: particle.opacity,
              animation: `float ${particle.animationDuration} linear infinite`,
              animationDelay: particle.animationDelay,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(-20px) translateX(0);
          }
          75% {
            transform: translateY(-10px) translateX(-5px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

export default HomeHero;