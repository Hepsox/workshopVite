import React, { useState } from "react";

const Card = ({ photoProfil, nom, descriptionPersonne }) => {
  const [statu, setStatu] = useState(false);
  console.log(statu);

  return (
    <div>
      <img src={photoProfil} />
      <h1> {nom}</h1>
      <p>{descriptionPersonne} </p>
      <button
        onClick={() => {
          setStatu(!statu);
        }}
        className={statu == true ? "true-class" : "false-class"}
      ></button>
    </div>
  );
};

export default Card;
