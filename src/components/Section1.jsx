import img from "../assets/image1.png";
import icon from "../assets/icon.png";

export default function Section1() {
  return (
    <div className="w-full h-180 lg:h-215 bg-none flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background يظهر في المقاسات الكبيرة فقط */}
      <div
        className="hidden lg:block absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      ></div>

      <div className="w-full h-1/2 lg:hidden">
        <img src={img} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="w-full h-180 lg:h-215 flex flex-col items-start p-1 lg:px-41.25 justify-center relative overflow-hidden">
        <div className="text-MainWhite text-center bg-[#826F66] gap-7.5 w-full h-full flex items-center justify-center flex-col lg:bg-[#826F66] lg:h-full lg:w-105 lg:gap-10.5">
          <img src={icon} alt="Section 1 Icon" />
          <p>Handcrafted in Viet Nam since 1650</p>
          <h1 className="text-2xl lg:text-4xl tracking-[3px] leading-10 font-classic w-61.25 h-20">
            BAT TRANG <br /> DINNER SET
          </h1>
          <button className="px-7 text-[14px] font-bold leading-5 bg-MainWhite text-[#826F66] py-3.75">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}
