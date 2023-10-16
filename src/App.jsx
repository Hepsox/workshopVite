import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const personn = [
    {
      id: 1,
      img: "https://rozardi-communication.com/wp-content/uploads/2023/07/marie-delaire-rozardi.jpg",
      firstName: "Marie",
      description: "blablablabla",
    },
    {
      id: 2,
      img: "https://rozardi-communication.com/wp-content/uploads/2023/07/marie-delaire-rozardi.jpg",
      firstName: "Benoit",
      description: "tululululu",
    },

    {
      id: 3,
      img: "https://rozardi-communication.com/wp-content/uploads/2023/07/marie-delaire-rozardi.jpg",
      firstName: "David",
      description: "tululululu",
    },
  ];

  return (
    <div>
      {personn.map((element) => (
        <Card
          nom={element.firstName}
          descriptionPersonne={element.description}
        />
      ))}
    </div>
  );
}
export default App;
