import { Link } from "react-router-dom";
import secImg from "../assets/sec7.png";

export default function Section7() {
  return (
    <div className="flex flex-col gap-12 w-full items-center lg:px-41.25 px-5">
      <h1 className="uppercase text-Main text-[24px] lg:text-[30px] font-classic font-bold w-fit tracking-wider">
        Our blog
      </h1>
      <div className="container flex flex-col lg:flex-row items-center px-10">
        <div className="w-full lg:w-1/2 flex justify-center items-center flex-col gap-7.25 py-10 lg:py-0 lg:order-1 order-2">
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
        <div className="w-full lg:w-1/2 h-75 lg:h-100 lg:order-2 order-1">
          <img
            src={secImg}
            alt="Plates"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
