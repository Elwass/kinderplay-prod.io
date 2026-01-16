import decorLeft from "../../assets/Vector.png";
import decorRight from "../../assets/vector (1).png";
import decorAlt from "../../assets/Vector (2).png";
import "./CTAPlusFooter.css";

const whatsappLink = "https://wa.me/6288901910210";
const instagramLink = "https://www.instagram.com/kinderraplay";

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
          <a className="cta-footer__button" href={whatsappLink}>
            <span>REGISTER NOW</span>
            <span aria-hidden="true">→</span>
          </a>
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
              <a
                className="cta-footer__social-icon"
                href={whatsappLink}
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" role="img" focusable="false">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.953.925-1.953 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                className="cta-footer__social-icon"
                href={instagramLink}
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" role="img" focusable="false">
                  <path d="M12 0c-3.259 0-3.668.013-4.948.072-1.277.059-2.45.322-3.417 1.289C2.668 2.327 2.405 3.5 2.346 4.777 2.287 6.057 2.275 6.466 2.275 9.725v4.55c0 3.259.013 3.668.071 4.948.059 1.277.322 2.45 1.289 3.417.967.967 2.14 1.23 3.417 1.289 1.28.058 1.689.071 4.948.071s3.668-.013 4.948-.071c1.277-.059 2.45-.322 3.417-1.289.967-.967 1.23-2.14 1.289-3.417.058-1.28.071-1.689.071-4.948v-4.55c0-3.259-.013-3.668-.071-4.948-.059-1.277-.322-2.45-1.289-3.417C19.398.393 18.225.131 16.948.072 15.668.013 15.259 0 12 0zm0 5.838A6.162 6.162 0 1 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.406-11.845a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default CTAPlusFooter;
