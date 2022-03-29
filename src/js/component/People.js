import React, { useContext } from "react";
import { useEffect } from "react";
import { Context } from "../store/appContext";
import { Loader } from "./Loader";
import { Link } from "react-router-dom";

export const People = () => {
  const { store, actions } = useContext(Context);

  //useEffect para llamar función getPeople al renderizar el componente (fetch a objeto people)
  useEffect(() => {
    actions.getPeople();
  }, []);

  return (
    <>
      <h1 className="text-center fw-bold m-4">People</h1>
      <div className="container-fluid text-center row row-cols-1 row-cols-md-3 g-4">
        {/* operador ternario para renderizar Loader mientras cargan datos de la api */}
        {store.people.results !== undefined ? (
          /* mapeo de objeto people para obtener todos los elementos del array */
          store.people?.results?.map((element, index) => {
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
                          to={"people/" + element.uid}
                        >
                          Detail
                        </Link>
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
    </>
  );
};
