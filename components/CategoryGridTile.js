import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
  ImageBackground,
} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function CategoryGridTile({ title, color, onPress, img }) {
  return (
    <View style={[styles.outerContainer]}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <ImageBackground
          style={[{ backgroundColor: color }, styles.container]}
          source={{
            uri: img,
          }}
        ></ImageBackground>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    overflow: Platform.OS === "android" && "hidden",
    elevation: 4,
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  button: { flex: 1 },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
    textAlign: "center",
  },
  titleContainer: {
    backgroundColor: "#ebebeb",
    paddingVertical: 2,
  },
});
