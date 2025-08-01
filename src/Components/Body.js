import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {GET_RESTAURANTS_API} from '../Utils/constants'
const swiggyUrl = encodeURIComponent(
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
);
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestauarant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(GET_RESTAURANTS_API);
      const json = await response.json();
      const restList =
        json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      //    console.log(json.data.cards?.[6].card.card.gridElements.infoWithStyle.restaurants);
      setListOfRestaurant(restList);
      setFilteredRestauarant(restList);
    } catch (error) {
      console.log(error);
    }
  };

  //Conditional Rendering
  //  if(listOfRestuarant.length === 0){
  //     return
  //  }
  // listOfRestaurant.forEach(res =>{
  //   console.log(JSON.stringify(res, null, 2), "RES")
  // })

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>you are offline!!! please check your internetConnection</h1>;
  }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-center py-6">
        <div className="search flex items-center gap-0 bg-white p-2 rounded-xl shadow-sm">
          <input
            type="text"
            className="border border-gray-300 rounded-md rounded-r-none border-r-0 px-3 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-orange-300"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-3 py-2 bg-orange-500 text-white rounded-md rounded-l-none hover:bg-orange-600 transition"
            style={{ height: "42px" }}
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  ?.includes(searchText.toLowerCase())
              );
              setFilteredRestauarant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 px-6 py-8 bg-gray-50">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
