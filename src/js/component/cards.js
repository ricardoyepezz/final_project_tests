import React, {useContext}  from "react";
import { Context } from "../store/appContext";


export const Cards = (props) => {
  const {store,actions} = useContext(Context);
  
   
  return (
    <>
      <div className="card" style="width: 18rem;">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.data?.result?.properties.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Gender: {props.data.gender}</li>
          <li className="list-group-item">
            Hair Color: {props.data.hair_color}
          </li>
          <li className="list-group-item">Eye-Color: {props.data.eye_color}</li>
        </ul>
      </div>
    </>
  );
};
