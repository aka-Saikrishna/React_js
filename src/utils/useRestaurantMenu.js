import { useEffect, useState } from "react"
import { MENU_API_URL } from "./constant.js"

const useRestaurantMenu = (resId) => {
    const [restaurantInfo, setRestaurantInfo] = useState(null)

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async  () => {
        const data = await fetch(MENU_API_URL + resId)
        const json = await data.json()
        setRestaurantInfo(json.data)
    }

  return restaurantInfo
}

export default useRestaurantMenu