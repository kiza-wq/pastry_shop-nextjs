export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-stone-900 text-white w-full">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-center text-4xl xl:text-left xl:text-6xl font-semibold">
              Let’s make something sweet together
            </h2>
            <p className="mt-6 text-center xl:text-left xl:text-xl text-stone-300">
              Custom orders, wedding cakes, corporate events, or just because —
              we’re here for you.
            </p>

            <form
              id="contact-form"
              action="mailto:someone@example.com"
              method="post"
              className="mt-10 space-y-6"
            >
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="bg-white/10 border border-white/20 rounded-3xl px-8 py-6 text-white placeholder:text-white/40 focus:outline-none focus:border-rose-500"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  className="bg-white/10 border border-white/20 rounded-3xl px-8 py-6 text-white placeholder:text-white/40 focus:outline-none focus:border-rose-500"
                />
              </div>
              <textarea
                placeholder="Tell us about your dream cake or order..."
                rows="8"
                required
                className="w-full bg-white/10 border border-white/20 rounded-3xl px-8 py-6 text-white placeholder:text-white/40 focus:outline-none focus:border-rose-500"
              ></textarea>
              <button
                type="submit"
                className="w-full py-4 bg-primary hover:bg-rose-800 xl:text-2xl font-semibold rounded-3xl mt-10"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center">
            <div className="text-amber-300 text-7xl mb-6">📍</div>
            <p className="text-2xl xl:text-3xl font-light">
              Veselina Masleše 35
              <br />
              Banjaluka, 78000
            </p>
            <p className="mt-8 text-3xl xl:text-5xl font-semibold">
              +387 65 123-456
            </p>
            <p className="xl:text-xl text-stone-400 mt-2">
              Open daily 7am – 7pm
            </p>

            <div className="mt-auto pt-16 border-t border-white/20 text-sm flex gap-8">
              <a href="#" className="hover:text-rose-400">
                Instagram
              </a>
              <a href="#" className="hover:text-rose-400">
                Facebook
              </a>
              <a href="#" className="hover:text-rose-400">
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
