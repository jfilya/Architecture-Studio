import style from "./Blogs.module.scss";
function Blogs() {
  const blogs = [
    {
      img: "images/blog1.jpg",
      description: "Amet eu facilisi posuere ut at cras non ipsum proin",
    },
    {
      img: "images/blog2.jpg",
      description: "Emu facilisi posuere ut at cras non ipsum proin",
    },
    {
      img: "images/blog3.jpg",
      description: "Fasacilisi posuere ut at cras non ipsum proin",
    },
  ];
  return (
    <section className={style.blogs}>
      <div className={style.blogs__container +  " container"}>
        <div className={style.blogs__background}>
          <div className={style.blogs__block}>
            <h2>
              <span></span>Lataste Blogs
            </h2>

          </div>
          <div className={style.blogs__items}>
              {blogs.map((icon, index) => (
                <div className={style.blogs__item} key={index}>
                  <span>Intirior</span>
                  <img src={icon.img} alt="icon" />
                  <p>{icon.description}</p>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}
export default Blogs;
