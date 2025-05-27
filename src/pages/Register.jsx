// import React, { useContext, useState } from "react";
// import { signInWithPopup } from "firebase/auth";
// import { auth, googleProvider } from "../firebase/firebase.config";
// import { AuthContext } from "../provider/AuthProvider";
// import { FcGoogle } from "react-icons/fc";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const { user } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [message, setMessage] = useState("");

//   const handleGoogleSignIn = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider);
//       setMessage("");
//     } catch (error) {
//       setMessage(error.message);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-lg text-center">
//       {!user ? (
//         <>
//           <h2 className="text-3xl font-bold mb-6">Register with Google</h2>
//           <button
//             onClick={handleGoogleSignIn}
//             className="btn btn-outline btn-primary w-full flex items-center justify-center gap-2 mb-3"
//           >
//             <FcGoogle size={28} /> Sign in with Google
//           </button>
//           {message && <p className="text-red-600 mt-2">{message}</p>}
//         </>
//       ) : (
//         <>
//           <h2 className="text-2xl mb-4">You're logged in!</h2>
//           <button
//             onClick={() => navigate("/happybirthday")}
//             className="btn btn-primary w-full"
//           >
//             Go to Happy Birthday 🎉
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Register;





import React, { useContext, useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase.config";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      setMessage("");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        /* Center container */
        .register-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          background: linear-gradient(135deg, #fbc7c7 0%, #f8e6e6 100%);
        }

        /* Glow animation */
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 10px 0 rgba(255, 105, 180, 0.7);
          }
          50% {
            box-shadow: 0 0 20px 5px rgba(255, 105, 180, 0.9);
          }
        }

        .btn-glow {
          animation: pulseGlow 2.5s infinite;
          transition: background-color 0.3s ease;
        }

        .btn-glow:hover {
          background-color: #db2777; /* Tailwind fuchsia-600 */
        }

        /* Responsive width */
        .register-box {
          width: 100%;
          max-width: 400px;
          background: white;
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(219, 39, 119, 0.2);
          padding: 2rem;
          text-align: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .message {
          margin-top: 0.75rem;
          color: #dc2626; /* Tailwind red-600 */
        }
      `}</style>

      <div className="register-container">
        <div className="register-box">
          {!user ? (
            <>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "#db2777" }}>
                Register with Google
              </h2>
              <button
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="btn-glow"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1rem",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  color: "white",
                  backgroundColor: "#ec4899", // Tailwind fuchsia-500
                  border: "none",
                  borderRadius: "0.5rem",
                  cursor: loading ? "not-allowed" : "pointer",
                  width: "100%",
                  userSelect: "none",
                }}
              >
                {loading ? (
                  <FaSpinner className="animate-spin" size={24} />
                ) : (
                  <FcGoogle size={28} />
                )}
                {loading ? "Signing in..." : "Sign in with Google"}
              </button>
              {message && <p className="message">{message}</p>}
            </>
          ) : (
            <>
              <h2 className="text-2xl mb-4" style={{ color: "#db2777" }}>
                You're logged in!
              </h2>
              <button
                onClick={() => navigate("/happybirthday")}
                className="btn-glow"
                style={{
                  padding: "0.75rem 1rem",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  color: "white",
                  backgroundColor: "#db2777", // Tailwind fuchsia-600
                  border: "none",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                Go to Happy Birthday 🎉
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Register;

