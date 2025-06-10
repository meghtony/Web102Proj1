import React from "react";

function Card(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p><strong>Date:</strong> {props.date}</p>
      <p><strong>Location:</strong> {props.location}</p>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;