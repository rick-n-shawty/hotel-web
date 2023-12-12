import style from "../css/work.module.css";
import { Route, Link as RouterLink } from "react-router-dom";
const Work = () => {
  return (
    <div className={style.latestwork}>
      <h1>Our services</h1>
      <div className={style.latestworkgallery}>
        <div className={style.imagecontainer}>
          <RouterLink to={"/cottages"}>
            <img
              src="https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              alt="img"
            />
          </RouterLink>
          <p>Cottages</p>
        </div>
        <div className={style.imagecontainer}>
          <RouterLink to={"/rooms"}>
            <img
              src="https://images.unsplash.com/photo-1666962890710-c26d3effb9d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              alt="img"
            />
          </RouterLink>
          <p>Rooms</p>
        </div>
        <div className={style.imagecontainer}>
          <RouterLink>
            <img
              src="https://images.unsplash.com/photo-1693362287391-fc96c0e5e489?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
              alt="img"
            />
          </RouterLink>
          <p>Other services</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
