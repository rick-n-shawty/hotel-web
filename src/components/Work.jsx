import style from "../css/work.module.css";

const Work = () => {
  return (
    <div className={style.latestwork}>
      <h1>Latest work</h1>
      <p>Have a look at my latest projects.</p>
      <div className={style.latestworkgallery}>
        <div className={style.imagecontainer}>
          <img
            src="https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt="img"
          />
          <p>Dublin, 2023 - for Helsinki Heritage Preservation Society</p>
        </div>
        <div className={style.imagecontainer}>
          <img
            src="https://images.unsplash.com/photo-1666962890710-c26d3effb9d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt="img"
          />
          <p>Tokyo, 2022 - for Oslo Modern Art Museum</p>
        </div>
        <div className={style.imagecontainer}>
          <img
            src="https://images.unsplash.com/photo-1693362287391-fc96c0e5e489?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
            alt="img"
          />
          <p>Oslo, 2022 - for Nordic Brutalist Enthusiast Club</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
