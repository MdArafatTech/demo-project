// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Gift, Heart, Smile } from 'lucide-react';

// const HappyBirthday = () => {
//   const [step, setStep] = useState(0);
//   const [name, setName] = useState('');

//   // useEffect(() => {
//   //   if (step === 3) {
//   //     const audio = new Audio('/public/birthday-music.mp3');
//   //     audio.play();
//   //   }
//   // }, [step]);

//   useEffect(() => {
//     if (step === 3) {
//       const confettiScript = document.createElement('script');
//       confettiScript.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
//       confettiScript.onload = () => {
//         window.confetti({
//           particleCount: 150,
//           spread: 100,
//           origin: { y: 0.6 },
//         });
//       };
//       document.body.appendChild(confettiScript);
//     }
//   }, [step]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-100 to-yellow-100 flex flex-col items-center justify-center p-4 text-center overflow-hidden font-serif text-black">
//       {step === 0 && (
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1 }}
//           className="cursor-pointer"
//           onClick={() => setStep(1)}
//         >
//           <Gift size={100} className="text-pink-500 animate-bounce" />
//           <h1 className="text-3xl font-bold mt-4 italic">Tap the Gift to Start</h1>
//         </motion.div>
//       )}

//       {step === 1 && (
//         <motion.div
//           initial={{ y: 200, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md"
//         >
//           <h2 className="text-2xl font-semibold mb-4 italic">What's your name? 💖</h2>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="p-2 border rounded-md w-full mb-4 italic"
//             placeholder="Enter your name..."
//           />
//           <button
//             onClick={() => setStep(2)}
//             className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full transition italic"
//             disabled={!name.trim()}
//           >
//             Continue ➡️
//           </button>
//         </motion.div>
//       )}

//       {step === 2 && (
//         <motion.div
//           initial={{ scale: 0.5, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="bg-white p-8 rounded-3xl shadow-xl max-w-xl w-full"
//         >
//           <img
//             src="https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif"
//             alt="Cartoon"
//             className="mx-auto mb-4 rounded-2xl"
//           />
//           <h2 className="text-2xl font-bold mb-4 italic">Hey {name}! 🎉</h2>
//           <p className="mb-4 text-lg italic">I have something for you... 🎁💌</p>
//           <button
//             onClick={() => setStep(3)}
//             className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full italic"
//           >
//             Click Here 💝
//           </button>
//         </motion.div>
//       )}

//       {step === 3 && (
//         <motion.div
//           initial={{ y: 300, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="bg-gradient-to-br from-pink-200 to-pink-400 p-10 rounded-3xl shadow-2xl max-w-2xl w-full text-white"
//         >
//           <h1 className="text-4xl font-extrabold mb-6 animate-pulse italic">🎂 Happy Birthday, {name}! 🎂</h1>
//           <p className="text-xl mb-4 italic">Wishing you a day filled with love, joy, and lots of cake! 🍰🎈</p>
//           <p className="text-lg mb-2 italic">You are amazing, and you deserve all the best in life. 💕🌟</p>
//           <p className="text-lg mb-6 italic">Keep smiling and spreading happiness! 😄💖</p>
//           <div className="flex justify-center gap-4 text-3xl">
//             <Heart className="text-red-500 animate-pulse" />
//             <Smile className="text-yellow-300 animate-bounce" />
//             <Heart className="text-red-400 animate-pulse delay-1000" />
//             <Smile className="text-yellow-200 animate-bounce delay-500" />
//           </div>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default HappyBirthday;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Gift, Heart, Smile } from "lucide-react";
// import gif from '../assets/happy-birthday-gif-14.gif'
import gif from '../assets/gif.mp4'

const HappyBirthday = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    if (step === 3) {
      const confettiScript = document.createElement("script");
      confettiScript.src =
        "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
      confettiScript.onload = () => {
        window.confetti({
          particleCount: 150,
          spread: 100,
          origin: { y: 0.6 },
        });
      };
      document.body.appendChild(confettiScript);
    }
  }, [step]);

  const getFormattedDate = () => {
    const date = new Date();
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 to-yellow-100 flex flex-col items-center justify-center p-4 text-center overflow-hidden font-serif text-black">
      {step === 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="cursor-pointer"
          onClick={() => setStep(1)}
        >
          <Gift size={100} className="text-pink-500 animate-bounce" />
          <h1 className="text-3xl font-bold mt-4 italic">
            Tap the Gift to Start
          </h1>
        </motion.div>
      )}

      {step === 1 && (
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md"
        >
          <h2 className="text-2xl font-semibold mb-4 italic">
            What's your name? 💖
          </h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border rounded-md w-full mb-4 italic"
            placeholder="Enter your name..."
          />
          <button
            onClick={() => setStep(2)}
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full transition italic"
            disabled={!name.trim()}
          >
            Continue ➡️
          </button>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-white p-8 rounded-3xl shadow-xl max-w-xl w-full"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto mb-4 relative"
            style={{ width: 240, height: 240 }}
          >
            <svg
              viewBox="0 0 120 120"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="w-full h-full"
            >
              {/* Body pink base */}
              <ellipse
                cx="60"
                cy="85"
                rx="40"
                ry="30"
                fill="#f9c2d1" // pink
                stroke="#d18ca0"
                strokeWidth="2"
              />
              {/* White tummy patch */}
              <ellipse cx="60" cy="90" rx="25" ry="18" fill="white" />
              {/* Back leg */}
              <ellipse
                cx="40"
                cy="95"
                rx="15"
                ry="10"
                fill="#f7bbd9"
                stroke="#d18ca0"
                strokeWidth="1.5"
              />
              {/* Front leg */}
              <ellipse
                cx="80"
                cy="95"
                rx="12"
                ry="15"
                fill="#f7bbd9"
                stroke="#d18ca0"
                strokeWidth="1.5"
              />
              {/* Tail - wagging */}
              <motion.path
                d="M20 85 C10 70, 15 50, 40 50"
                fill="none"
                stroke="#d18ca0"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{ rotate: [10, -10, 10] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  originX: "20px",
                  originY: "85px",
                  transformBox: "fill-box",
                }}
              />

              {/* Head pink */}
              <circle
                cx="60"
                cy="45"
                r="25"
                fill="#f9c2d1"
                stroke="#d18ca0"
                strokeWidth="2"
              />
              {/* White face patch */}
              <ellipse cx="60" cy="50" rx="18" ry="20" fill="white" />
              {/* Ears */}
              <polygon
                points="40,25 50,10 55,35"
                fill="#f7bbd9"
                stroke="#d18ca0"
                strokeWidth="1.5"
              />
              <polygon
                points="80,25 70,10 65,35"
                fill="#f7bbd9"
                stroke="#d18ca0"
                strokeWidth="1.5"
              />
              {/* Inner ears */}
              <polygon points="44,25 50,15 53,30" fill="#ffd9e4" />
              <polygon points="76,25 70,15 67,30" fill="#ffd9e4" />

              {/* Happy open eyes */}
              <circle cx="45" cy="45" r="8" fill="#4a1f2a" />
              <circle cx="75" cy="45" r="8" fill="#4a1f2a" />
              {/* Eye highlights */}
              <circle cx="42" cy="42" r="3" fill="#fff" />
              <circle cx="72" cy="42" r="3" fill="#fff" />

              {/* Cute heart nose */}
              <path
                d="M60 54 
             C59 52, 61 52, 60 54 
             C58 56, 62 56, 60 54 
             Z"
                fill="#d18ca0"
                stroke="#b0697a"
                strokeWidth="0.8"
              />

              {/* Static adorable smiling mouth */}
              <path
                d="M50 63 Q60 68 70 63 Q60 75 50 63"
                stroke="#b0697a"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </motion.div>

          <h2 className="text-2xl font-bold mb-2 italic">Hey {name}! 🎉</h2>
          <p className="text-md text-gray-600 mb-4 italic">
            <mark className="font-extrabold text-pink-600 animate-pulse">
              {getFormattedDate()}
            </mark>
          </p>
          <p className="mb-4 text-lg italic">
            I have something for you... 🎁💌
          </p>
          <button
            onClick={() => setStep(3)}
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full italic"
          >
            Click Here 💝
          </button>
        </motion.div>
      )}

{step === 3 && (
  <motion.div
    initial={{ y: 300, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1 }}
    className="relative bg-gradient-to-br from-pink-200 to-pink-400 p-10 rounded-3xl shadow-2xl max-w-4xl w-full text-white"
  >
    {/* Back button */}
    <Gift
      size={36}
      onClick={() => setStep(0)}
      className="absolute top-4 left-4 cursor-pointer text-white hover:text-yellow-300 transition"
      title="Go back"
    />

    <div className="flex flex-col lg:flex-row items-center gap-6">
  <div className="flex-1 text-center lg:text-left">
    <h1 className="text-4xl font-extrabold mb-6 animate-pulse italic">
      🎂 Happy Birthday, {name}! 🎂
    </h1>
    <p className="text-xl mb-4 italic">
      Wishing you a day filled with love, joy, and lots of cake! 🍰🎈
    </p>
    <p className="text-lg mb-2 italic">
      You are amazing, and you deserve all the best in life. 💕🌟
    </p>
    <p className="text-lg mb-2 italic">
      May your heart be light, your smile bright, and your year full of delight! 🌈🥳
    </p>
    <p className="text-lg mb-2 italic">
      Keep dreaming big and reaching for the stars. 🌟🚀
    </p>
    <p className="text-lg mb-6 italic">
      You're special in every way – keep shining! ✨💫
    </p>
    <div className="flex justify-center gap-4 text-3xl">
      <Heart className="text-red-500 animate-pulse" />
      <Smile className="text-yellow-300 animate-bounce" />
      <Heart className="text-red-400 animate-pulse delay-1000" />
      <Smile className="text-yellow-200 animate-bounce delay-500" />
    </div>
  </div>

  {/* Birthday GIF */}
 {/* Birthday Video */}
<div className="flex-1">
  <video
    src={gif}// Replace with your birthday video URL
    
    autoPlay
    loop
   
    className="rounded-xl shadow-lg max-w-full h-auto"
  />
</div>
</div>

  </motion.div>
)}


    </div>
  );
};

export default HappyBirthday;
