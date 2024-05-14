import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
} from "react-native";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "../components/IconButton";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
import { MEALS } from "../data/dummy-data";

// import { FavoritesContext } from "../store/context/favorites-context";

export default function MealDetailScreen({ route, navigation }) {
  // const favoritMealContext = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoritesMeals.ids);
  const mealisLiked = useSelector((state) => state.favoritesMeals.isliked);
  const meal = route.params.mealId;
  const dispatch = useDispatch();

  const [liked, setLiked] = useState(false);

  const changeFavoriteStatusHandler = () => {
    setLiked(!liked);
    if (liked) {
      dispatch(removeFavorite(meal.id));
      // favoritMealContext.removeFavorite(meal.id);
    } else {
      // favoritMealContext.addFavorite(meal.id);
      dispatch(addFavorite(meal.id));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={!liked ? "staro" : "star"}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [changeFavoriteStatusHandler, navigation]);

  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.container}>
        <Image source={{ uri: meal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{meal.title}</Text>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={meal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 24,
  },
  container: {
    flex: 1,
    gap: 20,
    alignItems: "center",
  },
  ingredients: {},
  image: { width: "100%", height: 350 },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  listContainer: {
    maxWidth: "80%",
  },
});
