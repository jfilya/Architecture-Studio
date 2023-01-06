import style from "./Header.module.scss";
import React from "react";
function Header() {
  const arrayImg = [1,2,3,4,5]
  let [items, isItems] = React.useState(1);
  const animationImg = (transitionAnimation) => {
    const images = document.querySelector(".images-active");
    const switchBtn = document.querySelectorAll(".switch");
    switchBtn.forEach((s) => (s.disabled = true));
    images.classList.add(transitionAnimation);
    images.onanimationend = () => {
      images.classList.remove(transitionAnimation);
      switchBtn.forEach((s) => (s.disabled = false));
    };
  };
  const renderItemsPlus = () => {
    items < 5 ? isItems((items += 1)) : isItems(1);
    animationImg("transition-top");
  };

  const renderItemsMinus = () => {
    items > 1 ? isItems((items -= 1)) : isItems(5);
    animationImg("transition-bottom");
  };
  return (
    <header className={style.header}>
      <div className={style.header__wrapper}>
        <div className="container">
          <div className={style.promo}>
            <nav>
              <div className={style.promo__social}>
                <a href="#">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_18_17)">
                      <path
                        d="M14 19H19V5H5V19H12V14H10V12H12V10.346C12 9.009 12.14 8.524 12.4 8.035C12.6561 7.55119 13.052 7.15569 13.536 6.9C13.918 6.695 14.393 6.572 15.223 6.519C15.552 6.498 15.978 6.524 16.501 6.599V8.499H16C15.083 8.499 14.704 8.542 14.478 8.663C14.3431 8.73236 14.2334 8.84215 14.164 8.977C14.044 9.203 14 9.427 14 10.345V12H16.5L16 14H14V19ZM4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3V3Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_18_17">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_18_7)">
                      <path
                        d="M12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75ZM12 4C9.526 4 9.122 4.007 7.971 4.058C7.187 4.095 6.661 4.2 6.173 4.39C5.739 4.558 5.426 4.759 5.093 5.093C4.78001 5.3954 4.53935 5.76458 4.389 6.173C4.199 6.663 4.094 7.188 4.058 7.971C4.006 9.075 4 9.461 4 12C4 14.474 4.007 14.878 4.058 16.029C4.095 16.812 4.2 17.339 4.389 17.826C4.559 18.261 4.759 18.574 5.091 18.906C5.428 19.242 5.741 19.443 6.171 19.609C6.665 19.8 7.191 19.906 7.971 19.942C9.075 19.994 9.461 20 12 20C14.474 20 14.878 19.993 16.029 19.942C16.811 19.905 17.338 19.8 17.826 19.611C18.259 19.442 18.574 19.241 18.906 18.909C19.243 18.572 19.444 18.259 19.61 17.829C19.8 17.336 19.906 16.809 19.942 16.029C19.994 14.925 20 14.539 20 12C20 9.526 19.993 9.122 19.942 7.971C19.905 7.189 19.8 6.661 19.61 6.173C19.4593 5.765 19.2191 5.39596 18.907 5.093C18.6047 4.77985 18.2355 4.53917 17.827 4.389C17.337 4.199 16.811 4.094 16.029 4.058C14.925 4.006 14.539 4 12 4ZM12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_18_7">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
              <h1 className={style.title}>ARCHITAA</h1>
              <div className={style.promo__button}>
                <span></span>
                <span></span>
              </div>
            </nav>
            <div className={style.promo__middle}>
              <img
                className={style.promo__image + " images-active"}
                src={`images/header${items}.jpg`}
                alt=""
              />
              <span className={style.promo__image_item}>{`0${items}`}</span>
              <h2>Architecture Studio</h2>
              <div className={style.promo__middle_btn}>
                <button className="switch" onClick={() => renderItemsPlus()}>
                  <span></span> Next
                </button>
                <button className="switch" onClick={renderItemsMinus}>
                  Prev<span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <aside className={style.aside}>
          <p className={style.title}>ARCHITAA</p>
        </aside>
      </div>
      <div style={{ display: "none" }}>
        {
          arrayImg.map(num => (
            <img src={`images/header${num}.jpg`} alt="header-img" />
          ))
        }
      </div>
    </header>
  );
}
export default Header;
