import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useContext, useState } from "react";
// import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { FlatList } from "react-native-gesture-handler";
import MealItem from "../components/MealsList/MealItem";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
export default function FavoriesScreen() {
  // const favoritMealContext = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoritesMeals.ids);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );
  const navigation = useNavigation();
  const renderCategoryItem = (itemData) => {
    const presshandler = () => {
      navigation.navigate("MealDetail", { mealId: itemData.item });
    };
    return (
      <Pressable onPress={presshandler}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 25,
          }}
        >
          <Image
            source={{ uri: itemData.item.imageUrl }}
            style={{ width: 250, height: 250, borderRadius: 25 }}
          />
          <Text style={styles.titleText}>{itemData.item.title}</Text>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{itemData.item.duration}m</Text>
            <Text style={styles.detailItem}>
              {itemData.item.complexity.toUpperCase()}
            </Text>
            <Text style={styles.detailItem}>
              {itemData.item.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <>
      {favoriteMeals.length === 0 ? (
        <View style={styles.warnMessage}>
          <Text style={styles.warnText}>No favorite meals</Text>
        </View>
      ) : (
        <View style={{ margin: 20 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={favoriteMeals}
            renderItem={renderCategoryItem}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    gap: 6,
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#ebebeb",
    borderRadius: 15,
    margin: 25,
  },
  detailItem: { fontSize: 14, fontWeight: "bold" },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
  },
  warnText: {
    fontSize: 24,
    backgroundColor: "gray",
    padding: 20,
    color: "white",
    fontWeight: "bold",
    borderRadius: 25,
  },
  warnMessage: { flex: 1, justifyContent: "center", alignItems: "center" },
});
