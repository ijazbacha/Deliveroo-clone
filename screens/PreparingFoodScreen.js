import { View, Text } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import color from "../config/colors/color";

const PreparingFoodScreen = () => {
  return (
    <View className="bg-[#b38823] flex-1 justify-center items-center space-y-8">
      <Animatable.Image
        source={require("../assets/preparing-food.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color={color.WHITE} />
    </View>
  );
};

export default PreparingFoodScreen;
