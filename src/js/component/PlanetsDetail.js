import React from "react";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const PlanetsDetail = () => {
  const { store, actions } = useContext(Context);
  //importante importar useParams desde react-router-dom
  const { id } = useParams();

  useEffect(() => {
    //ejecutamos funcion getPeopleDetail con la id proveniente del componente people
    actions.getPlanetsDetail(id);
  }, []);
  return (
    <>
      <div className="mt-5 card text-white bg-dark border-warning border-4 w-75 container">
        <div className="card-body">
          <h1 className="card-title fw-bold">{store.planetsDetail?.result?.properties.name}</h1>
          <h5 className="card-text fst-italic">{store.planetsDetail?.result?.description}</h5>
          <p className="card-text fw-lighter">Diameter: {store.planetsDetail?.result?.properties.diameter}
          </p>
          <p className="card-text fw-lighter">Rotation Period: {store.planetsDetail?.result?.properties.rotation_period}
          </p>
          <p className="card-text fw-lighter">Orbital Period: {store.planetsDetail?.result?.properties.orbital_period}
          </p>
          <p className="card-text fw-lighter">Gravity: {store.planetsDetail?.result?.properties.gravity}
          </p>
          <p className="card-text fw-lighter">Population: {store.planetsDetail?.result?.properties.population}
          </p>
          <p className="card-text fw-lighter">Climate: {store.planetsDetail?.result?.properties.climate}
          </p>
          <p className="card-text fw-lighter">Terrain: {store.planetsDetail?.result?.properties.terrain}
          </p>
          <p className="card-text fw-lighter">Surface Water: {store.planetsDetail?.result?.properties.surface_water}
          </p>
        </div>
      </div>
      
    </>
  );
};
