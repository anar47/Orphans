import {useState} from "react";

function PopUp(props) {
  const [closeTab, setCloseTab] = useState(false);

  const closeInfoHandler = () => {
    setCloseTab(true);
  };

  return (
    <>
      {closeTab === true ? (
        ""
      ) : (
        <div className="absolute   w-96 pb-12 left-100  p-12 bg-red-200 transition-all duration-200 ease-in-out z-10 rounded-lg shadow-lg">
          <p className="text-xl leading-10">{`This is a ${props.level} Reading task you have to read it carefully to answer all the questions please click proceed button to answe all the questions when you finish reading ! `}</p>
          <div className="mt-8 w-fll flex justify-center">
            <button
              onClick={closeInfoHandler}
              className=" bg-cyan-500 px-8 py-4 rounded-lg text-xl">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default PopUp;
