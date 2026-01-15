import educationalBg from "../../assets/educational.png";
import "./WhyChoose.css";

export default function WhyChoose() {
  return (
    <section
      className="why-choose whychoose--show-bg section-padding"
      style={{ ["--whychoose-bg" as never]: `url(${educationalBg})` }}
    >
      <div className="why-split">
        <div className="why-left">
          <div className="why-inner section-container">
            <h2 className="why-title">
              <span>Why Choose</span>
              <span>Kinderra Play?</span>
            </h2>

            <div className="why-grid" data-reveal-stagger>
              <div className="why-col">
                <Feature
                  icon="icon80.png"
                  title={"Structured Premium\nApproach"}
                  desc="We combine international-quality early learning with clear routines, small class sizes, and intentional teaching—without unnecessary luxury costs."
                />
                <Feature
                  icon="icon81.png"
                  title={"Qualified & Caring\nEducators"}
                  desc="University-qualified teachers trained in Australian-inspired and play-based practices, delivering guided learning with purpose."
                />
                <Feature
                  icon="icon82.png"
                  title={"Calm, Safe & Child-Centered\nEnvironment"}
                  desc="Our learning spaces are intentionally designed to support focused exploration, sensory regulation, social collaboration, and emotional security."
                />
              </div>

              <div className="why-col why-col-right">
                <Feature
                  icon="icon83.png"
                  title="Bilingual Daily Exposure"
                  desc="English and Bahasa Indonesia are naturally used throughout the day, building strong communication skills and global confidence."
                />
                <Feature
                  icon="icon84.png"
                  title={"Strong Partnership\nwith Families"}
                  desc="Daily updates, open communication, and shared goals ensure parents are active partners in their child’s development."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="why-right whychoose__right" aria-hidden="true" />
      </div>
    </section>
  );
}

function Feature({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  const iconSrc = new URL(`../../assets/${icon}`, import.meta.url).href;

  return (
    <div className="why-feature">
      <div className="why-icon" aria-hidden="true">
        <img
          src={iconSrc}
          alt=""
          aria-hidden="true"
          className="why-icon-img"
        />
      </div>

      <div className="why-copy">
        <h3 className="why-featureTitle">
          {title.split("\n").map((t, i) => (
            <span key={`${t}-${i}`}>{t}</span>
          ))}
        </h3>
        <p className="why-desc">{desc}</p>
      </div>
    </div>
  );
}
