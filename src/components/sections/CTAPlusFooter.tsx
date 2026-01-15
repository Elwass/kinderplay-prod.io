import decorLeft from "../../assets/vector.png";
import decorRight from "../../assets/vector (1).png";
import decorAlt from "../../assets/Vector (2).png";
import "./CTAPlusFooter.css";

const CTAPlusFooter = () => {
  return (
    <section className="cta-footer">
      <div className="cta-footer__cta section-padding">
        <img
          className="cta-footer__decor cta-footer__decor--left-top"
          src={decorLeft}
          alt=""
          aria-hidden="true"
        />
        <img
          className="cta-footer__decor cta-footer__decor--left-mid"
          src={decorAlt}
          alt=""
          aria-hidden="true"
        />
        <img
          className="cta-footer__decor cta-footer__decor--right-top"
          src={decorRight}
          alt=""
          aria-hidden="true"
        />
        <img
          className="cta-footer__decor cta-footer__decor--right-mid"
          src={decorAlt}
          alt=""
          aria-hidden="true"
        />
        <div className="cta-footer__content section-container">
          <h1 className="cta-footer__title">
            <span className="cta-footer__title-brown">Small Steps </span>
            <span className="cta-footer__title-orange">Today</span>
            <span className="cta-footer__title-brown">, A Bright</span>
            <br />
            <span className="cta-footer__title-brown">Future </span>
            <span className="cta-footer__title-orange">Tomorrow</span>
          </h1>
          <p className="cta-footer__subtitle">
            Discover a learning environment where your child can grow with
            confidence, curiosity, and joy.
          </p>
          <button className="cta-footer__button" type="button">
            <span>REGISTER NOW</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
      <footer className="cta-footer__footer">
        <div className="cta-footer__footer-inner section-container">
          <div className="cta-footer__column">
            <h3>Kinderra Play</h3>
            <p>
              Early Learning Centre based on a
              <br />
              warm, calm and comfortable
              <br />
              atmosphere.
            </p>
          </div>
          <div className="cta-footer__column">
            <h3>Contact</h3>
            <p className="cta-footer__item">
              <span className="cta-footer__icon" aria-hidden="true">
                ☎
              </span>
              (+62) 819-0710-0210
            </p>
            <p className="cta-footer__item">
              <span className="cta-footer__icon" aria-hidden="true">
                ✉
              </span>
              kinderra.play@gmail.com
            </p>
          </div>
          <div className="cta-footer__column cta-footer__column--follow">
            <h3>Follow Us</h3>
            <div className="cta-footer__socials">
              <span aria-hidden="true">f</span>
              <span aria-hidden="true">◎</span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default CTAPlusFooter;
