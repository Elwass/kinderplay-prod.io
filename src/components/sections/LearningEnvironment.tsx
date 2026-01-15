import le1 from "../../assets/LE1.png";
import le2 from "../../assets/LE2.png";
import le3 from "../../assets/LE3.png";
import le4 from "../../assets/LE4.png";
import le5 from "../../assets/LE5.png";
import le6 from "../../assets/LE6.png";
import le7 from "../../assets/LE7.png";
import le8 from "../../assets/LE8.png";
import decoLeft from "../../assets/LE_ICON_1.png";
import decoRight from "../../assets/LE_ICON_2.png";

const images = [le1, le2, le3, le4, le5, le6, le7, le8];

export default function LearningEnvironment() {
  return (
    <section className="learning-env section-padding">
      <img
        src={decoLeft}
        alt=""
        aria-hidden="true"
        className="learning-env__decor learning-env__decor--left"
      />
      <img
        src={decoRight}
        alt=""
        aria-hidden="true"
        className="learning-env__decor learning-env__decor--right"
      />

      <div className="learning-env__container section-container">
        <h2 className="learning-env__title">
          Our Learning <span>Environment</span>
        </h2>
        <p className="learning-env__subtitle">
          Our facilities are more than amenities—they are proof of learning quality.
          <br />
          Each area serves a clear purpose, from sensory regulation and creative
          expression to physical confidence and quiet focus.
        </p>

        <div className="learning-env__grid">
          {images.map((src, index) => (
            <div className="learning-env__card" key={`${src}-${index}`}>
              <img src={src} alt={`Learning environment ${index + 1}`} />
            </div>
          ))}
        </div>

        <p className="learning-env__note">
          CCTV monitoring for safety – Daily parent updates and learning reports –
          Healthy, balanced meals and snacks – Support from child psychologists &amp;
          pediatricians
        </p>

        <button className="learning-env__button" type="button">
          Watch Our Room Tour
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}
