import React from "react";
import {Link} from "react-router-dom";

function Card(props) {
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <img className="rounded-t-lg" src={`${props.img}`} alt="" />
        <div className="p-6 flex justify-center items-center flex-col">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {props.title}
          </h5>
          <p className="text-gray-700 text-base mb-4">{props.reading}</p>
          <Link to={`${props.link}`}>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out
            w-full
            ">
              Start
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
