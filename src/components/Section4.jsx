import { products } from "../Store";

export default function Section4() {
  return (
    <div className="flex flex-col gap-12 py-20 w-full items-center px-5 lg:px-41.25">
      <h1 className="uppercase text-Main text-[24px] lg:text-[30px] font-classic font-bold w-fit tracking-wider border-b-2 border-transparent hover:border-Main transition-all">
        Best sellers
      </h1>

      <div className="container grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12">
        {products.map((el) => (
          <div key={el.id} className="flex flex-col group">
            <div className="w-full aspect-square overflow-hidden bg-[#f9f9f9] mb-4">
              <img
                src={el.img}
                alt={el.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex flex-col gap-5 grow">
              <div className="flex flex-col">
                <h2 className="uppercase font-bold text-[12px] lg:text-[14px] tracking-tight leading-tight">
                  {el.name}
                </h2>
                <p className="text-[14px] font-bold text-gray-800">
                  ${el.price.toFixed(2)}
                </p>
              </div>
              <p className="text-[14px] text-[#807F86] line-clamp-2 mt-1 leading-relaxed">
                {el.description}
              </p>
            </div>

            <button className="mt-6 w-full border border-black py-2 text-[12px] font-bold uppercase hover:bg-black hover:text-white transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
