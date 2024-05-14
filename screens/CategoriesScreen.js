import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

export default function CategoriesScreen({ navigation }) {
  const renderCategoryItem = (itemData) => {
    const presshandler = () => {
      navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
    };
    return (
      <CategoryGridTile
        title={itemData.item.title}
        onPress={presshandler}
        img={itemData.item.img}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={renderCategoryItem}
    ></FlatList>
  );
}

const styles = StyleSheet.create({});
