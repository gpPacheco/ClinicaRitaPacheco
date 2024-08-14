import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <button
        type="button"
        className="bg-zinc-500 text-white px-4 py-2 rounded flex items-center focus:outline-none focus:shadow-outline-indigo"
        disabled
      >
        <svg
          className="animate-spin h-5 w-5 mr-3 text-white"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="8"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
        </svg>
        Carregando...
      </button>
    </div>
  );
}

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/