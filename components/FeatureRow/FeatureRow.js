import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import color from "../../config/colors/color";
import RestaurantCard from "./RestaurantCard";

const FeatureRow = ({ title, description }) => {
  const url =
    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80";
  return (
    <View>
      <View className="mt-4 mx-4 pb-4">
        <View className="flex-row items-center justify-between">
          <Text className="font-bold text-xl">{title}</Text>
          <ArrowRightIcon color={color.THEMECOLOR} size={22} />
        </View>
        <Text className="text-xs text-gray-500">{description}</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 10 }}
          className="pt-4"
        >
          <RestaurantCard
            id="1"
            imageUrl={url}
            title="Yo! Sushi"
            rating={4.5}
            genre="Japanese"
            address="123 Main st"
            short_description="This is a test description"
            dishes={[]}
            long={20}
            lat={0}
          />
          <RestaurantCard
            id="1"
            imageUrl={url}
            title="Yo! Sushi"
            rating={4.5}
            genre="Japanese"
            address="123 Main st"
            short_description="This is a test description"
            dishes={[]}
            long={20}
            lat={0}
          />
          <RestaurantCard
            id="1"
            imageUrl={url}
            title="Yo! Sushi"
            rating={4.5}
            genre="Japanese"
            address="123 Main st"
            short_description="This is a test description"
            dishes={[]}
            long={20}
            lat={0}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default FeatureRow;
