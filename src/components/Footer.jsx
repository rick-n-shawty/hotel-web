import style from "../css/footer.module.css";

const Footer = () => {
  return (
    <footer id="footer" className={style.footer}>
      <div className="row">
        <div className={`col-sm-5 ${style.col}`}>
          <p className={style.gray}>Get in touch</p>
          <a className={`nav-link ${style.navlink}`}>montInn@gmail.com</a>
          <a className={`nav-link ${style.navlink}`}>business@montInn.gmail.com</a>
        </div>
        <div className={`col-sm-5 ${style.col}`}>
          <p className={style.gray}>Call us</p>
          <p className="m-0">+998902341489</p>
        </div>
        <div className={`col-sm-2 ${style.col}`}>
          <p className={style.gray}>Connect</p>
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
