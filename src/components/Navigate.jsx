import React from "react";

function Navigate(props) {
  return (
    <div className={`${props.className} px-8 py-4 rounded-lg `}>
      <p className="text-xl text-white">{props.text}</p>
    </div>
  );
}

export default Navigate;
