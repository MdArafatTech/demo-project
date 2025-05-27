import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Account = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>;

  if (!user) return <p>Please login to see account info.</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-lg text-center">
      <img
        src={user.photoURL || "https://via.placeholder.com/150"}
        alt="Profile"
        className="rounded-full mx-auto mb-4 w-32 h-32"
      />
      <h2 className="text-2xl font-bold">{user.displayName || "No Name"}</h2>
      <p className="mt-2">{user.email}</p>
    </div>
  );
};

export default Account;
