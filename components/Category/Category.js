import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

export default function Category() {
  const url =
    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80";
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: 10, paddingHorizontal: 15 }}
    >
      <CategoryCard imgUrl={url} title="Food" />
      <CategoryCard imgUrl={url} title="Food" />
      <CategoryCard imgUrl={url} title="Food" />
      <CategoryCard imgUrl={url} title="Food" />
      <CategoryCard imgUrl={url} title="Food" />
      <CategoryCard imgUrl={url} title="Food" />
    </ScrollView>
  );
}
