import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import color from "../../config/colors/color";
import { LocationMarkerIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
  id,
  imageUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Restaurant', {imageUrl,
      title,
      rating,})} className="rounded bg-white shadow-md mr-3 mb-2">
      <Image source={{ uri: imageUrl }} className="h-36 w-60 rounded" />
      <View className="px-3 pb-4">
        <Text className="pt-2 font-bold text-lg">{title}</Text>
        <View className="flex-row space-x-1 items-center">
          <StarIcon color={"green"} opacity={0.5} size={22} />
          <Text className="text-gray-500">
            <Text className="text-green-600">{rating} .</Text> Offers
          </Text>
        </View>
        <View className="flex-row space-x-1 items-center">
          <LocationMarkerIcon color={"green"} opacity={0.5} size={22} />
          <Text className="text-gray-500 text-xs">
            Nearby . Waterloo Street
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
