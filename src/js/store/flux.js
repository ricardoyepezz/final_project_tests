const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      movies: {},
      favorites: [],
    },

    actions: {
      getMovie: () => {
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
            "X-RapidAPI-Key":
              "3c91f52817mshe83652089b6833bp1c7fd7jsn17367545b901",
          },
        };

        fetch(
          "https://online-movie-database.p.rapidapi.com/auto-complete?q=game",
          options
        )
          .then((res) => res.json())
          .then((data) => {
            setStore({ movies: data });
          })
          .catch((err) => console.error(err));

        },

      addFavorites: (newFavorite) => {
        const { favorites } = getStore();
        const fav = favorites.some((item) => item === newFavorite);
        if (fav === true) {
          return;
        } else {
          setStore(favorites.push(newFavorite));
        }
      },

      removeFavorites: (index) => {
        const { favorites } = getStore();
        favorites.splice(index, 1);
        setStore(...favorites);
      },
    },
  };
};

export default getState;
