import { useEffect, useState } from "react"
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
const [resInfo, setResInfo] = useState(null);

useEffect(() => {
   fetchData();
},[])

const fetchData = async() =>{
  console.log("calling fetch data...")
  const URL = MENU_API.replace("REST_ID",resId);
  const data = await fetch(URL);
  const json = await data.json();
  console.log(json.data,'DATATATATA')
  setResInfo(json.data);
}
return resInfo;

}

export default useRestaurantMenu