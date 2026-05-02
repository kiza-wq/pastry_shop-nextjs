"use client";

import MenuItem from "@/components/menu/MenuItem";
import { Playfair } from "next/font/google";
import { useEffect, useState } from "react";

const play_fair = Playfair({
  subsets: ["latin"],
  preload: false,
});

export default function MenuPage() {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    fetch("/api/categories").then((res) => {
      res.json().then((categories) => setCategories(categories));
    });
    fetch("/api/menu-items").then((res) => {
      res.json().then((menuItems) => setMenuItems(menuItems));
    });
  }, []);
  return (
    <section className="mt-15 min-h-[70vh] md:mt-25 md:min-h-[60vh]">
      {categories?.length > 0 &&
        categories.map((c) => (
          <div key={c._id}>
            <h1
              className={`text-4xl xl:text-7xl text-center text-primary font-extrabold ${play_fair.className}`}
            >
              {c.name + " :"}
            </h1>
            <div className="grid grid-cols-3 gap-4 mt-8 mb-12">
              {menuItems
                .filter((item) => item.category === c._id)
                .map((item) => (
                  <div key={item._id}>
                    <MenuItem {...item} />
                  </div>
                ))}
            </div>
          </div>
        ))}
    </section>
  );
}
