import React from "react";

function Essay(props) {
  return (
    <form className=" text-center mt-8 ">
      <label for="essay" className="text-3xl">
        Write Essay about something....
      </label>
      <div className=" h-96 flex justify-center w-full items-center ">
        <textarea
          id="essay"
          className="bg-white rounded-lg border-blue-600 p-4 text-xl"
          cols="100"
          rows="10"
        />
      </div>
      <button
        className="px-8 py-4 rounded-lg bg-cyan-700 text-white text-xl"
        type="submit">
        Submit it{" "}
      </button>
    </form>
  );
}

export default Essay;
