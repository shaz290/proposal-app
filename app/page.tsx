"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ProposalApp() {
  const [step, setStep] = useState<number>(1);
  const [honeymoon, setHoneymoon] = useState<string>("");
  const [kids, setKids] = useState<string>("");

  const handleYes = () => {
    setStep(2);
  };

  const moveNoButton = (e: any) => {
    const btn = e.target;
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;
    btn.style.transform = `translate(${randomX}px, ${randomY}px)`;
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/couple.png')",
      }}
    >
      {/* 🌹 Full Screen Falling Flowers */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -50, x: `${Math.random() * 100}vw`, opacity: 0 }}
          animate={{ y: "110vh", opacity: 1 }}
          transition={{
            duration: Math.random() * 6 + 6,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          className="absolute text-2xl pointer-events-none select-none"
        >
          🌹
        </motion.div>
      ))}

      <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 max-w-xl w-full text-center relative z-10">
        {step === 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* 💖 Glowing Proposal Text */}
            <motion.h1
              className="text-3xl font-bold mb-6 text-rose-500"
              animate={{
                opacity: [0.4, 1, 0.4],
                textShadow: [
                  "0 0 0px rgba(244,63,94,0)",
                  "0 0 16px rgba(244,63,94,0.8)",
                  "0 0 0px rgba(244,63,94,0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Will you marry me? 💍
            </motion.h1>

            <div className="flex gap-6 justify-center relative">
              <button
                onClick={handleYes}
                className="px-6 py-3 bg-green-500 text-white rounded-xl text-lg shadow-md hover:scale-105 transition"
              >
                Yes ❤️
              </button>

              <button
                onMouseEnter={moveNoButton}   // desktop
                onTouchStart={moveNoButton}  // mobile
                className="px-6 py-3 bg-gray-400 text-white rounded-xl text-lg shadow-md transition absolute"
              >
                No 😅
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-2xl font-semibold mb-4">Congrats 🎉❤️</h2>
            <p className="mb-6">
              <span className="font-bold text-pink-600 text-lg animate-pulse">
                You just made me the happiest person alive! Our journey together begins now 💕
              </span>
            </p>

            <h3 className="text-xl font-medium mb-4">
              Where do you want to go for honeymoon? ✈️
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {["Rajasthan", "Goa", "Thailand", "None of the above"].map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setHoneymoon(option);
                    setStep(3);
                  }}
                  className="px-4 py-3 bg-pink-500 text-white rounded-xl shadow hover:scale-105 transition"
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {honeymoon === "None of the above" ? (
              <p className="text-xl mb-6 font-semibold text-pink-600">
                Of course you’d pick something different… and that’s exactly why I love you. Kazakhstan, here we come 💕
              </p>
            ) : (
              <p className="text-xl mb-6">
                Amazing choice! {honeymoon} is going to be unforgettable ❤️
              </p>
            )}

            <h3 className="text-xl font-medium mb-4">
              How many kids do you want? 👶
            </h3>

            <div className="flex justify-center gap-6">
              {["1", "2"].map((count) => (
                <button
                  key={count}
                  onClick={() => {
                    setKids(count);
                    setStep(4);
                  }}
                  className="px-6 py-3 bg-purple-500 text-white rounded-xl shadow hover:scale-105 transition"
                >
                  {count}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-2xl font-semibold text-sky-400 animate-pulse">
              Definitely we will have more kids than this 😄❤️
            </h2>
            <p className="mt-4 text-lg font-bold text-rose-500 animate-pulse">
              Our life is going to be full of love, laughter, and a beautiful family 💕
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
