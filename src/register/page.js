"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Playfair } from "next/font/google";

const play_fair = Playfair({
  subsets: ["latin"],
  preload: false,
});

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userCreated, setUserCreated] = useState(false);
  const [creatingUser, setCreatingUser] = useState(false);
  const [error, setError] = useState(false);
  const googleIcon = { width: "30px", height: "30px" };

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setUserCreated(false);
    setError(false);

    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setUserCreated(true);
    } else {
      setError(true);
    }

    setCreatingUser(false);
  }

  return (
    <section className="mt-15 min-h-[70vh] md:mt-25 md:min-h-[60vh]">
      <h1
        className={`text-4xl xl:text-7xl text-center text-primary font-extrabold ${play_fair.className}`}
      >
        Register
      </h1>
      {userCreated && (
        <div className="my-4 text-center">
          {" "}
          User created. <br />
          You can{" "}
          <Link href={"/login"} className="underline">
            Login &raquo;
          </Link>
        </div>
      )}
      {error && (
        <div className="my-4 text-center">
          An error has been occured! <br />
          Please try again!
        </div>
      )}
      <form
        className="mt-5 flex flex-col gap-2 md:mt-10 w-full md:min-w-xl"
        onSubmit={handleFormSubmit}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          disabled={creatingUser}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          disabled={creatingUser}
        />
        <button
          type="submit"
          className="px-4 xl:px-8 py-1 xl:py-3 hover:bg-rose-100 border border-primary rounded-3xl text-md md:text-xl"
          disabled={creatingUser}
        >
          Register
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
            style={googleIcon}
            width={30}
            height={30}
          />
          Login with Google
        </button>
        <div className="text-center my-4 text-gray-500 border-t pt-4">
          Existing account?{" "}
          <Link className="underline" href={"/login"}>
            Login here &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
}
