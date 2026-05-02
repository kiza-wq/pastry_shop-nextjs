"use client";
import { useProfile } from "@/components/useProfile";
import UserTabs from "@/components/layout/UserTabs";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";
import MenuItemForm from "@/components/layout/MenuItemForm";
import DeleteButton from "@/components/DeleteButton";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function EditMenuItemPage() {
  const [menuItem, setMenuItem] = useState(null);
  const { loading, data } = useProfile();
  const [redirectToItems, setRedirectToItems] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch("/api/menu-items").then((res) => {
      res.json().then((items) => {
        const item = items.find((i) => i._id === id);
        setMenuItem(item);
      });
    });
  }, []);

  async function handleFormSubmit(ev, data) {
    ev.preventDefault();
    data = { ...data, _id: id };

    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/menu-items", {
        method: "PUT",
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

  async function handleDeleteClick() {
    const promise = new Promise(async (resolve, reject) => {
      const res = await fetch("/api/menu-items?_id=" + id, {
        method: "DELETE",
      });
      if (res.ok) {
        resolve();
      } else {
        reject();
      }
    });

    await toast.promise(promise, {
      loading: "Deleting...",
      success: "Deleted",
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
      <MenuItemForm menuItem={menuItem} onSubmit={handleFormSubmit} />
      <div className="px-4 mt-10 xl:px-8 py-1 xl:py-2 hover:bg-red-700 text-white border bg-primary border-black rounded-3xl text-xl">
        <DeleteButton
          label="Delete this menu item"
          onDelete={handleDeleteClick}
        />
      </div>
    </section>
  );
}
