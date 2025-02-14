"use client";

import React from "react";
import { useRouter } from "next/navigation";

const YesResponse = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-50 px-4 py-8">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center space-y-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-pink-600 animate-bounce">
            Thank You for Being My Valentine! ❤️
          </h1>

          <p className="text-sm md:text-base text-pink-500 italic">
            You just made this day extra special!
          </p>

          <div className="relative w-full max-w-[270px] mx-auto">
            <div className="aspect-[9/16] w-full">
              <iframe
                src="https://giphy.com/embed/8QbwUh40Hl96yMgvOx"
                className="absolute top-0 left-0 w-full h-full giphy-embed rounded-lg shadow-lg"
                allowFullScreen
              />
            </div>
          </div>

          <button
            onClick={() => router.push("/")}
            className="inline-block px-6 py-3 text-white bg-pink-500 rounded-full hover:bg-pink-600 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 text-sm md:text-base"
          >
            Back to Valentine
          </button>
        </div>
      </div>
    </div>
  );
};

export default YesResponse;
