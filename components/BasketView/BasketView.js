import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Currency from "react-currency-formatter";
import color from "../../config/colors/color";
import { useNavigation } from "@react-navigation/native";

const BasketView = () => {
  const navigation = useNavigation();
  const basketItems = useSelector((state) => state.basket.item);
  const totalPrice = useSelector((state) =>
    state.basket.item.reduce((total, item) => (total += item.price), 0)
  );
  return (
    <View className="absolute bottom-10 z-10 w-full ">
      <TouchableOpacity
        activeOpacity={0.5}
        className='bg-["#b38823"] mx-3 rounded flex-row p-4 items-center space-x-1 justify-between'
      >
        <Text className="text-white font-bold">{basketItems.length}</Text>
        <Text className="text-white font-bold">View Basket</Text>
        <Text className="text-white font-extrabold text-lg">
          <Currency quantity={totalPrice} currency="USD" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketView;
