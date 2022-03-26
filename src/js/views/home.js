/* import React from "react";
import "../../styles/home.css";
import { ListCards } from "../component/listCards";

export const Home = () => {
  return (
    <>
      <ListCards />
    </>
  );
};


 */

import React , {useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	//console.log(store.api?.result?.properties.name);
	return (
	<div className="text-center mt-5">
		
		<button className="btn btn-success" onClick={() => actions.getPeople()}>
								Load Some Data
							</button>
							<div>{store.people?.result?.properties.name}</div>
	</div>)
};