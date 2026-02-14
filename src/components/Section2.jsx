import TableWare from "../assets/TableWare.svg";
import HomeDecor from "../assets/HomeDecor.svg";
import holiday from "../assets/holiday.svg";
import Collection from "../assets/Collection.svg";
export default function Section2() {
  return (
    <div className="w-full overflow-x-auto` py-20 px-41.25 flex gap-7.5 items-center justify-between ">
      <div className="w-63.75  flex flex-col gap-2">
        <img className=" w-full" src={TableWare} alt="photo" />
        <p className="font-semibold text-[18px] text-[#3A3845] uppercase text-center">
          TableWare
        </p>
      </div>
      <div className="w-63.75  flex flex-col gap-2">
        <img className=" w-full" src={HomeDecor} alt="photo" />
        <p className="font-semibold text-[18px] text-[#3A3845] uppercase text-center">
          Home Decor
        </p>
      </div>
      <div className="w-63.75  flex flex-col gap-2">
        <img className=" w-full" src={holiday} alt="photo" />
        <p className="font-semibold text-[18px] text-[#3A3845] uppercase text-center">
          holiday
        </p>
      </div>
      <div className="w-63.75  flex flex-col gap-2">
        <img className=" w-full" src={Collection} alt="photo" />
        <p className="font-semibold text-[18px] text-[#3A3845] uppercase text-center">
          Collection
        </p>
      </div>
    </div>
  );
}
