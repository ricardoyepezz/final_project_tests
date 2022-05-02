import React, { useContext } from "react";
import { useEffect } from "react";
import { Context } from "../store/appContext";
import { Loader } from "./Loader";

export const Movies = () => {
  const { store, actions } = useContext(Context);

  //useEffect para llamar función getPeople al renderizar el componente (fetch a objeto people)
  useEffect(() => {
    actions.getMovie();
  }, []);

  return (
    <>
      <h1 className="text-center fw-bold m-4">Movies</h1>
      <div className="container-fluid text-center row row-cols-1 row-cols-md-3 g-4">
        {/* operador ternario para renderizar Loader mientras cargan datos de la api */}
        {store.movies.d !== undefined ? (
          /* mapeo de objeto people para obtener todos los elementos del array */
          store.movies?.d?.map((element, index) => {
            return (
              <div key={index}>
                <div className="border border-3 border-warning col">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{element.l}</h5>
                      <p>Type:{element.q}</p>
                      <p>Rank:{element.rank}</p>
                      <p>Cast:{element.s}</p>
                      <p>Year:{element.y}</p>
                      <button
                        type="button"
                        className="btn btn-warning"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Details
                      </button>

                      <button
                        className="btn btn-success"
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
    </>
  );
};
