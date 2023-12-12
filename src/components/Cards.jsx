import gsap from "gsap";
import style from "../css/cards.module.css";

const clients = [
  {
    name: "Housekeeping",
    jobRole: "",
    year: 2023,
    color: "#91ac9a", // Slightly darker pastel red
  },
  {
    name: "Event Planning",
    jobRole: "",
    year: 2023,
    color: "#a9c3b6", // Slightly darker pastel green
  },
  {
    name: "Parking",
    jobRole: "",
    year: 2023,
    color: "#f1c5ae", // Pastel Gold (unchanged)
  },
  {
    name: "Free Wifi",
    jobRole: "",
    year: 2022,
    color: "#b7d1d3", // Slightly darker pastel blue
  },
  {
    name: "Luggage",
    jobRole: "",
    year: 2022,
    color: "#a6c3ce", // Slightly darker pastel pink
  },
  {
    name: "Room service",
    jobRole: "",
    year: 2021,
    color: "#8fb8ca", // Pastel Gold (unchanged)
  },
  {
    name: "Breakfast",
    jobRole: "",
    year: 2021,
    color: "#92b1b6", // Slightly darker pastel green
  },
  {
    name: "Spa",
    jobRole: "",
    year: 2021,
    color: "#f1c5ae", // Slightly darker pastel red
  },
  {
    name: "Restaurant",
    jobRole: "",
    year: 2021,
    color: "#bcafbd", // Slightly darker pastel blue
  },
  {
    name: "Fitness club",
    jobRole: "",
    year: 2021,
    color: "#739086", // Slightly darker pastel pink
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
      <h1>Other services</h1>

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
