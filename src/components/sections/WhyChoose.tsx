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

            <div className="why-grid">
              <div className="why-col">
                <Feature
                  icon="sparkle"
                  title={"Structured Premium\nApproach"}
                  desc="We combine international-quality early learning with clear routines, small class sizes, and intentional teaching—without unnecessary luxury costs."
                />
                <Feature
                  icon="cap"
                  title={"Qualified & Caring\nEducators"}
                  desc="University-qualified teachers trained in Australian-inspired and play-based practices, delivering guided learning with purpose."
                />
                <Feature
                  icon="home"
                  title={"Calm, Safe & Child-Centered\nEnvironment"}
                  desc="Our learning spaces are intentionally designed to support focused exploration, sensory regulation, social collaboration, and emotional security."
                />
              </div>

              <div className="why-col why-col-right">
                <Feature
                  icon="globe"
                  title="Bilingual Daily Exposure"
                  desc="English and Bahasa Indonesia are naturally used throughout the day, building strong communication skills and global confidence."
                />
                <Feature
                  icon="people"
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
  return (
    <div className="why-feature">
      <div className="why-icon" aria-hidden="true">
        {icon === "sparkle" && (
          <svg viewBox="0 0 24 24" className="why-svg" fill="none">
            <path
              d="M12 2l1.4 5.3L19 9l-5.6 1.7L12 16l-1.4-5.3L5 9l5.6-1.7L12 2z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {icon === "globe" && (
          <svg viewBox="0 0 24 24" className="why-svg" fill="none">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
            <path d="M3 12h18" stroke="currentColor" strokeWidth="2" />
            <path
              d="M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
        {icon === "cap" && (
          <svg viewBox="0 0 24 24" className="why-svg" fill="none">
            <path
              d="M3 9l9-4 9 4-9 4-9-4z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M7 11v5c0 .6 2.2 2 5 2s5-1.4 5-2v-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
        {icon === "people" && (
          <svg viewBox="0 0 24 24" className="why-svg" fill="none">
            <path
              d="M16 11a3 3 0 1 0-6 0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 20c.7-3.4 3.5-5 8-5s7.3 1.6 8 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M7.5 10a2.5 2.5 0 1 0-5 0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
        {icon === "home" && (
          <svg viewBox="0 0 24 24" className="why-svg" fill="none">
            <path
              d="M4 11l8-7 8 7v9H4v-9z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M10 20v-6h4v6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
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
