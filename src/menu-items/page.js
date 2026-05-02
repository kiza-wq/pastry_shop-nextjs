"use client";
import UserTabs from "@/components/layout/UserTabs";
import { useProfile } from "@/components/useProfile";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function MenuItemsPage() {
  const { loading, data } = useProfile();
  const [menuItems, setMenuItems] = useState([]);
  const ItemStyle = { width: "300px", height: "300px" };

  useEffect(() => {
    fetch("/api/menu-items").then((res) => {
      res.json().then((menuItems) => {
        setMenuItems(menuItems);
      });
    });
  }, []);

  if (loading) {
    return "Loading user info...";
  }

  if (!data.admin) {
    return "Not an admin...";
  }
  return (
    <section className="mt-15 min-h-[70vh] md:mt-25 md:min-h-[60vh] mb-10 md:mb-0">
      <UserTabs isAdmin={true} />
      <div className="mt-8 flex justify-center">
        <Link
          href={"/menu-items/new"}
          className="button border border-gray-400 hover:bg-green-100 max-w-sm py-2 rounded-xl flex items-center"
        >
          <span>Create new menu item </span>
          <FaArrowAltCircleRight />
        </Link>
      </div>
      <div>
        <h2 className="text-md text-gray-500 mt-6">Edit menu items:</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10 text-center">
          {menuItems?.length > 0 &&
            menuItems.map((item) => (
              <Link
                key={item._id}
                href={"/menu-items/edit/" + item._id}
                className="bg-gray-100 rounded-lg w-full flex flex-col items-center p-5"
              >
                <div className="relative">
                  <Image
                    className="rounded-md"
                    src={item.image}
                    alt={item.name}
                    style={ItemStyle}
                    loading="eager"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="text-xl font-bold">{item.name}</div>
                <div className="text-sm">{item.description}</div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
