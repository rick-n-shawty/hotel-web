import style from "../css/footer.module.css";
import { LanguageContext } from "../App";
import { useContext } from "react";
const Footer = () => {
  const [ln, setLn] = useContext(LanguageContext)
  let connectText;
  let callText;
  let socialMediaText; 

  if(ln === 'rus'){
    connectText = "Связаться"
    callText = "Позвоните нам" 
    socialMediaText = "Соц. сети"
  }else if(ln === 'eng'){
    connectText = "Get in touch"
    callText = "Call us"
    socialMediaText = "Social media"
  }else if(ln === 'uz'){  
    connectText = "Get in touch"
    callText = "Call us"
    socialMediaText = "Social media"
  }
  return (
    <footer id="footer" className={style.footer}>
      <div className="row">
        <div className={`col-sm-5 ${style.col}`}>
          <p className={style.gray}>{connectText}</p>
          <a className={`nav-link ${style.navlink}`}>montInn@gmail.com</a>
          <a className={`nav-link ${style.navlink}`}>business@montInn.gmail.com</a>
        </div>
        <div className={`col-sm-5 ${style.col}`}>
          <p className={style.gray}>{callText}</p>
          <p className="m-0">+998902341489</p>
        </div>
        <div className={`col-sm-2 ${style.col}`}>
          <p className={style.gray}>{socialMediaText}</p>
          <a className={`nav-link ${style.navlink}`}>Instagram</a>
          <a className={`nav-link ${style.navlink}`}>Facebook</a>
        </div>
      </div>

      <div className={style.bottom}>
        <p className={style.gray}>Made by Sam</p>
        <p className={style.gray}>/</p>
        <p className={style.gray}>2023, @rick-n-shawty</p>
      </div>
    </footer>
  );
};

export default Footer;
