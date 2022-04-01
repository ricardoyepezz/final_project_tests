import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Favorites = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      {/*  <button type="button" className="btn btn-warning">
        Favorites{" "}
        <span className="badge bg-secondary">{store.favorites}</span>
      </button> */}

      <div className="btn-group">
        <button
          type="button"
          className="btn btn-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-display="static"
          aria-expanded="false"
        >
          Favorites
          <span className="badge bg-secondary">{store.favorites.length}</span>
        </button>
        <ul className="dropdown-menu dropdown-menu-lg-end">
          {store.favorites.map((item, index) => {
            return (
              <li key={index}>
                <button className="dropdown-item" type="button">
                  {item}
                </button>

                {/*------------------------------------------------------------------------------------------- falta */}
                <button className="btn btn-warning" onClick={() => { actions.removeFavorites(item) }}>X</button>

              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
