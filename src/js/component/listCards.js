import React , {useContext , Component} from "react";
import { Context } from "../store/appContext";
import { Cards } from "./cards";

export const ListCards = () => {
    const { store, actions } = useContext(Context);
    console.log(store.people?.result?.properties.name);
    return (
        <>
            { ()=>actions.getPeople() }
            { store.people.map( (element, index)=>( <Cards key={index} id={++index} data={element}/> )) }
        </>
    )
};