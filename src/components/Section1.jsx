import img from "../assets/image1.png";
import img2 from "../assets/image.png";

export default function Section1() {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="w-full h-[640px] px-41.25 bg-no-repeat bg-cover bg-center "
    >
      <div className="w-full md:w-105 h-full bg-[#826f66] items-center justify-center flex flex-col text-center gap-10.5">
        <img src={img2} alt="Image" />
        <p className="text-white text-[16px] font-sans leading-6 ">
          Handcrafted in Viet Nam since 1650{" "}
        </p>
        <h1 className="text-4xl text-MainWhite font-classic text-[36px] font-bold leading-11 tracking-[4px] ">
          BAT TRANG DINNER SET{" "}
        </h1>
        <button className="px-10 py-3.75 bg-MainWhite text-[#826f66] font-bold font-sans ">
          {" "}
          SHOP NOW{" "}
        </button>
      </div>
    </div>
  );
}
