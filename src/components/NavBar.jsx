import { BsCart2 } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiBars3 } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

// <div className="w-full flex items-center justify-between bg-amber-600 py-4 px-8 lg:py-7 lg:px-41.25"></div>

export default function NavBar() {
  return (
    <div className="w-full flex items-center justify-between bg-amber-600 py-4 px-8 lg:py-7 lg:px-41.25">
      {" "}
      <div className="block lg:hidden">
        <HiBars3 />
      </div>
      <div className="">
        <h1>Logo</h1>
      </div>
      <div className="flex-none hidden lg:block">
        <ul className="flex items-center justify-evenly gap-15">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/cart">About</Link>
          </li>
          <li>
            <Link to="/login">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-evenly gap-6">
        <IoSearchOutline className="hidden lg:block" />
        <FaRegCircleUser className="hidden lg:block" />
        <IoMdHeartEmpty className="hidden lg:block" />
        <BsCart2 />
      </div>
    </div>
  );
}
