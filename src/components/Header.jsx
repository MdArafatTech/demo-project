// src/components/Header.jsx
import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";
import Birthday from "../pages/HappyBirthday";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showBirthday, setShowBirthday] = useState(false);
  const [message, setMessage] = useState("");
  const [justRegistered, setJustRegistered] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setMessage("");
      setShowRegisterForm(false);
      setJustRegistered(true);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <>
      <style>{`
        nav {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #fff0f5;
          padding: 1rem;
          flex-direction: column;
        }
        .btn-pink-glow {
          background-color: #ec4899;
          color: white;
          padding: 0.75rem 1.75rem;
          border-radius: 0.75rem;
          font-weight: 600;
          font-size: 1.2rem;
          animation: pinkGlow 2s infinite;
          border: none;
          cursor: pointer;
          margin-bottom: 1rem;
        }
        .btn-pink-glow:hover {
          background-color: #be185d;
        }
        @keyframes pinkGlow {
          0%, 100% {
            box-shadow: 0 0 10px rgba(236, 72, 153, 0.7);
          }
          50% {
            box-shadow: 0 0 20px rgba(236, 72, 153, 0.9);
          }
        }
        .register-form {
          background: white;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
          border-radius: 12px;
          padding: 2rem;
          min-width: 320px;
          animation: fadeInScale 0.4s ease;
        }
        @keyframes fadeInScale {
          from {opacity: 0; transform: scale(0.9);}
          to {opacity: 1; transform: scale(1);}
        }
      `}</style>

      <nav>
        {user ? (
          showBirthday ? (
            <Birthday />
          ) : justRegistered ? (
            <button
              className="btn-pink-glow"
              onClick={() => setShowBirthday(true)}
            >
              Click Here 🎉
            </button>
          ) : (
            <>
              <button onClick={logout} className="btn bg-red-500 text-white">
                Sign Out
              </button>
            </>
          )
        ) : (
          <>
            {!showRegisterForm ? (
              <button
                className="btn-pink-glow"
                onClick={() => setShowRegisterForm(true)}
              >
                Register
              </button>
            ) : (
              <div className="register-form">
                <h3 className="text-xl font-bold mb-4 text-pink-600">
                  Register with Google
                </h3>
                <button
                  onClick={handleGoogleSignIn}
                  className="btn bg-pink-500 text-white w-full flex items-center justify-center gap-2"
                >
                  <FcGoogle size={24} />
                  Sign in with Google
                </button>
                {message && (
                  <p className="text-red-500 mt-2 text-sm text-center">
                    {message}
                  </p>
                )}
              </div>
            )}
          </>
        )}
      </nav>
    </>
  );
};

export default Header;







