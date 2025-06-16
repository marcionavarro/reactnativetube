import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { RestaurantsItem } from "./horizontal";

export interface RestaurantsProps {
  id: string;
  name: string;
  image: string;
}

export function Restaurants() {
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
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantsItem item={item} />}
        horizontal={true}
        contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
        showsHorizontalScrollIndicator={false}
      />
    );
}
