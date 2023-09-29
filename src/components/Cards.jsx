import gsap from "gsap";
import style from "../css/cards.module.css";

const clients = [
  {
    name: "Nordic Architects AB",
    jobRole: "Leading architecture firm",
    year: 2023,
    color: "#FF725E", // Slightly darker pastel red
  },
  {
    name: "Nordic Concrete Creations",
    jobRole: "Concrete craftsmanship company",
    year: 2023,
    color: "#77DD77", // Slightly darker pastel green
  },
  {
    name: "Oslo Modern Art Museum",
    jobRole: "Art museum",
    year: 2023,
    color: "#FFD700", // Pastel Gold (unchanged)
  },
  {
    name: "Helsinki Heritage Preservation Society",
    jobRole: "Heritage preservation organization",
    year: 2022,
    color: "#6CA6CD", // Slightly darker pastel blue
  },
  {
    name: "Stockholm Interior Design",
    jobRole: "Interior design studio",
    year: 2022,
    color: "#FFAEB9", // Slightly darker pastel pink
  },
  {
    name: "Copenhagen Urban Planning Authority",
    jobRole: "Urban planning authority",
    year: 2021,
    color: "#FFD700", // Pastel Gold (unchanged)
  },
  {
    name: "The Nordic Concrete Symposium",
    jobRole: "Event organizer",
    year: 2021,
    color: "#77DD77", // Slightly darker pastel green
  },
  {
    name: "Lena Andersson, Architectural Designer",
    jobRole: "Architectural designer",
    year: 2021,
    color: "#FF725E", // Slightly darker pastel red
  },
  {
    name: "Urban Explorers Magazine",
    jobRole: "Publication",
    year: 2021,
    color: "#6CA6CD", // Slightly darker pastel blue
  },
  {
    name: "Nordic Brutalist Enthusiast Club",
    jobRole: "Enthusiast club",
    year: 2021,
    color: "#FFAEB9", // Slightly darker pastel pink
  },
];

const Cards = () => {
  const manageMouseEnter = (e, index) => {
    gsap.to(e.target, {
      top: "-20px",
      backgroundColor: clients[index].color,
      duration: 0.3,
    });
  };

  const manageMouseLeave = (e, index) => {
    gsap.to(e.target, {
      top: "0px",
      backgroundColor: "rgb(15, 15, 15)",
      duration: 0.3,
      delay: 0.1,
    });
  };

  return (
    <div className={style.cardsmain}>
      <h1>Clients</h1>

      <div className={style.cardscontainer}>
        <div className={style.cards}>
          {clients.map((client, index) => (
            <div
              onMouseEnter={(e) => {
                manageMouseEnter(e, index);
              }}
              onMouseLeave={(e) => {
                manageMouseLeave(e, index);
              }}
              key={index}
            >
              <h2 className={style.heroSubtitle}>{client.name}</h2>
              <p>{client.jobRole}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
