import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import color from "../../config/colors/color";
import { useSelector, useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../../redux/feature/basketSlice";

const DishRow = ({ id, imageUrl, title }) => {
  const [isPressed, setIsPressed] = useState(false);
  const basketItem = useSelector((state) =>
    state.basket.item.filter((item) => item.id == id)
  );
  const dispatch = useDispatch();

  const addBasketHandler = () => {
    dispatch(addToBasket({ id, imageUrl, title }));
  };

  const removeBasketHandler = () => {
    if (!basketItem.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white p-4 flex-row border-gray-300 border ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="space-y-1 pr-3 flex-1">
          <Text className="font-medium">{title}</Text>
          <Text className="text-gray-500 text-xs">
            Nando's is a south african multinational fast casual chain that
            specialises
          </Text>
          <Text className="text-gray-500 text-xs">
            <Currency quantity={45685} currency="USD" />
          </Text>
        </View>
        <View>
          <Image source={{ uri: imageUrl }} className="h-20 w-20" />
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white p-4">
          <View className="flex-row space-x-2 items-center">
            <TouchableOpacity
              onPress={removeBasketHandler}
              disabled={basketItem.length > 0 ? false : true}
            >
              <MinusCircleIcon
                color={basketItem.length > 0 ? color.THEMECOLOR : color.GRAY}
                size={28}
              />
            </TouchableOpacity>

            <Text>{basketItem.length}</Text>

            <TouchableOpacity onPress={addBasketHandler}>
              <PlusCircleIcon color={color.THEMECOLOR} size={28} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
