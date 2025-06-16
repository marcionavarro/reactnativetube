import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { CardHorizontal } from "./food";

export interface FoodProps {
  id: string;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  restaurantId: string;
}

export function TrendingFoods() {
  const [foods, setFoods] = useState<FoodProps[]>([]);

  async function getFoods() {
    const response = await fetch("http://192.168.100.114:3000/foods");
    const data = await response.json();
    setFoods(data);
  }

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <FlatList
      data={foods}
      renderItem={({ item }) => <CardHorizontal food={item} />}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
