import gsap from "gsap";
import style from "../css/cards.module.css";
import { LanguageContext } from "../App";
import { useContext } from "react";
const services = [
  {
    nameEng: "Housekeeping",
    nameRus: "Уборка номеров",
    nameUz: "Housekeeping",
    price: "",
    color: "#91ac9a", // Slightly darker pastel red
  },
  {
    nameEng: "Event Planning",
    nameRus: "Планирование мероприятий",
    nameUz: "",
    price: "",
    color: "#a9c3b6", // Slightly darker pastel green
  },
  {
    nameEng: "Parking",
    nameRus: "Стоянка",
    nameUz: "",
    price: "",
    color: "#f1c5ae", // Pastel Gold (unchanged)
  },
  {
    nameEng: "Free Wifi",
    nameRus: "Бесплатный Интернет",
    nameUz: "",
    price: "",
    color: "#b7d1d3", // Slightly darker pastel blue
  },
  {
    nameEng: "Caraoke",
    nameRus: "Караоке",
    nameUz: "Caraoke",
    price: "UZS 100.000-150.000",
    color: "#a6c3ce", // Slightly darker pastel pink
  },
  {
    nameEng: "Sauna with a Swimming pool",
    nameRus: "Сауна c бассейном",
    nameUz: "",
    price: "UZS 300.000",
    color: "#8fb8ca", // Pastel Gold (unchanged)
  },
  {
    nameEng: "Breakfast",
    nameRus: "Завтрак",
    nameUz: "",
    price: "",
    color: "#92b1b6", // Slightly darker pastel green
  },
  {
    nameEng: "PlayStation 5",
    nameRus: "PlayStation 5",
    nameUz: "PlayStation 5",
    price: "UZS 100.000-150.000",
    color: "#f1c5ae", // Slightly darker pastel red
  },
  {
    nameEng: "Restaurant",
    nameRus: "Ресторан",
    nameUz: "",
    price: "",
    color: "#bcafbd", // Slightly darker pastel blue
  }
];

const Cards = () => {
  const manageMouseEnter = (e, index) => {
    gsap.to(e.target, {
      top: "-20px",
      backgroundColor: services[index].color,
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

  const [ln, setLn] = useContext(LanguageContext) 
  let cards = []
  let h1Text = 'Ohter services';
  if(ln === 'eng'){
    h1Text = "Other services"
    cards = services.map((service, index) => (
      <div
        onMouseEnter={(e) => {
          manageMouseEnter(e, index);
        }}
        onMouseLeave={(e) => {
          manageMouseLeave(e, index);
        }}
        key={index}
      >
         
        <h2 className={style.heroSubtitle}>{service.nameEng}</h2>
        <p>{service.price}</p>
      </div>
    ))
  }else if(ln === 'rus'){
    cards = services.map((service, index) => (
      <div
        onMouseEnter={(e) => {
          manageMouseEnter(e, index);
        }}
        onMouseLeave={(e) => {
          manageMouseLeave(e, index);
        }}
        key={index}
      >
         
        <h2 className={style.heroSubtitle}>{service.nameRus}</h2>
        <p>{service.price}</p>
      </div>
    ))
    h1Text = "Другие услуги"
  }else{
    h1Text = "Other services"
    cards = services.map((service, index) => (
      <div
        onMouseEnter={(e) => {
          manageMouseEnter(e, index);
        }}
        onMouseLeave={(e) => {
          manageMouseLeave(e, index);
        }}
        key={index}
      >
         
        <h2 className={style.heroSubtitle}>{service.nameUz}</h2>
        <p>{service.price}</p>
      </div>
    ))
  }
  
  return (
    <div className={style.cardsmain}>
      <h1>{h1Text}</h1>

      <div className={style.cardscontainer}>
        <div className={style.cards}>
          {cards}
        </div>
      </div>
    </div>
  );
};

export default Cards;
