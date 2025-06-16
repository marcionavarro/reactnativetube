import { useEffect, useState } from "react";
import { View } from "react-native";
import { RestaurantsProps } from "../restaurants";
import { RestaurantItem } from "../restaurants/horizontal/item";

export function RestaurantVerticalList() {
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([]);

  async function getRestaurantes() {
    const response = await fetch("http://192.168.100.114:3000/restaurants");
    const data = await response.json();
    setRestaurants(data);
  }

  useEffect(() => {
    getRestaurantes();
  }, []);

  return (
    <View>
      {restaurants.map((item) => (
        <RestaurantItem key={item.id} item={item} />
      ))}
    </View>
  );
}
