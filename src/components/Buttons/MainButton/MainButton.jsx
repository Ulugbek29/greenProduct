import React from "react";

export default function MainButton({ className, title, type, ...props }) {
  return (
    <button
      type={type}
      className={`p-4 bg-[#3FB339] text-white font-semibold text-xl ${className}`}
      {...props}
    >
      {title}
    </button>
  );
}
