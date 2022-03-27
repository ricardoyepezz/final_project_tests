import React from "react";

export const People = ( {data} ) => {
  console.log('data', data);
  return (
    <>
      <h1>People</h1>
      <h5 className="card-title">{data?.results?.properties.name}</h5>
      
    </>
  );
};
