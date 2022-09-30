import {Link} from "react-router-dom";
import Navigate from "./Navigate";
function Navbar() {
  return (
    <div className=" h-24 sticky w-full bg-transparent shadow-lg  flex items-center  justify-around  ">
      <Link to="/elementary">
        <Navigate className="bg-red-500 " text="Elementary" />
      </Link>

      <Link to="/intermediate">
        <Navigate className="bg-yellow-500 " text="Intermediate" />
      </Link>

      <Link to="/upper-intermediate">
        <Navigate className="bg-lime-500 " text="Upper Intermediate" />
      </Link>
    </div>
  );
}

export default Navbar;
