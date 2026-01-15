import imgTrial from "../../assets/Rectangle 31 (3).png";

export default function TrialProgram() {
  return (
    <section className="trial-section section-padding">
      <div className="trial-container section-container">
        <h2 className="trial-title">
          <span className="trial-accent">Trial</span> Program
        </h2>

        <div className="trial-grid">
          <div className="trial-left">
            <h3 className="trial-subtitle">Free Trial | 1 Hour × 2 Days</h3>

            <p className="trial-text">
              Our Trial Program allows families to experience Kinderra Play before
              making a commitment.
            </p>

            <p className="trial-text trial-label">During the trial, children :</p>
            <ul className="trial-bullets">
              <li>Join regular class routines</li>
              <li>Engage in guided play activities</li>
              <li>Begin building comfort with educators and peers</li>
            </ul>

            <p className="trial-text trial-label">Parents gain insight into :</p>
            <ul className="trial-bullets">
              <li>Creative arts and role play</li>
              <li>Movement, yoga, or outdoor play</li>
              <li>Music, storytelling, and hands-on exploration</li>
            </ul>
          </div>

          <div className="trial-right">
            <div className="trial-imageWrap">
              <img className="trial-image" src={imgTrial} alt="Trial Program classroom" />
            </div>
          </div>
        </div>

        <div className="trial-cta">
          <button className="trial-button" type="button">
            REGISTER OUR
            <br />
            TRIAL CLASS
          </button>
          <p className="trial-footnote">
            A calm, supportive first step into
            <br />
            structured fun learning
          </p>
        </div>
      </div>

      <span className="trial-decor trial-decor-left" aria-hidden="true" />
      <span className="trial-decor trial-decor-right" aria-hidden="true" />
    </section>
  );
}
