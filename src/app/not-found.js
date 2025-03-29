"use client";
import React from "react";
import Link from "next/link";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center px-4">
      <h1 className="text-6xl md:text-8xl font-bold text-purple-500">404</h1>
      <p className="text-xl md:text-2xl mt-4">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300"
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
