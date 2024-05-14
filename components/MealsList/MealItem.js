import {
  StyleSheet,
  Text,
  View,
  Image,
  ScroolView,
  Pressable,
  Platform,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

export default function MealItem({ itemData }) {
  const navigation = useNavigation();

  return (
    <View style={styles.outerContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => pressed && styles.buttonPressed}
        onPress={() =>
          navigation.navigate("MealDetail", { mealId: itemData.item })
        }
      >
        <View>
          <Image
            source={{ uri: itemData.item.imageUrl }}
            style={styles.image}
          />
          <Text style={styles.titleText}>{itemData.item.title}</Text>
        </View>
        <MealDetails itemData={itemData} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" && "hidden",
    backgroundColor: "white",
    elevation: 5,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
  },

  image: { width: "100%", height: 200, borderRadius: 8 },
  ingredientContainer: {},

  buttonPressed: {
    opacity: 0.8,
  },
});
