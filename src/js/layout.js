import React, {useState,useEffect} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";
import { Home } from "./views/home";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { People } from "./component/People";
import { Planets } from "./component/Planets";
import { Loader } from "./component/Loader";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const [people, setPeople] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() =>{
		async function fetchPeople () {
			let res = await fetch ("https://www.swapi.tech/api/people/");
			let data = await res.json();
			setPeople(data.results)
			setLoading(false)
		}

		async function fetchPlanets () {
			let res = await fetch ("https://www.swapi.tech/api/planets/");
			let data = await res.json();
			setPlanets(data.result)
			setLoading(false)
			}

		fetchPeople();
		fetchPlanets();
		
	},[])
console.log("peoplelayout", people);
	return (
		<div>
			<BrowserRouter basename={basename}>
				
					<Navbar />
					{loading? (<Loader>Loading...</Loader>) : 
					(<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/people">
						<People data={people}/>
					</Route>
					<Route exact path="/planets">
						<Planets data={planets}/>
					</Route>
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
					
				) }
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
