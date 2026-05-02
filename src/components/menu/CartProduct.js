import { cartProductPrice } from "@/components/AppContext";
import Image from "next/image";
import { FaRegTrashAlt } from "react-icons/fa";

export default function CartProduct({ product, onRemove, index }) {
  const ImageStyle = { width: "200px", height: "200px" };

  return (
    <div className="flex items-center gap-4 border-b py-4">
      <Image
        src={product.image}
        alt={product.name}
        style={ImageStyle}
        loading="eager"
        height={200}
        width={200}
        className="rounded-xl"
      />
      <div className="grow">
        <h3 className="font-semibold">{product.name}</h3>
        {product.size && (
          <div className="text-sm">
            Size: <span>{product.size.name}</span>
          </div>
        )}
        {product.extras?.length > 0 && (
          <div className="text-sm text-gray-500">
            {product.extras.map((extra) => (
              <div key={extra.name}>
                {extra.name} € {extra.price}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="text-lg font-semibold">€ {cartProductPrice(product)}</div>
      {!!onRemove && (
        <div className="ml-2">
          <button type="button" onClick={() => onRemove(index)} className="p-2">
            <FaRegTrashAlt className="hover:text-red-500" />
          </button>
        </div>
      )}
    </div>
  );
}
