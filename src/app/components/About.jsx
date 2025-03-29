import React from "react";

function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-black to-purple-950"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16 relative">
          About Us
          <span className="block w-20 h-1 bg-purple-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-4"></span>
        </h2>

        <div className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed">
          <p className="mb-6 text-center text-2xl">
            We are a developer team who develop a fun game according to public
            demand. we always give fun and satisfy within our game.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
