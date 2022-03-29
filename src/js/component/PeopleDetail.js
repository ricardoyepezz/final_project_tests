import React from "react";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const PeopleDetail = () => {
  const { store, actions } = useContext(Context);
  //importante importar useParams desde react-router-dom
  const { id } = useParams();

  useEffect(() => {
    //ejecutamos funcion getPeopleDetail con la id proveniente del componente people
    actions.getPeopleDetail(id);
  }, []);
  return (
    <>
      <div className="mt-5 card text-white bg-dark border-warning border-4 w-75 container">
        <div className="card-body">
          <h1 className="card-title fw-bold">{store.peopleDetail?.result?.properties.name}</h1>
          <h5 className="card-text fst-italic">{store.peopleDetail?.result?.description}</h5>
          <p className="card-text fw-lighter">Height: {store.peopleDetail?.result?.properties.height}
          </p>
          <p className="card-text fw-lighter">Mass: {store.peopleDetail?.result?.properties.mass}
          </p>
          <p className="card-text fw-lighter">Hair Color: {store.peopleDetail?.result?.properties.hair_color}
          </p>
          <p className="card-text fw-lighter">Skin Color: {store.peopleDetail?.result?.properties.skin_color}
          </p>
          <p className="card-text fw-lighter">Eye Color: {store.peopleDetail?.result?.properties.eye_color}
          </p>
          <p className="card-text fw-lighter">Birth Year: {store.peopleDetail?.result?.properties.birth_year}
          </p>
          <p className="card-text fw-lighter">Gender: {store.peopleDetail?.result?.properties.gender}
          </p>
        </div>
      </div>
      
    </>
  );
};
