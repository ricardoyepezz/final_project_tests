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
      <h1 className="text-center fw-bold m-4">Planets</h1>
      <div className="container-fluid text-center row row-cols-1 row-cols-md-3 g-4">
        {store.planets.results !== undefined ? (
          store.planets?.results?.map((element, index) => {
            return (
              <div key={index}>
                <div className="border border-3 border-warning col">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{element.name}</h5>
                      <p className="card-text">{element.url}</p>
                      <button className="btn btn-warning">
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          variant="outline-primary"
                          to={"planets/" + element.uid}
                        >
                          Detail
                        </Link>
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={() => {
                          actions.addFavorites(element.name);
                        }}
                      >
                        +
                      </button>
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
