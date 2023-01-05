import style from "./Clients.module.scss";
function Clients() {
  return (
    <section className={style.clients}>
      <div className="container">
        <div className={style.clients__container}>
          <ul className={style.clients__list}>
            <li>
              <a href="#">
                <img src="images/social1.svg" alt="social" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/social2.svg" alt="social" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/social3.svg" alt="social" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/social4.svg" alt="social" />
              </a>
            </li>
          </ul>
          <h2>
            Our&nbsp;Clients
            <span></span>
          </h2>
        </div>
      </div>
    </section>
  );
}
export default Clients;
