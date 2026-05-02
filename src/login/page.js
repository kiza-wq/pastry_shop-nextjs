"use client";
import { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { Playfair } from "next/font/google";

const play_fair = Playfair({
  subsets: ["latin"],
  preload: false,
});

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);
  const googleIcon = { width: "30px", height: "30px" };

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setLoginInProgress(true);

    await signIn("credentials", { email, password, callbackUrl: "/" });

    setLoginInProgress(false);
  }
  return (
    <section className="mt-15 min-h-[70vh] md:mt-25 md:min-h-[60vh]">
      <h1
        className={`text-4xl xl:text-7xl text-center text-primary font-extrabold ${play_fair.className}`}
      >
        Login
      </h1>
      <form
        className="mt-5 flex flex-col gap-2 md:mt-10 w-full md:min-w-xl"
        onSubmit={handleFormSubmit}
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          disabled={loginInProgress}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          disabled={loginInProgress}
        />
        <button
          type="submit"
          className="px-4 xl:px-8 py-1 xl:py-3 hover:bg-rose-100 border border-primary rounded-3xl text-md md:text-xl"
          disabled={loginInProgress}
        >
          Login
        </button>
        <div className="my-4 text-center text-gray-500 uppercase font-medium">
          or login with provider
        </div>
        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex gap-4 justify-center items-center hover:cursor-pointer"
        >
          <Image
            src="/google.png"
            alt="google"
            width={30}
            height={30}
            style={googleIcon}
          />
          Login with Google
        </button>
      </form>
    </section>
  );
}
