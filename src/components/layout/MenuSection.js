import { Playfair } from "next/font/google";

const play_fair = Playfair({
  subsets: ["latin"],
  preload: false,
});

export default function MenuSection() {
  return (
    <div className="max-w-screen-2xl text-center xl:mx-auto xl:text-left px-2 m-5">
      <span className="px-6 py-2 bg-rose-100 text-rose-700 text-md font-semibold rounded-3xl">
        SIGNATURE COLLECTION
      </span>
      <div
        className={`heading-font text-7xl font-bold text-stone-900 mt-5 ${play_fair.className}`}
      >
        Cakes &amp; Pastries
      </div>
    </div>
  );
}
