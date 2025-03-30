import React from 'react';
import Link from 'next/link';

function TeamMember({ name, role, imgSrc}) {
  return (
    <div className="bg-gradient-to-b from-purple-900 to-black p-1 rounded-xl group relative hover:shadow-lg transition-shadow duration-300">
      <div className="absolute inset-0 bg-purple-700 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>
      <div className="bg-black p-6 rounded-lg h-full flex flex-col items-center">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-purple-500 group-hover:border-white transition-colors duration-300">
          <img
            src={imgSrc}
            alt={name}
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-purple-400 mb-4 text-center">{role}</p>
      </div>
    </div>
  );
}

export default TeamMember;
