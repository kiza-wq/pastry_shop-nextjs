import { Playfair } from "next/font/google";

const play_fair = Playfair({
  subsets: ["latin"],
  preload: false,
});

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-5 bg-linear-to-br from-rose-50 to-amber-50"
    >
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <h2
              className={`text-4xl text-center xl:text-7xl xl:text-left font-bold text-stone-900 leading-none ${play_fair.className}`}
            >
              Our story is written
              <br />
              in butter and sugar
            </h2>
            <div className="mt-10 xl:text-2xl text-stone-600 max-w-none">
              <p className="leading-relaxed">
                Founded in the heart of Paris and now proudly based in
                Banjaluka, Pastry Shop brings together three generations of
                French master bakers. Every cake, every croissant, and every
                delicate macaron is crafted by hand using only the finest
                ingredients — Valrhona chocolate, Normandy butter, Tahitian
                vanilla, and seasonal fruits from local farms.
              </p>
              <p className="leading-relaxed mt-8">
                We believe that the most beautiful moments in life deserve
                something extraordinary. Whether it’s a wedding cake that makes
                your guests gasp, a simple morning croissant that feels like a
                warm hug, or a box of pastel macarons that brighten someone’s
                day — we pour our hearts into every creation.
              </p>
              <p className="leading-relaxed mt-8 font-medium text-rose-700">
                No shortcuts. No compromises. Just pure, timeless pastry
                artistry.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-square bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center text-center p-8">
                <div className="text-7xl mb-4">🇫🇷</div>
                <p className="text-2xl font-medium">French heritage</p>
                <p className="text-stone-500 mt-2">
                  Traditional recipes passed down since 1924
                </p>
              </div>
              <div className="aspect-square bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center text-center p-8">
                <div className="text-7xl mb-4">🌱</div>
                <p className="text-2xl font-medium">Sustainably sourced</p>
                <p className="text-stone-500 mt-2">
                  Organic &amp; fair-trade ingredients only
                </p>
              </div>
              <div className="aspect-square bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center text-center p-8 col-span-2">
                <div className="flex justify-center gap-8 text-6xl">
                  🥐 🍰 🍫 🥐
                </div>
                <p className="text-3xl font-semibold mt-8">
                  Baked fresh every morning at 5am
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
