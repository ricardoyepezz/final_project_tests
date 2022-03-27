import React from 'react'

export const Planets = ({data}) => {
    console.log(data);
    return (
    <>
    <h1>Planets</h1>
    <div className="container">
      {data.map((planets, index) => {
        return (
          <div key={index} className="card" style="width: 18rem;">
            <div className="card-body">
              <h5 className="card-title">{planets?.name}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </>
);
};
