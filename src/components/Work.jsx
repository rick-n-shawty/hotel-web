import style from "../css/work.module.css";
import { Route, Link as RouterLink } from "react-router-dom";
import { LanguageContext } from "../App";
import { useContext } from "react";
const Work = () => {
  const [ln, setLn] = useContext(LanguageContext)
  let hText; 
  let cottageText; 
  let roomOneText;
  let roomTwoText;
  if(ln === 'eng'){
    hText = "Our sevices:"
    cottageText = "Cottages"
    roomOneText = "Room for one"
    roomTwoText = "Room for two"
  }else if(ln === 'rus'){
    hText = "Наши услуги:"
    cottageText = "Коттеджи"
    roomOneText = "Номер на одного"
    roomTwoText = "Номер на двоих"
  }else if(ln === 'uz'){  
    hText = "Our sevices:"
    cottageText = "Cottages"
    roomOneText = "Room for one"
    roomTwoText = "Room for two"
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
          <RouterLink to={"/rooms/one"} aria-current="page">
            <img
              src="https://d2pe372uz1yk5d.cloudfront.net/IMG_2040.JPG"
              alt="img"
            />
          </RouterLink>
          <p>{roomOneText}</p>
        </div>
        <div className={style.imagecontainer}>
          <RouterLink to={"/rooms/two"} aria-current="page">
            <img
              src="https://d2pe372uz1yk5d.cloudfront.net/IMG_1462.JPG"
              alt="img"
            />
          </RouterLink>
          <p>{roomTwoText}</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
