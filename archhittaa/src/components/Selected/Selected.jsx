import style from "./Selected.module.scss";
import React from "react";
function Selected() {
  const objAnimationElements = [
    {
      img1: "images/selected1.jpg",
      img2: "images/selected2.jpg",
      title: "Louis Vuitton",
      text: "Amet eu facilisi posuere ut at cras non ipsum proin nunc purus tellus ultricies velit elementum ut dui sed augue ultrices phasellus ullamcorper condimentum ut suspendisse viverra ornare sit venenatis",
    },
    {
      img1: "images/selected11.jpg",
      img2: "images/selected12.jpg",
      title: "Ethan Allen",
      text: "Founded in 1932, Ethan Allen is an American furniture chain operating 300 stores throughout America. The company was founded by Nathan S. Ancell and Theodore Baumritter",
    },
    {
      img1: "images/selected21.jpg",
      img2: "images/selected22.jpg",
      title: "Roche Bobois",
      text: "Founded by the Roche and Chouchan families in 1960, Roche Bobois is a French high-end furniture chain. The company recently opened its first showroom in Japan.",
    },
    {
      img1: "images/selected31.jpg",
      img2: "images/selected32.jpg",
      title: "Williams-Sonoma",
      text: "In 5th place in the list of the top 10 furniture manufacturers is Williams-Sonoma Inc. The American retail chain specializes in kitchen and home furnishing products.",
    },
  ];
  let [obj, isObj] = React.useState(0);
  const animationBlocks = (transitionAnimation,transitionAnimation2, transitionAnimation3) => {
    const blockImg1 = document.querySelector(".images1");
    const blockImg2 = document.querySelector(".images2");
    const titleElement = document.querySelector(".title-element");
    const textElement = document.querySelector(".text-element");
    const switchBtn = document.querySelectorAll(".switch");
    switchBtn.forEach((s) => (s.disabled = true));
    titleElement.classList.add(transitionAnimation);
    textElement.classList.add('opacity-block');
    blockImg1.classList.add(transitionAnimation);
    blockImg2.classList.add('opacity-block');
    titleElement.onanimationend = () => {
      titleElement.classList.remove(transitionAnimation);
      textElement.classList.remove('opacity-block');
      textElement.classList.add(transitionAnimation3);
      textElement.onanimationend = () => {
        textElement.classList.remove(transitionAnimation3);
        switchBtn.forEach((s) => (s.disabled = false));
      }
    };
    blockImg1.onanimationend = () => {
      blockImg1.classList.remove(transitionAnimation);
      blockImg2.classList.remove('opacity-block');
      blockImg2.classList.add(transitionAnimation2);
      blockImg2.onanimationend = () => {
        blockImg2.classList.remove(transitionAnimation2);
      }
    };
  };
  const renderObjPlus = () => {
    obj < 3 ? isObj((obj += 1)) : isObj(0);
    animationBlocks('transition-right', 'transition-right2', 'transition-right3');
  };

  const renderObjMinus = () => {
    obj > 1 ? isObj((obj -= 1)) : isObj(3);
    animationBlocks('transition-right', 'transition-right2', 'transition-right3');
  };

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
              className={style.selected__case_img1 + " images1"}
              src={objAnimationElements[obj].img1}
              alt="selected1"
            />
            <img
              className={style.selected__case_img2 + " images2"}
              src={objAnimationElements[obj].img2}
              alt="selected2"
            />
            <a href="#" className={style.selected__case_btn + " btn"}>
              View Case
            </a>
          </div>
          <div className={style.selected__text}>
            <h3 className="title-element">{objAnimationElements[obj].title}</h3>
            <p className="text-element">{objAnimationElements[obj].text}</p>
            <div className={style.selected__btn}>
              <button className="switch" onClick={renderObjPlus}>
                <span></span> Next
              </button>
              <button className="switch" onClick={renderObjMinus}>
                Prev<span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Selected;
