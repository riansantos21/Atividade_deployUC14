import React from "react";
import Button1 from "./Button1";

function Card({ img, title, desc }) {
  return (
    <div className="card">
      <img src={img} alt={title} />

      <h3>{title}</h3>
      <p>{desc}</p>

      <Button1 text="Saiba mais" />
    
    </div>

  );
}

export default Card;