import React, { useLayoutEffect } from "react";
import GlobalStyles from "../config/style/GlobalStyles";
import color from "../config/colors/color";
import { Image, SafeAreaView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
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
    <SafeAreaView style={GlobalStyles.AdroidSafeArea}>
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
    </SafeAreaView>
  );
};

export default HomeScreen;
