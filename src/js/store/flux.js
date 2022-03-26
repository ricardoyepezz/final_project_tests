const getState = ({ getStore, getActions, setStore }) => {
  return {

// Store
    store: {
	  people: [],
	  peopleDetail: []
    },

//Actions
    actions: {
      
      getPeople : () => {

        fetch("https://www.swapi.tech/api/people/1")
          .then((res) => res.json())
          .then((data) => {setStore({people:data})})
          .catch((err) => console.error(err));
      },

      getPeopleDetail: () => {

        fetch(`https://www.swapi.tech/api/people/${id}`)
          .then((res) => res.json())
          .then((data) => {setStore({peopleDetail:data})})
          .catch((err) => console.error(err));
      }
    }
  }
}

export default getState;
