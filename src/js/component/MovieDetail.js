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
    actions.getTitleDetail(id);
    console.log(store.titleDetail);
  }, []);
  return (
    <>
      <div className="mt-5 card text-white bg-dark border-warning border-4 w-75 container">
        <div className="card-body">
          <h1 className="card-title fw-bold">Name:{store.titleDetail.seriesEndYear}</h1>
          {/* <h5 className="card-text fst-italic">{store.peopleDetail?.result?.description}</h5>
          <p className="card-text fw-lighter">Height: {store.peopleDetail?.result?.properties.height}
          </p> */}

        </div>
      </div>
      
    </>
  );
};
