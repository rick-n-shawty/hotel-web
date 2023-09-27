import style from "../css/footer.module.css";

const Footer = () => {
  return (
    <footer id="footer" className={style.footer}>
      <div className="row">
        <div className={`col-md-2 ${style.social}`}>
          <a className={`nav-link ${style.navlink}`}>Instagram</a>
          <a className={`nav-link ${style.navlink}`}>LinkedIn</a>
          <a className={`nav-link ${style.navlink}`}>Facebook</a>
        </div>
        <div className="col-md-10 position-relative">
          <p className={style.footerdesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea
            saepe at dolores? Id at, culpa qui facere nisi tempore. Provident
            magni praesentium voluptatem est ipsa ea officiis quas voluptatibus?
          </p>
        </div>
      </div>
      <hr />
      <div className={style.footerend}>
        <p>Some copiright statement - 2023</p>
        <p>Sven Andersson</p>
        <a className={`nav-link ${style.navlink}`}>svenandersson@gmail.com</a>
      </div>
    </footer>
  );
};

export default Footer;
