import decorLeft from "../../assets/Vector.png";
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
              <span className="cta-footer__social-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable="false">
                  <path d="M18 8.5h-3V6.5c0-.8.6-1 1-1h2V2h-3c-2.8 0-4 1.7-4 4v2.5H8v3.5h3V22h4v-10h3l1-3.5z" />
                </svg>
              </span>
              <span className="cta-footer__social-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable="false">
                  <path d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zm6.1-8.1a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM20 5.3A4.3 4.3 0 0 0 15.7 1H8.3A4.3 4.3 0 0 0 4 5.3v7.4A4.3 4.3 0 0 0 8.3 17h7.4A4.3 4.3 0 0 0 20 12.7V5.3zm-1.8 7.4a2.5 2.5 0 0 1-2.5 2.5H8.3a2.5 2.5 0 0 1-2.5-2.5V5.3a2.5 2.5 0 0 1 2.5-2.5h7.4a2.5 2.5 0 0 1 2.5 2.5v7.4z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default CTAPlusFooter;
