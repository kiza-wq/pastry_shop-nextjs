"use client";
import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaPlus,
  FaRegTrashAlt,
} from "react-icons/fa";

export default function MenuItemPriceProps({
  name,
  addLabel,
  props,
  setProps,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function addProps() {
    setIsOpen(true);
    setProps((oldProps) => {
      return [...oldProps, { name: "", price: 0 }];
    });
  }

  function editProps(ev, index, prop) {
    const newValue = ev.target.value;
    setProps((prevProps) => {
      const newSizes = [...prevProps];
      newSizes[index][prop] = newValue;
      return newSizes;
    });
  }

  function removeProps(indexToRemove) {
    setProps((prev) => prev.filter((v, index) => index !== indexToRemove));
  }

  return (
    <div className="bg-gray-200 p-2 rounded-md mb-2">
      <button
        type="button"
        className="border-0 justify-start inline-flex p-1"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen && <FaChevronUp />}
        {!isOpen && <FaChevronDown />}
        <span>{name}</span>
        <span>{props.length}</span>
      </button>

      <div className={isOpen ? "block" : "hidden"}>
        {props?.length > 0 &&
          Array.isArray(props) &&
          props?.map((size, index) => (
            <div key={index} className="flex gap-2 items-end">
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  placeholder="Size name"
                  value={size.name}
                  className="bg-white"
                  onChange={(ev) => editProps(ev, index, "name")}
                />
              </div>
              <div>
                <label>Extra price:</label>
                <input
                  type="text"
                  placeholder="Extra price"
                  value={size.price}
                  className="bg-white"
                  onChange={(ev) => editProps(ev, index, "price")}
                />
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => removeProps(index)}
                  className="mb-5 px-3"
                >
                  <FaRegTrashAlt className="hover:text-red-500" />
                </button>
              </div>
            </div>
          ))}
      </div>
      <button
        type="button"
        onClick={addProps}
        className="bg-white rounded-lg py-1 items-center"
      >
        <FaPlus />
        <span>{addLabel}</span>
      </button>
    </div>
  );
}
