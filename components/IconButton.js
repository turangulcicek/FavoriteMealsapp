import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
export default function IconButton({ onPress, color, icon }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <AntDesign name={icon} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: { opacity: 0.5 },
});
