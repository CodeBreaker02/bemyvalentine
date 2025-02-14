"use client";

import React, { useState } from "react";
import { Lock, Heart } from "lucide-react";

const LovePage = () => {
  const [code, setCode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.toLowerCase() === "princesse") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Ce n'est pas le bon surnom... Essaie encore mon amour ❤️");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <Heart className="mx-auto h-12 w-12 text-pink-500 animate-bounce" />
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              ❤️ Page secrète pour mon amour ❤️
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Pour voir ton message d'amour, réponds à cette question
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quel est mon surnom préféré pour toi ?
                </label>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-pink-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                  placeholder="Entre le code secret..."
                />
              </div>
            </div>

            {error && (
              <div className="text-red-600 text-sm text-center">{error}</div>
            )}

            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <Lock className="h-5 w-5 text-pink-500 group-hover:text-pink-400" />
              </span>
              Déverrouiller mon cœur
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-8 animate-bounce">
          Je t'aime ma Princesse ❤️
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <iframe
              src="https://giphy.com/embed/3o7TKoWXm3okO1kgHC"
              width="100%"
              height="300"
              className="rounded-lg"
              frameBorder="0"
              allowFullScreen
            />
            <p className="text-center mt-4 text-lg font-medium text-pink-600">
              Mon cœur bat pour toi 💕
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <iframe
              src="https://giphy.com/embed/nQ5pf7C2GD6EmM56b3"
              width="100%"
              height="300"
              className="rounded-lg"
              frameBorder="0"
              allowFullScreen
            />
            <p className="text-center mt-4 text-lg font-medium text-pink-600">
              Tu es ma princesse pour toujours 👑
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <iframe
              src="https://giphy.com/embed/3odxXG6oUNRVhsdcLK"
              width="100%"
              height="300"
              className="rounded-lg"
              frameBorder="0"
              allowFullScreen
            />
            <p className="text-center mt-4 text-lg font-medium text-pink-600">
              Chaque jour avec toi est magique ✨
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <iframe
              src="https://giphy.com/embed/l4pTdcifPZLpDjL1e"
              width="100%"
              height="300"
              className="rounded-lg"
              frameBorder="0"
              allowFullScreen
            />
            <p className="text-center mt-4 text-lg font-medium text-pink-600">
              Tu es mon plus beau cadeau 🎁
            </p>
          </div>
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-2xl font-medium text-pink-700">
            Je t'aime plus que tout au monde 💖
          </p>
          <p className="text-xl text-pink-600">
            Tu es la plus belle chose qui me soit arrivée ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default LovePage;
