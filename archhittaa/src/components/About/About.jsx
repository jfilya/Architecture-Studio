import style from "./About.module.scss";
function About() {
  const icons = [
    {
      img: "images/leaf.svg",
      text: "Eco-Friendly",
    },
    {
      img: "images/tool.svg",
      text: "Eco-Friendly",
    },
    {
      img: "images/hour.svg",
      text: "24*7 Support",
    },
  ];
  return (
    <section className={style.about}>
      <div className={style.about__container + " container"}>
        <div className={style.about__info}>
          <p className={style.about__info_text}>
            Amet eu facilisi posuere ut at cras non ipsum proin nunc purus
            tellus ultricies velit elementum ut dui sed augue ultrices phasellus
            ullamcorper condimentum ut suspendisse viverra ornare sit venenatis
          </p>
        </div>
        <div className={style.about__background}>
          <div className={style.about__block}>
            <h2>
              <span></span>Why&nbsp;Us
            </h2>
            <p className={style.about__text}>
              Amet eu facilisi posuere ut at cras non ipsum proin nunc purus
              tellus ultricies velit elementum ut dui sed augue ultrices
              phasellus <span>ullamcorper condimentum</span> ut suspendisse
              viverra ornare sit venenatis
            </p>
            <div className={style.about__icons}>
              {icons.map((icon, index) => (
                <div className={style.about__icon} key={index}>
                  <img src={icon.img} alt="icon" />
                  <span>{icon.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
