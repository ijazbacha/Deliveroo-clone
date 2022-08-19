import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useMemo, useState } from "react";
import GlobalStyles from "../config/style/GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../redux/feature/restaurantSlice";
import { ChevronDownIcon } from "react-native-heroicons/solid";
import color from "../config/colors/color";
import Currency from "react-currency-formatter";
import { removeFromBasket } from "../redux/feature/basketSlice";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const basketItems = useSelector((state) => state.basket.item);
  const dispatch = useDispatch();
  const [basketGroupItem, setBasketGroupItem] = useState([]);
  const totalPrice = useSelector((state) =>
    state.basket.item.reduce((total, item) => (total += item.price), 0)
  );

  useMemo(() => {
    const groupedItem = basketItems.reduce((result, item) => {
      (result[item.id] = result[item.id] || []).push(item);
      return result;
    }, {});
    setBasketGroupItem(groupedItem);
  }, [basketItems]);

  console.log("basketItems", basketGroupItem);
  return (
    <SafeAreaView
      style={GlobalStyles.AdroidSafeArea}
      className="bg-gray-100 flex-1"
    >
      <View className="flex-row bg-white p-4 items-center justify-center border-b border-[#b38823] shadow-sm rounded-t-3xl">
        <View className="flex-1 items-center justify-center">
          <Text className="text-lg font-bold ">Basket</Text>
          <Text className="text-gray-400">{restaurant.title}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="rounded-full bg-[#b38823] p-2"
        >
          <ChevronDownIcon size={30} color={color.WHITE} />
        </TouchableOpacity>
      </View>

      <View className="px-4 py-3 flex-row items-center space-x-2 my-5 bg-white">
        <Image
          source={{
            uri: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
          }}
          className="w-8 h-8 bg-gray-300 rounded-full p-4"
        />
        <Text className="flex-1">Deliver in 50-70 min</Text>
        <TouchableOpacity>
          <Text className="text-[#b38823]">Change</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="divide-y divide-gray-300">
        {Object.entries(basketGroupItem).map(([key, items]) => (
          <View
            key={key}
            className="flex-row px-4 py-3 bg-white items-center space-x-3"
          >
            <Text className="text-[#b38823]">{items.length} x</Text>
            <Image
              source={{
                uri: items[0]?.imageUrl,
              }}
              className="w-12 h-12 bg-gray-300 rounded-full p-4"
            />
            <Text className="flex-1">{items[0]?.title}</Text>
            <Text className="text-gray-500 text-xs">
              <Currency
                quantity={items[0]?.price * items.length}
                currency="USD"
              />
            </Text>
            <TouchableOpacity
              onPress={() => dispatch(removeFromBasket({ id: key }))}
            >
              <Text className="text-[#b38823]">Remove</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View className="bg-white p-4">
        <View className="flex-row  items-center justify-between space-y-4">
          <Text className="text-gray-500">Subtotal</Text>
          <Text className="text-gray-500">
            <Currency quantity={totalPrice} currency="USD" />
          </Text>
        </View>

        <View className="flex-row items-center justify-between space-y-4">
          <Text className="text-gray-500">Delivery Fee</Text>
          <Text className="text-gray-500">
            <Currency quantity={10} currency="USD" />
          </Text>
        </View>

        <View className="flex-row items-center justify-between space-y-4">
          <Text className="text-gray-500">Order total</Text>
          <Text className="font-extrabold">
            <Currency quantity={totalPrice + 10} currency="USD" />
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('PreparingFood')} className="bg-[#b38823] p-4 justify-center items-center rounded-lg mt-3">
          <Text className="font-bold text-white text-lg">Place Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
