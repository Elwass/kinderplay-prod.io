import decorLeft from "../../assets/Vector.png";
import decorRight from "../../assets/vector (1).png";
import decorAlt from "../../assets/Vector (2).png";
import phoneIcon from "../../assets/Vector (6).png";
import emailIcon from "../../assets/Vector (7).png";
import facebookIcon from "../../assets/Vector (8).png";
import instagramIcon from "../../assets/Vector (9).png";
import "./CTAPlusFooter.css";

const whatsappLink = "https://wa.me/6288901910210";
const instagramLink = "https://www.instagram.com/kinderraplay";
const emailLink = "mailto:kinderra.play@gmail.com";

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
      <a className="cta-footer__item" href={whatsappLink}>
        <span className="cta-footer__icon" aria-hidden="true">
          <img src={phoneIcon} alt="" />
        </span>
        (+62) 819-0710-0210
      </a>
      <a className="cta-footer__item" href={emailLink}>
        <span className="cta-footer__icon" aria-hidden="true">
          <img src={emailIcon} alt="" />
        </span>
        kinderra.play@gmail.com
      </a>
      <a className="cta-footer__item cta-footer__item--ig" href={instagramLink}>
        <span className="cta-footer__icon" aria-hidden="true">
          <img src={instagramIcon} alt="" />
        </span>
        @kinderraplay
      </a>
    </div>

    <div className="cta-footer__column cta-footer__column--follow">
      <h3>Follow Us</h3>
      <div className="cta-footer__socials">
        <a
          className="cta-footer__social-icon"
          href={whatsappLink}
          aria-label="Facebook"
        >
          <img src={facebookIcon} alt="" />
        </a>
        <a
          className="cta-footer__social-icon"
          href={instagramLink}
          aria-label="Instagram"
        >
          <img src={instagramIcon} alt="" />
        </a>
      </div>
    </div>

    {/* ✅ NEW LOCATION COLUMN */}
    <div className="cta-footer__column cta-footer__column--location">
      <h3>Location :</h3>
      <p>
        Ruko Asya Genova No. 30
        <br />
        Jl. Asya Boulevard, Jl. Jakarta Garden City Boulevard, Cakung Timur, Cakung,
        Jakarta Timur, DKI Jakarta 13910.
      </p>
    </div>
  </div>
</footer>
    </section>
  );
};

export default CTAPlusFooter;
