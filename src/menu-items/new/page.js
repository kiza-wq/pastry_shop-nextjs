"use client";
import { useProfile } from "@/components/useProfile";
import UserTabs from "@/components/layout/UserTabs";
import { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import { redirect } from "next/navigation";
import MenuItemForm from "@/components/layout/MenuItemForm";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function NewMenuItemPage() {
  const { loading, data } = useProfile();
  const [redirectToItems, setRedirectToItems] = useState(false);

  async function handleFormSubmit(ev, data) {
    ev.preventDefault();
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/menu-items", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) resolve();
      else reject();
    });

    await toast.promise(savingPromise, {
      loading: "Saving this tasty item",
      success: "Saved",
      error: "Error",
    });
    setRedirectToItems(true);
  }
  if (redirectToItems) {
    return redirect("/menu-items");
  }

  if (loading) {
    return "Loading user info...";
  }
  if (!data.admin) {
    return "Not an admin.";
  }

  return (
    <section className="mt-15 min-h-[70vh] md:mt-25 md:min-h-[60vh] mb-10 md:mb-0">
      <UserTabs isAdmin={true} />
      <div className="mt-8 flex justify-center">
        <Link
          href={"/menu-items"}
          className="button border border-gray-400 hover:bg-gray-100 max-w-2xl py-2 rounded-xl flex items-center"
        >
          <span>Show all menu items</span> <FaArrowAltCircleLeft />
        </Link>
      </div>
      <MenuItemForm menuItem={null} onSubmit={handleFormSubmit} />
    </section>
  );
}
