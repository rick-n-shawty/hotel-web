import style from "../css/footer.module.css";

const Footer = () => {
  return (
    <footer id="footer" className={style.footer}>
      <div className="row">
        <div className={`col-sm-5 ${style.col}`}>
          <p className={style.gray}>Get in touch</p>
          <a className={`nav-link ${style.navlink}`}>sven-studio@gmail.com</a>
          <a className={`nav-link ${style.navlink}`}>business@sven.gmail.com</a>
        </div>
        <div className={`col-sm-5 ${style.col}`}>
          <p className={style.gray}>Services</p>
          <p className="m-0">
            Via Roma 22, Norrmalm <br /> Stockholm
          </p>
          <p className="m-0">+1234567890</p>
        </div>
        <div className={`col-sm-2 ${style.col}`}>
          <p className={style.gray}>Connect</p>
          <a className={`nav-link ${style.navlink}`}>Instagram</a>
          <a className={`nav-link ${style.navlink}`}>LinkedIn</a>
          <a className={`nav-link ${style.navlink}`}>Facebook</a>
        </div>
      </div>

      <div className={style.bottom}>
        <p className={style.gray}>Made by Maela Cudini</p>
        <p className={style.gray}>/</p>
        <p className={style.gray}>2023, @maelacudini</p>
      </div>
    </footer>
  );
};

export default Footer;
