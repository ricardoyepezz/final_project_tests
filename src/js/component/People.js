import React, { useContext } from "react";
import { useEffect } from "react";
import { Context } from "../store/appContext";
import { Loader } from "./Loader";

export const People = () => {
  const { store, actions } = useContext(Context);

//useEffect para llamar función getPeople al renderizar el componente (fetch a objeto people)
  useEffect(() => {
    actions.getPeople();
  }, []);
  console.log("peopleTesting", store.people.results);

  return (
    <>
      <h1 className="text-center">People</h1>
	  {/* operador ternario para renderizar Loader mientras cargan datos de la api */}
      {store.people.results !== undefined ? (
		  /* mapeo de objeto people para obtener todos los elementos del array */
        store.people?.results?.map((element, index) => {
          return (
            <div key={index}>
              <p>{element.name}</p>
              <p>{element.url}</p>
            </div>
          );
        })
      ) : (
        <Loader />
      )}
      )
    </>
  );
};
