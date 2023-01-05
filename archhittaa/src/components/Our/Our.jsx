import style from "./Our.module.scss";
function Our() {
  return (
    <section className={style.our}>
      <div className="container">
        <div className={style.our__background}>
          <div className={style.our__block}>
            <img src="images/our-img.jpg" alt="our-img" />
            <div className={style.our__text}>
              <h2>Our&nbsp;DNA <span></span></h2>
              <p className={style.our__text_first}>
                Amet eu facilisi posuere ut at cras non ipsum proin nunc purus
                tellus ultricies velit elementum ut dui sed augue ultrices
                phasellus <span>ullamcorper condimentum</span>  ut suspendisse viverra ornare
                sit venenatis
              </p>
              <p className={style.our__text_second}>
                Amet eu facilisi posuere ut at cras non ipsum proin nunc purus
                tellus ultricies velit{" "}
              </p>
              <a className="btn btn_black" href="#">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Our;
