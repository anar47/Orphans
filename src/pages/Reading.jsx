import {Link} from "react-router-dom";

function Reading() {
  return (
    <div className=" p-8 rounded-lg bg-cyan-700 flex min-h-24 items-center justify-center flex-col mt-24">
      <h1 className="text-2xl text-center text-white mb-8 ">
        Are celebrities bad for you?
      </h1>
      <p className="leading-10 text-xl text-white">
        Celebrities are everywhere nowadays: on TV, in magazines, online. Is
        this preoccupation with famous people harmless fun or is it bad for us?
        How many people are truly obsessed with modern media idols? And on the
        other side of the coin, can fame be harmful to the celebrities?
      </p>
      <Link to="/qa">
        <div className=" flex items-center justify-center ">
          <button className="px-8 py-4 text-xl  bg-white rounded-lg  ">
            Proceed
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Reading;
