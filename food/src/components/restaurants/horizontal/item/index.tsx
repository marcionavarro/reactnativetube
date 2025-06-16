import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, Text, View } from "react-native";
import { RestaurantsProps } from "../..";

export function RestaurantItem({ item }: { item: RestaurantsProps }) {
  return (
    <Pressable className="flex flex-row items-center justify-start gap-2 mx-6 mb-2">
      <Image source={{ uri: item.image }} className="w-20 h-20 rounded-full" />
      <View className="gap-2">
        <Text
          className="text-base text-black leading-4 font-bold"
          numberOfLines={2}
        >
          {item.name}
        </Text>

        <View className="flex flex-row gap-1 items-center">
          <Ionicons name="star" size={14} color="#CA8A04" />
          <Text className="text-sm">4.5</Text>
        </View>
      </View>
    </Pressable>
  );
}
