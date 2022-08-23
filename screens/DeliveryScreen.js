import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalStyles from "../config/style/GlobalStyles";
import { ShoppingBagIcon, XIcon } from "react-native-heroicons/solid";
import color from "../config/colors/color";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import MapView from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const [mixTime, setMixTime] = useState(45);
  const [minTime, setMinTime] = useState(50);
  const [timeValue, setTimeValue] = useState(null);

  useEffect(() => {
    console.log(`initializing interval`);
    if (mixTime == 0 || minTime == 0) {
      return;
    }
    const interval = setInterval(() => {
      calculateTime();
    }, 60000);

    return () => {
      console.log(`clearing interval`);
      clearInterval(interval);
    };
  }, [mixTime, minTime]);

  const calculateTime = () => {
    setMixTime((prev) => prev - 1);
    setMinTime((prev) => prev - 1);
  };

  return (
    <View className="flex-1 bg-[#b38823]">
      <SafeAreaView style={GlobalStyles.AdroidSafeArea} className="z-50">
        <View className="flex-row items-center p-5 justify-between">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XIcon width={22} color={color.WHITE} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>
        <View className="bg-white z-50 shadow-md p-5 rounded-md mx-5 my-2">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-gray-300 text-sm">Estimated Arrival</Text>
              <Text className="font-bold text-3xl text-black">
                {mixTime}-{minTime} Minutes
              </Text>
            </View>

            <View>
              <ShoppingBagIcon size={70} color={color.THEMECOLOR} />
            </View>
          </View>
          <Progress.Bar
            progress={0.3}
            width={200}
            indeterminate={true}
            color={color.THEMECOLOR}
          />
          <Text className="text-xs text-gray-300 pt-3">
            Your order at Nando's is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: 33.6844,
          longitude: 73.0479,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      ></MapView>
    </View>
  );
};

export default DeliveryScreen;
