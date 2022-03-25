import React , {useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store.api?.result?.properties.name);
	return (
	<div className="text-center mt-5">
		
		<button className="btn btn-success" onClick={() => actions.loadSomeData()}>
								Load Some Data
							</button>
							<div>{store.api?.result?.properties.name}</div>
	</div>)
};
