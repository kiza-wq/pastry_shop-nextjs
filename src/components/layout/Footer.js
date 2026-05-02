import Link from "next/link";
import {
  FaAppStore,
  FaGooglePlay,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-20 w-full">
      <div className="max-w-350 mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="place-self-center max-w-25 sm:max-w-50">
            <Link
              href="/"
              className="flex flex-wrap items-center font-bold text-xs md:text-lg lg:text-xl"
            >
              <img src="/logo.png" className="rounded-lg w-8 sm:w-10" />
              <span className="text-primary hover:text-rose-700 font-bold">
                Pastry Shop
              </span>
            </Link>
            <p className=" text-xs sm:text-sm leading-relaxed ">
              Handcrafted cakes & pastries using the finest French techniques
              and seasonal ingredients.
            </p>
          </div>

          <div className="place-self-center">
            <h4 className="text-white font-semibold mb-6">Platform</h4>
            <div className="space-y-3 text-sm">
              <Link
                href={"#"}
                className="block hover:text-white transition-colors"
              >
                Browse Pastries
              </Link>
              <Link
                href={"#"}
                className="block hover:text-white transition-colors"
              >
                Buy Pastries
              </Link>
              <Link
                href={"#"}
                className="block hover:text-white transition-colors"
              >
                Find Your Pastry
              </Link>
            </div>
          </div>

          <div className="place-self-center">
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <div className="space-y-3 text-sm">
              <Link
                href={"/#about"}
                className="block hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                href={"/#about"}
                className="block hover:text-white transition-colors"
              >
                Careers
              </Link>
              <Link
                href={"/#about"}
                className="block hover:text-white transition-colors"
              >
                Press
              </Link>
            </div>
          </div>

          <div className="place-self-center">
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <div className="space-y-3 text-sm">
              <Link
                href={"/#about"}
                className="block hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href={"/#about"}
                className="block hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href={"/#about"}
                className="block hover:text-white transition-colors"
              >
                Our Partners
              </Link>
            </div>
          </div>

          <div className="flex flex-col place-self-center  ">
            <h4 className="text-white font-semibold mb-6 mx-auto">
              Get the app
            </h4>
            <div className="flex flex-col gap-4 mx-auto">
              <div className="bg-zinc-900 border border-zinc-700 px-6 py-3 rounded-2xl text-sm cursor-pointer hover:border-zinc-400 transition-colors">
                <FaAppStore size={25} />
              </div>
              <div className="bg-zinc-900 border border-zinc-700 px-6 py-3 rounded-2xl text-sm cursor-pointer hover:border-zinc-400 transition-colors">
                <FaGooglePlay size={25} />
              </div>
            </div>
          </div>
          <Link href={"#"} className="place-self-center mt-10">
            <img src="/ds-logo.png" alt="DELTA SOLUTIONS" className="w-40" />
          </Link>
        </div>

        <div className="border-t border-zinc-800 mt-20 pt-10 text-xs flex flex-col md:flex-row justify-between items-center gap-6">
          <div>© 2026 Pastry Shop. Powered by ΔELTA SOLUTIONS.</div>
          <div className="flex gap-8">
            <Link href={"#"} className="hover:text-white">
              <FaTwitter size={20} />
            </Link>
            <Link href={"#"} className="hover:text-white">
              <FaInstagram size={20} />
            </Link>
            <Link href={"#"} className="hover:text-white">
              <FaLinkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
