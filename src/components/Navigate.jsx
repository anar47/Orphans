import React from "react";

function Navigate(props) {
  return (
    <div className={`${props.className} px-8 py-4 rounded-lg `}>
      {/* <select id={`${props.id}`} name={`${props.name}`}>
        <option value={`${props.level}`}>{props.level}</option>
        <option value="Reading">Reading</option>
        <option value="Essay"> Essay</option>
      </select> */}
      <p className="text-xl text-white">{props.text}</p>
    </div>
  );
}

export default Navigate;
