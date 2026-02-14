import sec51 from "../assets/sec51.png";
import sec52 from "../assets/sec52.png";
import { Link } from "react-router-dom";

export default function Section5() {
  return (
    <>
      <div className="w-full flex justify-center lg:px-41.25 px-5">
        <div className="container flex flex-col lg:flex-row items-center px-10">
          <div className="w-full lg:w-1/2 flex justify-center items-center flex-col gap-7.25 py-10 lg:py-0">
            <h1 className="uppercase font-classic font-bold text-[24px] lg:text-[28px] leading-[1.2] tracking-widest text-center text-Main max-w-112.5 lg:max-w-120">
              Made in viet Nam since 1450
            </h1>
            <p className="text-center text-gray-600 max-w-93.75">
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis sit aliquam sit nullam neque ultrices.
            </p>
            <Link
              to="/"
              className="uppercase underline underline-offset-4 border-Main font-bold pb-1"
            >
              Lear more
            </Link>
          </div>
          <div className="w-full lg:w-1/2 h-75 lg:h-100">
            <img
              src={sec51}
              alt="Plates"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center lg:px-41.25 px-5">
        <div className="container flex flex-col lg:flex-row items-center px-10">
          <div className="w-full lg:w-1/2 h-75 lg:h-100 lg:order-1 order-2">
            <img
              src={sec52}
              alt="Plates"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 flex justify-center items-center flex-col gap-7.25 py-10 lg:py-0 lg:order-2 order-1">
            <h1 className="uppercase font-classic font-bold text-[24px] lg:text-[28px] leading-[1.2] tracking-widest text-center text-Main max-w-112.5 lg:max-w-120">
              Our History
            </h1>
            <p className="text-center text-gray-600 max-w-93.75">
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis sit aliquam sit nullam neque ultrices.
            </p>
            <Link
              to="/"
              className="uppercase underline underline-offset-4 border-Main font-bold pb-1"
            >
              Lear more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
