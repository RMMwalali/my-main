import React from "react";

const TextAreaInput = ({ label, name, rows = 4, className, ...props }) => {
  return (
    <div
      className={`border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl ${className}`}
    >
      <label htmlFor={name} className="block text-sm font-medium text-white">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        className="mt-1 block w-full rounded-md border border-white/10 bg-neutral-950 py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        {...props}
      />
    </div>
  );
};

export default TextAreaInput;
