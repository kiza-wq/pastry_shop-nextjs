import { Playfair } from "next/font/google";
import ImageSlider from "../ui/ImageSlider";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";

const play_fair = Playfair({
  subsets: ["latin"],
  preload: false,
});

export default function Hero() {
  return (
    <section className="flex flex-col xl:flex-row mt-4 xl:h-150 mb-10">
      <div className="py-5 flex flex-col justify-center max-w-160">
        <div className="flex items-center justify-center max-w-lg gap-x-2 bg-black/10 text-rose-700 text-xs xl:text-sm font-semibold tracking-normal xl:tracking-widest px-6 h-9 rounded-3xl mb-6 backdrop-blur-md">
          ✨ ESTABLISHED 2018 • PARIS INSPIRED
        </div>
        <span
          className={`text-6xl xl:text-8xl text-center xl:text-left font-extrabold ${play_fair.className}`}
        >
          Every bite
          <br />
          is a <span className="text-primary">masterpiece</span>
          <br />
        </span>
        <p className="my-6 text-gray-500 text-xl">
          Handcrafted cakes & pastries using the finest French techniques and
          seasonal ingredients.
        </p>
        <div className="flex justify-center gap-4 text-sm xl:text-xl">
          <Link
            href={"/menu"}
            className="button px-8 h-15 bg-white text-black border-primary border-2 hover:bg-rose-100 rounded-3xl flex items-center gap-x-4 shadow-md hover:shadow-rose-500/30"
          >
            ORDER NOW
            <FaArrowAltCircleRight />
          </Link>
          <Link
            href={"#about"}
            className=" button px-8 h-15 border-2 border-black text-primary hover:bg-black/10 rounded-3xl flex items-center shadow-md hover:shadow-black/30"
          >
            LEARN MORE
          </Link>
        </div>
        <div className="mt-6 flex items-center gap-x-8 text-white">
          <div className="flex -space-x-4">
            <div className="w-8 h-8 bg-white/30 backdrop-blur rounded-2xl flex items-center justify-center text-lg">
              🥐
            </div>
            <div className="w-8 h-8 bg-white/30 backdrop-blur rounded-2xl flex items-center justify-center text-lg">
              🍰
            </div>
            <div className="w-8 h-8 bg-white/30 backdrop-blur rounded-2xl flex items-center justify-center text-lg">
              🧁
            </div>
          </div>
          <p className="text-md text-black">
            Fresh daily in our atelier • Over 10,000 happy customers
          </p>
        </div>
      </div>
      <div className="relative flex justify-center items-center max-w-xs mx-auto xl:max-w-2xl">
        <ImageSlider />
      </div>
    </section>
  );
}
