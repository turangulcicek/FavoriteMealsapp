import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function MealDetails({ itemData }) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{itemData.item.duration}m</Text>
      <Text style={styles.detailItem}>
        {itemData.item.complexity.toUpperCase()}
      </Text>
      <Text style={styles.detailItem}>
        {itemData.item.affordability.toUpperCase()}
      </Text>
    </View>
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
  },
  detailItem: { fontSize: 14, fontWeight: "bold" },
});
