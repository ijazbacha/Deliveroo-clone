import React, { useLayoutEffect, useState } from "react";
import GlobalStyles from "../config/style/GlobalStyles";
import color from "../config/colors/color";
import { Image, SafeAreaView, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView style={GlobalStyles.AdroidSafeArea} className="bg-white">
      <StatusBar style="drak" backgroundColor={color.WHITE} />
      {/* ----------HEADER------------ */}
      <View className="flex-row justify-between items-center mx-4 pb-3 pt-3">
        <View className="flex-row  items-center space-x-2 ">
          <Image
            source={{
              uri: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
            }}
            className="w-8 h-8 bg-gray-300 rounded-full p-4"
          />
          <View>
            <Text className="text-xs font-bold text-gray-300 ">
              Deliver Now!
            </Text>
            <View className="flex-row items-center space-x-1">
              <Text className="font-bold text-lg">Current Location</Text>
              <ChevronDownIcon size={20} color={color.THEMECOLOR} />
            </View>
          </View>
        </View>
        <UserIcon size={34} color={color.THEMECOLOR} />
      </View>

      {/* ----------SEARCH------------ */}
      <View className="flex-row mx-4 pt-3 pb-3 space-x-2 items-center">
        <View className="flex-row space-x-2 items-center bg-gray-200 p-3 flex-1 rounded">
          <SearchIcon size={20} color={color.GRAY} />
          <TextInput placeholder="Restaurants" className="flex-1" />
        </View>
        <AdjustmentsIcon size={25} color={color.THEMECOLOR} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
