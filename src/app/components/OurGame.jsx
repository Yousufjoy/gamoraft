"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function OurGame() {
  const gameScreenshots = [
    { id: 1, src: "/assets/3.jpg", alt: "Game Screenshot 1" },
    { id: 2, src: "/assets/3.jpg", alt: "Game Screenshot 2" },
    { id: 3, src: "/assets/3.jpg", alt: "Game Screenshot 3" }
  ];

  return (
    <section id="our-game" className="py-20 bg-gradient-to-b from-purple-950 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16 relative">
          Our Game
          <span className="block w-20 h-1 bg-purple-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-4"></span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="lg:w-1/2">
            <div className="relative group overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/assets/4.png"
                alt="Game Main Screenshot"
                width={500} // Adjust based on your design
                height={300} // Adjust based on your design.  Maintain aspect ratio.
                layout="responsive"
                objectFit="cover"
                className="transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="bg-purple-600 text-white px-4 py-1 text-sm font-bold rounded-full">ACTION RPG</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold text-white mb-4">Adventure Awaits</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Step into a breathtaking world where your choices shape the narrative. Our game combines stunning visuals with immersive gameplay to create an unforgettable experience that will keep you coming back for more.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Featuring a rich story, challenging puzzles, and intense combat, our game offers something for every type of player. Explore vast landscapes, uncover hidden secrets, and forge your own path in this epic adventure.
            </p>
            <div className="mt-8">
              <Link
                href="#"
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all duration-300 inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {gameScreenshots.map(screenshot => (
            <div key={screenshot.id} className="overflow-hidden rounded-lg shadow-lg group">
              <div className="relative">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={400} // Adjust based on your design
                  height={250} // Adjust based on your design. Maintain aspect ratio.
                  layout="responsive"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurGame;