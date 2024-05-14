import { StyleSheet, Text, View, route, FlatList } from "react-native";

import React, { useLayoutEffect, useState } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealsList/MealItem";

export default function MealsOverviewScreen({ route, navigation }) {
  const [meals, setMeals] = useState();
  const catID = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catID
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [catID, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          return <MealItem itemData={itemData} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
