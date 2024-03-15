import React from "react";

const Button = ({ style = 'text', type = 'submit', children, ...props }) => {
  let btnClass = "px-4 py-2 text-xs md:text-base rounded-md hover:drop-shadow-4xl";
  if (style === "primary") {
    btnClass +=
      " bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100";
  } else if (style === "secondary") {
    btnClass += " bg-stone-800 text-white hover:bg-stone-950";
  } else if (style === 'text') {
    btnClass += ' hover:bg-stone-200'
  } else if (style === 'danger') {
    btnClass += ' hover:text-red-500'
  }

  return <button type={type} className={btnClass} {...props}>{children}</button>;
};

export default Button;
