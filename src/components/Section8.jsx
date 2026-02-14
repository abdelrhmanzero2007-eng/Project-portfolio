export default function Section8() {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-5 bg-white">
      <span className="text-[12px] lg:text-[14px] uppercase tracking-[0.2em] text-gray-600 mb-4 font-semibold font-sans">
        Sign up for emails
      </span>

      <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-classic text-center uppercase tracking-widest mb-10 max-w-4xl leading-tight">
        For News, Collections & More
      </h2>

      <form className="w-full max-w-125 flex flex-col items-center gap-6">
        <div className="w-full relative">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full border-b border-gray-300 py-3 px-2 text-center text-[14px] lg:text-[16px] focus:outline-none focus:border-black transition-colors placeholder:text-gray-400"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-4 px-12 py-3 border border-black text-[12px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
        >
          Sign Up
        </button>
      </form>
    </section>
  );
}
