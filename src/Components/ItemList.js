import React from "react";
// import { addItem } from "../Utils/cartSlice";
import { CDN_URL } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";

const ItemList = ({ items }) => {
  console.log("Inside ItemList");
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
    // Dispatch an action
    //    dispatch(addItem(item))
    //    dispatch(addItem, "Pizza")
  };

  console.log("Items: ", items);

  return (
    <div>
      {items.map((item) => {
        const { id, name, description, price, defaultPrice, imageId } =
          item.card.info;

        return (
          <div
            key={id}
            className="p-4 m-4 border-b border-gray-200 flex justify-between gap-4 hover:shadow-md rounded-xl transition-all bg-white"
          >
            {/* Left content */}
            <div className="w-7/12 flex flex-col justify-between">
              <div className="mb-2">
                <h3 className="text-lg font-semibold text-[#4A2B0F]">{name}</h3>
                <p className="text-sm text-gray-600 mt-1">{description}</p>
              </div>
              <span className="text-base font-medium text-gray-800">
                ₹{(defaultPrice ?? price) / 100}
              </span>
            </div>

            {/* Right content */}
            <div className="w-5/12 relative flex flex-col items-center">
              <img
                src={CDN_URL + imageId}
                alt={name}
                className="w-full h-28 object-cover rounded-lg shadow-sm"
              />
              <button
                className="absolute bottom-[-10px] px-4 py-1 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
