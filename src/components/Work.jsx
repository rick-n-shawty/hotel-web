import style from "../css/work.module.css";
import { Route, Link as RouterLink } from "react-router-dom";
import { LanguageContext } from "../App";
import { useContext } from "react";
const Work = () => {
  const [ln, setLn] = useContext(LanguageContext)
  let hText; 
  let cottageText; 
  let roomText;
  let otherText;
  if(ln === 'eng'){
    hText = "Our sevices"
    cottageText = "Cottages"
    roomText = "Rooms"
    otherText = "Other services"
  }else if(ln === 'rus'){
    hText = "Наши услуги:"
    cottageText = "Коттеджи"
    roomText = "Номера"
    otherText = "Другие услуги"
  }else if(ln === 'uz'){  
    hText = "Our sevices"
    cottageText = "Cottages"
    roomText = "Rooms"
    otherText = "Other services"
  }
  return (
    <div className={style.latestwork}>
      <h1>{hText}</h1>
      <div className={style.latestworkgallery}>
        <div className={style.imagecontainer}>
          <RouterLink to={"/cottages"}>
            <img
              src="https://d2pe372uz1yk5d.cloudfront.net/IMG_1465.JPG"
              alt="img"
            />
          </RouterLink>
          <p>{cottageText}</p>
        </div>
        <div className={style.imagecontainer}>
          <RouterLink to={"/rooms"}>
            <img
              src="https://d2pe372uz1yk5d.cloudfront.net/IMG_1462.JPG"
              alt="img"
            />
          </RouterLink>
          <p>{roomText}</p>
        </div>
        <div className={style.imagecontainer}>
          <RouterLink>
            <img
              src="https://images.unsplash.com/photo-1693362287391-fc96c0e5e489?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
              alt="img"
            />
          </RouterLink>
          <p>{otherText}</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
