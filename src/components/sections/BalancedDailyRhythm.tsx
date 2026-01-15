import group22 from "../../assets/Group 22.png";

const BalancedDailyRhythm = () => {
  return (
    <section className="balanced-rhythm section-padding">
      <div className="balanced-rhythm__container section-container">
        <h2 className="balanced-rhythm__title">
          A <span>Balanced</span> Daily Rhythm
        </h2>
        <p className="balanced-rhythm__subtitle">
          From a warm Morning Circle to a calm Rest Time, Kinderra’s daily flow is
          <br />
          designed to help children feel secure, focused, and ready to learn.
        </p>
        <div className="balanced-rhythm__image">
          <img src={group22} alt="Balanced daily rhythm collage" />
        </div>
        <p className="balanced-rhythm__note">
          07.30 – 17.30 A full day of guided play, learning
          <br />
          moments, rest, and joyful connection.
        </p>
      </div>
    </section>
  );
};

export default BalancedDailyRhythm;
