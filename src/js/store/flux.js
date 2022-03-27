const getState = ({ getStore, getActions, setStore }) => {
  return {
    
    // Store - se declara estado de objetos people y planets vacios 
    store: {
	  people: {},
	  planets: {},
    },
    
    //Actions - funciones fetch para personas y planetas en donde actualizamos el estado de people y planets
    actions: {

      getPeople : () => {
        fetch('https://www.swapi.tech/api/people/')
        .then((res) => res.json())
        // actualizamos estado de store.people en donde obtenemos que data (proveniente de la api) se cargará en el objeto people
        .then((data) => {setStore({people:data})})
        .catch((err) => console.error(err));
			
      },

      getPlanets: () => {

        fetch('https://www.swapi.tech/api/planets/')
          .then((res) => res.json())
        // actualizamos estado de store.planets en donde obtenemos que data (proveniente de la api) se cargará en el objeto planets
          .then((data) => {setStore({planets:data})})
          .catch((err) => console.error(err));
          

      }
    }
  }
}

export default getState;
