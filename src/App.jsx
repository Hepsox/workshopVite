import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Nav from "./components/Nav";

function App() {
  const personn = [
    {
      id: 1,
      img: "https://media.senscritique.com/media/000021482904/300/did_you_know_that_theres_a_tunnel_under_ocean_blvd.png",
      firstName: "Lana Del Rey",
      description:
        "Depuis 2012, Lana Del Rey s’est inscrite comme une figure incontournable de la scène musicale américaine. Avec plus de 32 millions d’albums vendus, dont 8 millions en physique, elle totalise 40 milliards de streams. Elle est de retour avec son neuvième album studio “Did you know that there's a tunnel under Ocean Blvd ” dont elle signe encore une fois l’intégralité des textes.",
    },
    {
      id: 2,
      img: "https://media.senscritique.com/media/000021064035/300/desire_i_want_to_turn_into_you.jpg",
      firstName: "Caroline Polachek",
      description:
        "Caroline Elizabeth Polachek est née le 20 juin 1985 à New York. Elle est une autrice-compositrice-interprète de pop. Elle s’est d’abord fait connaître au sein de Chairlift qu’elle a fondé avec Aaron Pfenning en 2005 alors qu’elle étudia à l’université. Par la suite, elle a continué le groupe avec Patrick Wembley jusqu’en 2017. Après Chairlift, elle a lancé sa carrière solo sous son nom de naissance.",
    },

    {
      id: 3,
      img: "https://media.senscritique.com/media/000021477884/300/utopia.jpg",
      firstName: "Travis Scott",
      description:
        "Travis Scott est un rappeur né le 30 avril 1992 à Houston. Ayant débuté en 2013 avec la mixtape Owl Pharaoh, il a sorti son premier album Rodeo en 2015, et s’est vite placé dans le top 20 américain avec son single Antidote. Protégé de Kanye West, il collabore avec les artistes les plus connus du moment, et semble parti pour connaître une longue carrière prolifique.",
    },
    {
      id: 3,
      img: "https://media.senscritique.com/media/000021190523/300/memento_mori.jpg",
      firstName: "Depeche Mode",
      description:
        "Depeche Mode est un groupe britannique de musique électronique et de rock alternatif, affilié à la new wave, originaire de Basildon, dans l'Essex. Formé en 1980, il apparaît au sein du courant de la synthpop et devient rapidement influent et populaire sur la scène internationale.Son nom est issu du magazine français Dépêche Mode qui est une vraie source d'inspiration.",
    },
    {
      id: 3,
      img: "https://media.senscritique.com/media/000020887568/300/cracker_island.jpg",
      firstName: "Gorillaz",
      description:
        "Gorillaz est un groupe britannique, formé en 1998. Il est composé de quatre personnages de fiction : 2D au chant et au piano ; Murdoc Niccals à la basse ; Russel Hobbs à la batterie ; et Noodle à la guitare. En réalité, la musique est une collaboration entre de nombreux musiciens, mais implique en permanence Damon Albarn. Leur style représente plusieurs genres musicaux.",
    },
  ];

  const [indexPersonne, setIndexPersonne] = useState(0);
  personn.map((element) => {
    const [status, setStatus] = useState(false);

    element.status = status;
    element.setStatus = setStatus;
  });
  return (
    <div>
      <div className="card-nav">
        <Card
          imgProfil={personn[indexPersonne].img}
          nomProfil={personn[indexPersonne].firstName}
          descriptionProfil={personn[indexPersonne].description}
          status={personn[indexPersonne].status}
          setStatus={personn[indexPersonne].setStatus}
        />
        <Nav
          indexPersonne={indexPersonne}
          setIndexPersonne={setIndexPersonne}
          personn={personn}
        />
      </div>
    </div>
  );
}
export default App;
