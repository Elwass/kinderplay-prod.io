import group23 from "../../assets/Group 23.png";
import group25 from "../../assets/Group 25.png";
import "./JourneySection.css";

const JourneySection = () => {
  return (
    <section className="journey-section section-padding">
      <div className="journey-section__content section-container">
        <h2 className="journey-section__title">
          <span className="journey-section__title-brown">Your </span>
          <span className="journey-section__title-orange">Kinderra</span>
          <span className="journey-section__title-brown"> Journey</span>
        </h2>
        <div className="journey-section__image-wrapper">
          <img
            className="journey-section__image"
            src={group23}
            alt="Kinderra journey collage"
          />
          <img
            className="journey-section__decor"
            src={group25}
            alt=""
            aria-hidden="true"
          />
        </div>
        <p className="journey-section__note">
          Every family is guided with care, clarity, and professionalism.
        </p>
      </div>
    </section>
  );
};

export default JourneySection;
