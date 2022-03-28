import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Loader } from "./Loader";
import { Link } from "react-router-dom";

export const Planets = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getPlanets();
  }, []);

  return (
    <>
      <h1 className="text-center">Planets</h1>
      <div className="text-center row row-cols-1 row-cols-md-3 g-4">
        {store.planets.results !== undefined ? (
          store.planets?.results?.map((element, index) => {
            return (
              <div key={index}>
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{element.name}</h5>
                      <p className="card-text">{element.url}</p>
                      <Link className="btn-dark" variant="outline-primary" to = {'planets/' + index}>                    
                                Detail
                            </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <Loader />
        )}
      </div>
      )
    </>
  );
};
