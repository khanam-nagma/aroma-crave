import { useEffect, useState } from "react"
import { GET_RESTAURANTS_API } from "./constants";

const useRestaurantMenu = (resId) => {
const [resInfo, setResInfo] = useState(null);

useEffect(() => {
   fetchData();
},[])

const fetchData = async() =>{
  console.log("calling fetch data...")
  const data = await fetch(`${GET_RESTAURANTS_API}/${resId}`);
  const json = await data.json();
  setResInfo(json.data);
}
return resInfo;

}

export default useRestaurantMenu