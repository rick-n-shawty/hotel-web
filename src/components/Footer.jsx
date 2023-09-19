const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="row">
        <div className="col-md-2 social">
          <a className="nav-link">Instagram</a>
          <a className="nav-link">LinkedIn</a>
          <a className="nav-link">Facebook</a>
        </div>
        <div className="col-md-10 position-relative">
          <p className="footerdesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea
            saepe at dolores? Id at, culpa qui facere nisi tempore. Provident
            magni praesentium voluptatem est ipsa ea officiis quas voluptatibus?
          </p>
        </div>
      </div>
      <hr />
      <div className="footerend">
        <p>Some copiright statement - 2023</p>
        <p>Sven Andersson</p>
        <a className="nav-link">steveandersson@gmail.com</a>
      </div>
    </footer>
  );
};

export default Footer;
