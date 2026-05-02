import { useContext, useState } from "react";
import { CartContex } from "../AppContext";
import toast from "react-hot-toast";
import MenuItemTile from "./MenuItemTile";
import Image from "next/image";

export default function MenuItem(menuItem) {
  const { image, name, description, basePrice, sizes } = menuItem;
  const { addToCart } = useContext(CartContex);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const itemImage = { width: "300px", height: "300px" };

  function handleAddToCartButtonClick() {
    const hasOptions = sizes.length > 0;
    if (hasOptions && !showPopup) {
      setShowPopup(true);
      return;
    }

    addToCart(menuItem, selectedSize);
    setShowPopup(false);
    toast.success("Added to cart!");
  }

  let selectedPrice = basePrice;

  if (selectedSize) {
    selectedPrice += selectedSize.price;
  }

  return (
    <>
      {showPopup && (
        <div
          onClick={() => setShowPopup(false)}
          className="fixed inset-0 bottom-0 bg-black/80 flex items-center justify-center z-20"
        >
          <div
            onClick={(ev) => ev.stopPropagation()}
            className="my-8 bg-white p-4 rounded-3xl max-w-md border border-primary max-h-screen overflow-scroll"
          >
            <div
              className="overflow-y-scroll p-4"
              style={{ maxHeight: "calc(100vh-100px)" }}
            >
              <Image
                src={image}
                alt={name}
                width={300}
                height={300}
                style={itemImage}
                loading="eager"
              />
              <h2 className="text-lg text-center font-bold mb-1 mt-1">
                {name}
              </h2>

              <p className="text-center text-gray-600 text-sm mb-1">
                {description}
              </p>
              {sizes?.length > 0 && (
                <div className="py-2">
                  <h3 className="text-center text-gray-500 mb-1">
                    Pick your size:
                  </h3>
                  {sizes.map((size) => (
                    <label
                      key={size._id}
                      className="flex items-center justify-center gap-3 py-2 px-2 border border-rose-300 rounded-md mb-1"
                    >
                      <input
                        type="radio"
                        name="size"
                        onChange={() => setSelectedSize(size)}
                        checked={selectedSize?.name === size.name}
                      />{" "}
                      {size.name} € {basePrice + size.price}
                    </label>
                  ))}
                </div>
              )}
              <button
                onClick={handleAddToCartButtonClick}
                type="button"
                className="primary sticky bottom-2 w-full py-2 bg-rose-700 hover:bg-rose-800 text-white rounded-3xl font-semibold flex items-center justify-center gap-x-3 xl:text-md"
              >
                Add to card €{selectedPrice}
              </button>
              <button
                className="mt-2 w-full py-2 border border-red-600 rounded-3xl hover:bg-red-100"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <MenuItemTile onAddToCart={handleAddToCartButtonClick} {...menuItem} />
    </>
  );
}
