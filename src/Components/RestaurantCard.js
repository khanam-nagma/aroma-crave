import { CDN_URL } from "../Utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  // console.log(resData)
  // const {cloudinaryImageId} = resData?.info
  return (
    <div className="m-4 p-4 w-[250px] bg-white hover:shadow-lg transition-shadow duration-200 rounded-xl border border-gray-100">
      <img
        className="rounded-lg w-full h-[150px] object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-lg text-gray-800 mt-4 truncate">{name}</h3>
      <p className="text-sm text-gray-600 mt-1 truncate">
        {cuisines.join(", ")}
      </p>
      <div className="flex items-center justify-between text-sm text-gray-600 mt-2">
        <span className="font-medium text-green-600">{avgRating} ⭐</span>
        <span>{costForTwo}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
