import React from "react";

const Input = ({ label, richText, direction = 'column', ...props }) => {
  let inputclass =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  let input = <input className={inputclass} {...props} />;
  if (richText) {
    input = (
      <textarea className={inputclass} {...props} >
        {props.value}
      </textarea>
    );
  }

  let wrapperClass = "flex gap-4";
  if (direction === "row") {
    wrapperClass += " flex-row";
    
  } else {
    wrapperClass += " flex-col";
  }

  return (
    <div className={wrapperClass}>
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {input}
    </div>
  );
};

export default Input;
