import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  ArrowNarrowLeftIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import color from "../config/colors/color";
import { useNavigation } from "@react-navigation/native";
import DishRow from "../components/DishRow/DishRow";
import BasketButton from "../components/BasketButton/BasketButton";
import { useSelector } from "react-redux";

const RestaurantScreen = ({ route }) => {
  const { imageUrl, title, rating } = route.params;
  const navigation = useNavigation();
  const basketItems = useSelector((state) => state.basket.item);
  console.log("basketItems", basketItems.length);
  return (
    <>
    {basketItems?.length == 0 ? null : <BasketButton />}
   
    <ScrollView>
      <View className="bg-white">
        <View className="relative">
          <Image
            source={{ uri: imageUrl }}
            className="w-full h-64 bg-gray-500 p-4"
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-12 left-5 bg-white rounded-full p-2"
          >
            <ArrowNarrowLeftIcon size={22} color={color.THEMECOLOR} />
          </TouchableOpacity>
        </View>

        <View className="px-4 my-3">
          <Text className="font-bold text-3xl py-1">{title}</Text>
          <View className="flex-row space-x-2">
            <View className="flex-row items-center space-x-1">
              <StarIcon color={"green"} size={22} opacity={0.5} />
              <Text className="text-gray-500">
                <Text className="text-green-600">{rating} .</Text> Offers
              </Text>
            </View>

            <View className="flex-row items-center space-x-1">
              <LocationMarkerIcon color={"gray"} size={22} opacity={0.4} />
              <Text className="text-gray-500 text-xs">
                Nearby . Waterloo Street
              </Text>
            </View>
          </View>
          <Text className="py-2 text-gray-500 text-xs">
            Nando's is a south african multinational fast casual chain that
            specialises in flame-grilled peri-peri style chicken
          </Text>
        </View>
        <TouchableOpacity className="flex-row items-center p-4 border-y border-gray-300 space-x-2">
          <QuestionMarkCircleIcon color={"gray"} size={22} />
          <Text className="flex-1 font-bold">Have a food allergy?</Text>
          <ChevronRightIcon color={color.THEMECOLOR} />
        </TouchableOpacity>
      </View>

      {/* ----------DISHES----------- */}
      <View className='pb-32'>
        <Text className='font-bold p-4 mt-4 text-xl'>Menu</Text>
      <DishRow id={1} imageUrl={imageUrl} title={title} />
      <DishRow id={2} imageUrl={imageUrl} title={title} />
      <DishRow id={3} imageUrl={imageUrl} title={title} />
      </View>
      
    </ScrollView>
    </>
    
  );
};

export default RestaurantScreen;
