import Image from "next/image";
import AddToCartButton from "./AddToCartButton";

export default function MenuItemTile({ onAddToCart, ...item }) {
  const { image, name, description, basePrice, sizes } = item;
  const hasSizesOrExtras = sizes?.length > 0;
  const ImageStyle = { width: "300px", height: "300px" };
  return (
    <div className="w-80 h-auto flex flex-col items-center bg-white border border-stone-100 rounded-3xl overflow-hidden hover:shadow-xl snap-center z-10">
      <Image
        src={image}
        alt="item_image"
        width={300}
        height={300}
        className="object-fit"
        style={ImageStyle}
        loading="eager"
      />
      <div className="p-6 w-full">
        <div className="mb-3">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">{name}</h3>
            <span className="text-2xl font-semibold text-rose-700">
              {basePrice} €
            </span>
          </div>
          <p className="text-stone-500 text-sm mt-1 w-full">{description}</p>
        </div>
        <AddToCartButton
          hasSizesOrExtras={hasSizesOrExtras}
          onClick={onAddToCart}
          basePrice={basePrice}
        />
      </div>
    </div>
  );
}
