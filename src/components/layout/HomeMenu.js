"use client";
import MenuItem from "../menu/MenuItem";

import { useEffect, useState } from "react";
import { WavyBackground } from "../ui/WavyBackground";

export default function HomeMenu() {
  const [bestSellers, setBestSellers] = useState([]);
  useEffect(() => {
    fetch("/api/menu-items").then((res) => {
      res.json().then((menuItems) => {
        const bestsellers = menuItems.slice(-3);
        setBestSellers(bestsellers);
      });
    });
  }, []);
  return (
    <section className="mt-20 xl:mt-5">
      <WavyBackground backgroundFill={"transparent"} />

      <div className="flex flex-col flex-wrap xl:flex-row p-5 justify-around">
        {bestSellers?.length > 0 &&
          bestSellers.map((item) => <MenuItem key={item._id} {...item} />)}
      </div>
    </section>
  );
}
