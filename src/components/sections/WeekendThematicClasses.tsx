import rect312 from "../../assets/Rectangle 31 (2).png";
import vector2 from "../../assets/Vector (2).png";

export default function WeekendThematicClasses() {
  return (
    <section className="weekend-section section-padding">
      <div className="weekend-container section-container">
        <h2 className="weekend-title">
          Weekend <span className="accent">Thematic Classes</span>
        </h2>

        <div className="weekend-grid">
          <div className="weekend-left">
            <div className="weekend-imageWrap">
              <img
                className="weekend-image"
                src={rect312}
                alt="Weekend Thematic Classes"
              />
            </div>

            <div className="weekend-ideal">
              <p className="weekend-idealTitle">
                This program is ideal for families who want :
              </p>
              <ul className="weekend-bullets">
                <li>Quality weekend activities</li>
                <li>A gentle introduction to Kinderra before enrollment</li>
                <li>Meaningful parent–child bonding experiences</li>
              </ul>
            </div>
          </div>

          <div className="weekend-right">
            <h3 className="weekend-subtitle">
              Ages 1.5–5 | Open to Kinderra Families &amp; the Public
            </h3>

            <p className="weekend-paragraph">
              Our Weekend Thematic Classes offer a relaxed and engaging way for children
              to explore learning through weekly changing themes.
            </p>

            <p className="weekend-paragraph">
              Designed as short, meaningful experiences, these sessions support:
            </p>

            <ul className="weekend-bullets">
              <li>Sensory exploration and creativity</li>
              <li>Fine and gross motor development</li>
              <li>Social interaction and confidence building</li>
            </ul>

            <p className="weekend-paragraph">Each theme is delivered through :</p>

            <ul className="weekend-bullets">
              <li>Sensory play</li>
              <li>Art and craft</li>
              <li>Imaginative and role play</li>
              <li>Nature-based or outdoor activities (where possible)</li>
            </ul>
          </div>

          <img className="weekend-decor" src={vector2} alt="" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
