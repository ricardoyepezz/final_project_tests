const getState = ({ getStore, getActions, setStore }) => {
  return {
    // Store - se declara estado de objetos people y planets vacios
    store: {
      people: {},
      planets: {},
      peopleDetail: {},
      planetsDetail: {},
      favorites: [],
    },

    //Actions - funciones fetch para personas y planetas en donde actualizamos el estado de people y planets
    actions: {
      getPeople: () => {
        fetch("https://www.swapi.tech/api/people/")
          .then((res) => res.json())
          // actualizamos estado de store.people en donde obtenemos que data (proveniente de la api) se cargará en el objeto people
          .then((data) => {
            setStore({ people: data });
          })
          .catch((err) => console.error(err));
      },

      getPeopleDetail: (id) => {
        fetch(`https://www.swapi.tech/api/people/${id}`)
          .then((res) => res.json())
          // actualizamos estado de store.people en donde obtenemos que data (proveniente de la api) se cargará en el objeto peopleDetail
          .then((data) => {
            setStore({ peopleDetail: data });
          })
          .catch((err) => console.error(err));
      },

      getPlanets: () => {
        fetch("https://www.swapi.tech/api/planets/")
          .then((res) => res.json())
          // actualizamos estado de store.planets en donde obtenemos que data (proveniente de la api) se cargará en el objeto planets
          .then((data) => {
            setStore({ planets: data });
          })
          .catch((err) => console.error(err));
      },

      getPlanetsDetail: (id) => {
        fetch(`https://www.swapi.tech/api/planets/${id}`)
          .then((res) => res.json())
          // actualizamos estado de store.people en donde obtenemos que data (proveniente de la api) se cargará en el objeto planetsDetail
          .then((data) => {
            setStore({ planetsDetail: data });
          })
          .catch((err) => console.error(err));
      },

      //items se repiten
      /* const {favorites} = getStore();
      favorites.some(item => item === newFavorite)
      setStore(favorites.push(newFavorite) )
    } */

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
