"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import loveCaptions from "./data/loveCaptions";

export default function ProposalApp() {
  const [step, setStep] = useState<number>(1);
  const [honeymoon, setHoneymoon] = useState<string>("");
  const [kids, setKids] = useState<string>("");

  const [showCaption, setShowCaption] = useState(false);
  const [finalCaption, setFinalCaption] = useState<string>("");

  useEffect(() => {
    // pick random caption once on load
    const randomCaption =
      loveCaptions[Math.floor(Math.random() * loveCaptions.length)];
    setFinalCaption(randomCaption);
  }, []);

  const handleYes = () => {
    setStep(2);
    fireFireworks(); // 🎆 fireworks for 4 seconds
  };

  const fireFireworks = () => {
    const duration = 4000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 6,
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.6,
        },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const moveNoButton = (e: any) => {
    const btn = e.target;
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;
    btn.style.transform = `translate(${randomX}px, ${randomY}px)`;
  };

  const wrapperClass =
    step === 3
      ? "min-h-[100svh] flex flex-col items-center justify-end sm:justify-center pb-8 sm:pb-0 p-4 sm:p-6 bg-cover bg-[center_top] sm:bg-center relative overflow-hidden"
      : "min-h-[100svh] flex flex-col items-center justify-start sm:justify-center pt-8 sm:pt-0 p-4 sm:p-6 bg-cover bg-[center_top] sm:bg-center relative overflow-hidden";

  // ⏱️ Show caption after 5 seconds on final step
  useEffect(() => {
    if (step === 4) {
      setShowCaption(false);
      const timer = setTimeout(() => {
        setShowCaption(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div
      className={wrapperClass}
      style={{
        backgroundImage: "url('/couple1.jpeg')",
      }}
    >
      {/* Subtle overlay (lighter on mobile so pic shows) */}
      <div className="absolute inset-0 bg-black/10 sm:bg-black/20 z-0" />

      {/* 🌹 Full Screen Falling Flowers */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -50, x: `${Math.random() * 100}vw`, opacity: 0 }}
          animate={{ y: "110svh", opacity: 1 }}
          transition={{
            duration: Math.random() * 6 + 6,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          className="absolute text-xl sm:text-2xl pointer-events-none select-none z-0"
        >
          🌹
        </motion.div>
      ))}

      {/* Glass card */}
      <div className="bg-white/35 sm:bg-white/40 backdrop-blur-sm sm:backdrop-blur-md shadow-xl rounded-2xl p-5 sm:p-8 max-w-xl w-full text-center relative z-10 border border-white/30 sm:border-white/40">
        {step === 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <motion.h1
              className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-6 text-rose-500"
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

            <div className="flex gap-4 sm:gap-6 justify-center relative">
              <button
                onClick={handleYes}
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-green-500 text-white rounded-xl text-base sm:text-lg shadow-md hover:scale-105 transition"
              >
                Yes ❤️
              </button>

              <button
                onMouseEnter={moveNoButton}
                onTouchStart={moveNoButton}
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gray-400 text-white rounded-xl text-base sm:text-lg shadow-md transition absolute"
              >
                No 😅
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <motion.h2
              className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-purple-600"
              animate={{
                opacity: [0.6, 1, 0.6],
                textShadow: [
                  "0 0 0px rgba(147,51,234,0)",
                  "0 0 12px rgba(147,51,234,0.8)",
                  "0 0 0px rgba(147,51,234,0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Congrats 🎉❤️
            </motion.h2>

            <p className="mb-5 sm:mb-6">
              <span className="font-bold text-pink-600 text-base sm:text-lg animate-pulse">
                You just made me the happiest person alive! Our journey together begins now 💕
              </span>
            </p>

            <motion.h3
              className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-purple-600"
              animate={{
                opacity: [0.6, 1, 0.6],
                textShadow: [
                  "0 0 0px rgba(147,51,234,0)",
                  "0 0 12px rgba(147,51,234,0.8)",
                  "0 0 0px rgba(147,51,234,0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Where do you want to go for honeymoon? ✈️
            </motion.h3>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {["Rajasthan", "Goa", "Thailand", "None of the above"].map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setHoneymoon(option);
                    setStep(3);
                  }}
                  className="px-3 sm:px-4 py-2.5 sm:py-3 bg-pink-500 text-white rounded-xl shadow hover:scale-105 transition text-sm sm:text-base"
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
              <p className="text-base sm:text-xl mb-5 sm:mb-6 font-semibold text-pink-600">
                Of course you’d pick something different… and that’s exactly why I love you. Kazakhstan, here we come 💕
              </p>
            ) : (
              <p className="text-base sm:text-xl mb-5 sm:mb-6">
                Amazing choice! {honeymoon} is going to be unforgettable ❤️
              </p>
            )}

            <motion.h3
              className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-sky-500"
              animate={{
                opacity: [0.6, 1, 0.6],
                textShadow: [
                  "0 0 0px rgba(14,165,233,0)",
                  "0 0 12px rgba(14,165,233,0.8)",
                  "0 0 0px rgba(14,165,233,0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              How many kids do you want? 👶
            </motion.h3>

            <div className="flex justify-center gap-4 sm:gap-6">
              {["1", "2"].map((count) => (
                <button
                  key={count}
                  onClick={() => {
                    setKids(count);
                    setStep(4);
                  }}
                  className="px-5 sm:px-6 py-2.5 sm:py-3 bg-purple-500 text-white rounded-xl shadow hover:scale-105 transition text-sm sm:text-base"
                >
                  {count}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {!showCaption && (
              <>
                <h2 className="text-xl sm:text-2xl font-semibold text-sky-400 animate-pulse">
                  Definitely we will have more kids than this 😄❤️
                </h2>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg font-bold text-rose-500 animate-pulse">
                  Our life is going to be full of love, laughter, and a beautiful family 💕
                </p>
              </>
            )}

            {showCaption && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-6 text-base sm:text-lg italic text-purple-700"
              >
                “{finalCaption}”
              </motion.p>
            )}
          </motion.div>
        )}

      </div>
    </div>
  );
}
