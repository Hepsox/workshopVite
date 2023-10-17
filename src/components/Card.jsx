import { useState } from "react";

const Card = ({
  imgProfil,
  nomProfil,
  descriptionProfil,
  status,
  setStatus,
}) => {
  return (
    <div className="card">
      <img src={imgProfil} />
      <h1>{nomProfil}</h1>
      <div className="texte">
        <p>{descriptionProfil}</p>
      </div>
      <i
        onClick={() => {
          setStatus(!status);
        }}
        className={status == true ? "fa-solid fa-heart" : "fa-regular fa-heart"}
      ></i>
    </div>
  );
};

export default Card;
