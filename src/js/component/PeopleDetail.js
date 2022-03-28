import React from 'react'
import { useEffect, useContext } from 'react'
import { Context } from '../store/appContext'
import { useParams } from 'react-router-dom'

export const PeopleDetail = () => {
    const {store,actions} = useContext(Context);
    //importante importar useParams desde react-router-dom
    const {id} =useParams();
    
    useEffect(()=>{
        //ejecutamos funcion getPeopleDetail con la id proveniente del componente people
        actions.getPeopleDetail(id)
    },[])
    console.log("testpeople");
  return (
    <div>Mass:{store.peopleDetail?.result?.properties.mass}</div>
  )
}
