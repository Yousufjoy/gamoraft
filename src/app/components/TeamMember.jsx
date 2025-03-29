import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function TeamMember({ name, role, imgSrc, linkedinUrl = '#', twitterUrl = '#' }) {  // Added default values for URLs
  return (
    <div className="bg-gradient-to-b from-purple-900 to-black p-1 rounded-xl group relative hover:shadow-lg transition-shadow duration-300">
      {/* Optional: Add a subtle background overlay on hover */}
      <div className="absolute inset-0 bg-purple-700 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>
      <div className="bg-black p-6 rounded-lg h-full flex flex-col items-center">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-purple-500 group-hover:border-white transition-colors duration-300">
          <Image
            src={imgSrc}
            alt={name}
            width={128}  // Fixed width, adjust if needed
            height={128} // Fixed height, adjust if needed (same as width for a circle)
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-purple-400 mb-4 text-center">{role}</p>
        <div className="flex space-x-3 mt-4">
          {linkedinUrl && (
            <Link href={linkedinUrl} aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
          )}
          {twitterUrl && (
            <Link href={twitterUrl} aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamMember;