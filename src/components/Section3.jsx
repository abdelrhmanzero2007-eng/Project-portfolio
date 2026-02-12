import plates from "../assets/platesImg.png";
import { Link } from "react-router-dom";

export default function Section3() {
  return (
    <div className="w-full flex justify-center lg:px-41.25 px-5">
      <div className="container flex flex-col lg:flex-row items-center px-10">
        <div className="w-full lg:w-1/2 flex justify-center items-center flex-col gap-7.25 py-10 lg:py-0">
          <h1 className="uppercase font-classic font-bold text-[24px] lg:text-[28px] leading-[1.2] tracking-widest text-center text-Main max-w-112.5 lg:max-w-120">
            Up to 40% off our Christmas collection
          </h1>
          <p className="text-center text-gray-600 max-w-93.75">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam neque ultrices.
          </p>
          <Link
            to="/"
            className="uppercase underline underline-offset-4 border-Main font-bold pb-1"
          >
            Shop Now
          </Link>
        </div>
        <div className="w-full lg:w-1/2 h-75 lg:h-100">
          <img
            src={plates}
            alt="Plates"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
