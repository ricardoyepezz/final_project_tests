import React, {useContext}  from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Context } from "../store/appContext";

export const CardDetail = (props) => {
    const {store, actions} = useContext(Context);
    const {id} = useParams();
    useEffect (() => {
        actions.getPeopleDetail(id);
    }, [])
    console.log('---Store---', store.peopleDetail)
  
  return (
    <>
    
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{store.peopleDetail.name}</td>
      <td>{store.peopleDetail.gender}</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </>
  )}





