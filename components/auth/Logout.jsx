"use client";
import { signOut } from "next-auth/react";
import React from "react";

const Logout = () => {
  return (
    <button
      onClick={() => {
        signOut({ redirectTo: "http://localhost:3000/login" });
      }}
    >
      Sign Out
    </button>
  );
};

export default Logout;
