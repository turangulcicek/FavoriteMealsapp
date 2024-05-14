import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  id: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);
  function addFavorite(id) {
    setFavoriteMealIds(
      /* (currentFavIds) => [...currentFavIds, id]  diğer  yöntem*/
      [...favoriteMealIds, id]
    );
  }
  function removeFavorite(id) {
    // setFavoriteMealIds((currenFavIds)=> currenFavIds.filter((mealId)=> mealId!==id))

    const filtered = favoriteMealIds.filter((mealId) => mealId !== id);
    setFavoriteMealIds(filtered);
  }

  const value = {
    id: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
