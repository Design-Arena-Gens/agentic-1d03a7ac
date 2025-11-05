'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const scenes = [
  { id: 0, duration: 3000 },
  { id: 1, duration: 5000 },
  { id: 2, duration: 5000 },
  { id: 3, duration: 5000 },
  { id: 4, duration: 4000 },
  { id: 5, duration: 4000 },
  { id: 6, duration: 4000 },
];

export default function Home() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      if (currentScene < scenes.length - 1) {
        setCurrentScene(currentScene + 1);
      } else {
        setCurrentScene(0);
      }
    }, scenes[currentScene].duration);

    return () => clearTimeout(timer);
  }, [currentScene, isPlaying]);

  const startVideo = () => {
    setIsPlaying(true);
    setCurrentScene(0);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const resetVideo = () => {
    setIsPlaying(false);
    setCurrentScene(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="relative aspect-video bg-white rounded-lg overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            {currentScene === 0 && <Scene1 key="scene1" />}
            {currentScene === 1 && <Scene2 key="scene2" />}
            {currentScene === 2 && <Scene3 key="scene3" />}
            {currentScene === 3 && <Scene4 key="scene4" />}
            {currentScene === 4 && <Scene5 key="scene5" />}
            {currentScene === 5 && <Scene6 key="scene6" />}
            {currentScene === 6 && <Scene7 key="scene7" />}
          </AnimatePresence>
        </div>

        <div className="mt-8 flex gap-4 justify-center">
          <button
            onClick={startVideo}
            disabled={isPlaying}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {isPlaying ? 'Playing...' : 'Play Video'}
          </button>
          <button
            onClick={resetVideo}
            className="px-8 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-all"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Audio element */}
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

function Scene1() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center"
    >
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-bold text-white text-center px-8"
      >
        Want to reach thousands <br />
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-yellow-300"
        >
          instantly?
        </motion.span>
      </motion.h1>
    </motion.div>
  );
}

function Scene2() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 flex items-center justify-center p-12"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-left max-w-3xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="text-6xl">✅</div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
            Send WhatsApp messages
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-3xl md:text-4xl text-blue-700 font-semibold ml-20"
        >
          for just <span className="text-green-600 text-5xl">₹0.20</span> per message
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

function Scene3() {
  const features = [
    "Send PDFs",
    "Send Videos",
    "Send Creative Posts"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center p-12"
    >
      <div className="space-y-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.4, duration: 0.6 }}
            className="flex items-center gap-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.4 + 0.2, type: "spring" }}
              className="text-6xl"
            >
              ✅
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              {feature}
            </h2>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function Scene4() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-white flex items-center justify-center p-12"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-6xl"
          >
            ✅
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
            Include Display Picture (DP)
          </h2>
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center gap-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, type: "spring" }}
            className="text-6xl"
          >
            ✅
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
            Add Push Buttons
          </h2>
        </motion.div>
      </div>
    </motion.div>
  );
}

function Scene5() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center p-12"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-6xl"
          >
            ⚡
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Fast Delivery
          </h2>
        </motion.div>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center gap-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, type: "spring" }}
            className="text-6xl"
          >
            📈
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            High Engagement
          </h2>
        </motion.div>
      </div>
    </motion.div>
  );
}

function Scene6() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-12"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-80 h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl"
        >
          <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
            {/* Phone notch */}
            <div className="h-8 bg-gray-900 rounded-b-3xl mx-auto w-40"></div>

            {/* WhatsApp header */}
            <div className="bg-green-600 text-white p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full"></div>
              <div>
                <div className="font-semibold">Customer</div>
                <div className="text-xs">online</div>
              </div>
            </div>

            {/* Chat messages */}
            <div className="p-4 space-y-3 bg-gray-50 h-full">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-white p-3 rounded-lg shadow max-w-[80%]"
              >
                <p className="text-sm">🎉 Special Offer!</p>
              </motion.div>

              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-white p-3 rounded-lg shadow max-w-[80%]"
              >
                <p className="text-sm">✅ 50% OFF Today Only</p>
              </motion.div>

              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="bg-white p-3 rounded-lg shadow max-w-[80%]"
              >
                <p className="text-sm">📦 Free Delivery</p>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, type: "spring" }}
                className="bg-white p-3 rounded-lg shadow max-w-[80%]"
              >
                <button className="w-full bg-green-500 text-white py-2 rounded font-semibold text-sm">
                  Shop Now
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function Scene7() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 flex flex-col items-center justify-center p-8"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center space-y-8"
      >
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-yellow-400 text-blue-900 px-12 py-6 rounded-2xl inline-block"
        >
          <h2 className="text-5xl md:text-6xl font-bold">Try It Now!</h2>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
          className="bg-white text-blue-900 px-10 py-5 rounded-xl inline-block"
        >
          <p className="text-2xl font-semibold mb-2">Contact Us</p>
          <a
            href="tel:+918280527451"
            className="text-4xl md:text-5xl font-bold hover:text-blue-600 transition-colors"
          >
            +91 8280527451
          </a>
        </motion.div>

        <motion.h3
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-4xl md:text-5xl font-bold text-white px-8"
        >
          Reach thousands on WhatsApp
          <br />
          <span className="text-yellow-300">instantly!</span>
        </motion.h3>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, type: "spring" }}
          className="flex justify-center gap-3"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                delay: i * 0.2,
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
              className="w-4 h-4 bg-yellow-400 rounded-full"
            ></motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
