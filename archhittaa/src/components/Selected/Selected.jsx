import style from "./Selected.module.scss";
function Selected() {
  return (
    <section className={style.selected}>
      <div className="container">
        <h2>
          <span></span>Selected Work
        </h2>
        <p>
          Amet eu facilisi posuere ut at cras non ipsum proin nunc purus tellus
          ultricies velit elementum ut dui sed augue ultrices phasellus
          ullamcorper condimentum ut suspendisse viverra ornare sit venenatis
        </p>
        <div className={style.selected__block}>
          <div className={style.selected__case}>
            <img
              className={style.selected__case_img1}
              src="images/selected1.jpg"
              alt="selected1"
            />
            <img
              className={style.selected__case_img2}
              src="images/selected2.jpg"
              alt="selected2"
            />
            <a href="#" className={style.selected__case_btn + " btn"}>
              View Case
            </a>
          </div>
          <div className={style.selected__text}>
            <h3>Louis Vuitton</h3>
            <p>
              Amet eu facilisi posuere ut at cras non ipsum proin nunc purus
              tellus ultricies velit elementum ut dui sed augue ultrices
              phasellus ullamcorper condimentum ut suspendisse viverra ornare
              sit venenatis
            </p>
            <div className={style.selected__btn}>
              <p>
                <span></span> Next
              </p>
              <p>
                Prev<span></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Selected;
