import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Loader } from "./Loader";


export const Planets = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getPlanets();
  }, []);
  console.log("planetsTesting", store.planets.results);

  return (
    <>
      <h1 className="text-center">Planets</h1>
      {store.planets.results !== undefined ? (
        store.planets?.results?.map((element, index) => {
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
