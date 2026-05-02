import { BsCart4 } from "react-icons/bs";

export default function AddToCartButton({
  hasSizesOrExtras,
  onClick,
  basePrice,
}) {
  return (
    <button
      type="button"
      className="w-full py-3 bg-rose-700 hover:bg-rose-800 text-white rounded-3xl font-semibold flex items-center justify-center gap-x-3 xl:text-md"
      onClick={onClick}
    >
      {hasSizesOrExtras ? (
        <span>Add to cart (from €{basePrice}) </span>
      ) : (
        <span>Add to cart €{basePrice}</span>
      )}
      <span className="text-2xl">
        <BsCart4 />
      </span>
    </button>
  );
}
