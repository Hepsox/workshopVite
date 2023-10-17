const Nav = ({ indexPersonne, setIndexPersonne, personn }) => {
  return (
    <div className="btn">
      <button
        className="precedent"
        disabled={indexPersonne < 1}
        onClick={() => {
          setIndexPersonne(indexPersonne - 1);
        }}
      >
        Précédent
      </button>
      <button
        className="suivant"
        disabled={indexPersonne >= personn.length - 1}
        onClick={() => {
          setIndexPersonne(indexPersonne + 1);
        }}
      >
        Suivant
      </button>
    </div>
  );
};

export default Nav;
