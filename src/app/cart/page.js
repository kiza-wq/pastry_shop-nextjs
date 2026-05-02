"use client";
import { CartContex, cartProductPrice } from "@/components/AppContext";
import AddressInputs from "@/components/layout/AddressInputs";
import CartProduct from "@/components/menu/CartProduct";
import { useProfile } from "@/components/useProfile";
import { Playfair } from "next/font/google";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const play_fair = Playfair({
  subsets: ["latin"],
  preload: false,
});

export default function CartPage() {
  const { cartProducts, removeCartProduct } = useContext(CartContex);
  const [address, setAddress] = useState({
    phone: "",
    streetAddress: "",
    postalCode: "",
    city: "",
    country: "",
  });
  const { data: profileData } = useProfile();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.href.includes("canceled=1")) {
        toast.error("Payment failed 😔");
      }
    }
  }, []);

  useEffect(() => {
    if (profileData?.city) {
      const { phone, streetAddress, city, postalCode, country } = profileData;
      const addresFromProfile = {
        phone,
        streetAddress,
        city,
        postalCode,
        country,
      };
      setAddress(addresFromProfile);
    }
  }, [profileData]);

  let total = 0;
  for (const p of cartProducts) {
    total += cartProductPrice(p);
  }

  function handleAddressChange(propName, value) {
    setAddress((prevAddress) => {
      return { ...prevAddress, [propName]: value };
    });
  }
  async function proceedToCheckout(ev) {
    ev.preventDefault();
    // address and shopping cart products

    const promise = new Promise((resolve, reject) => {
      fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          address,
          cartProducts,
        }),
      }).then(async (response) => {
        if (response.ok) {
          resolve();
          console.log(response);
          window.location = await response.json();
        } else {
          reject();
        }
      });
    });

    await toast.promise(promise, {
      loading: "Preparing your order...",
      success: "Redirecting to payment...",
      error: "Something went wrong... Please try again later",
    });
  }

  if (cartProducts?.length === 0) {
    return (
      <section className="mt-15 min-h-[70vh] md:mt-25 md:min-h-[60vh] mb-10 md:mb-0 text-center">
        <h1
          className={`text-4xl xl:text-7xl text-center text-primary font-extrabold ${play_fair.className}`}
        >
          Cart
        </h1>
        <p className="mt-4 text-2xl">Your shopping cart is empty 😔</p>
      </section>
    );
  }

  return (
    <section className="mt-15 min-h-[70vh] md:mt-25 md:min-h-[60vh] mb-10 md:mb-0">
      <h1
        className={`text-4xl xl:text-7xl text-center text-primary font-extrabold ${play_fair.className}`}
      >
        Cart
      </h1>
      <div className="mt-8 grid gap-8 grid-cols-1 xl:grid-cols-2">
        <div className="border border-gray-300 rounded-xl mb-10 p-1">
          {cartProducts?.length === 0 && (
            <div>No products in your shopping cart</div>
          )}
          {cartProducts?.length > 0 &&
            cartProducts.map((product, index) => (
              <CartProduct
                key={index}
                index={index}
                product={product}
                onRemove={removeCartProduct}
                className="flex gap-4 mb-4 border-b py-4 items-center"
              />
            ))}
          <div className="pz-4 text-right pr-10">
            <span className="text-gray-500 mr-2">Total:</span>
            <span className="text-lg font-semibold">€ {total}</span>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-xl border border-gray-300 max-h-110">
          <h2 className="text-xl text-black font-semibold">Checkout:</h2>
          <form onSubmit={proceedToCheckout}>
            <AddressInputs
              addressProps={address}
              setAddressProps={handleAddressChange}
            />
               <button
              type="submit"
              className="px-4 py-1 bg-yellow-300 hover:bg-yellow-400 border-2 border-gray-500 rounded-xl text-lg md:text-2xl mt-5"
            >
              Pay: € {total}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
