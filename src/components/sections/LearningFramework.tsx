import rectTop from "../../assets/Rectangle 29.png";
import rectBottom from "../../assets/Rectangle 30.png";
import starLeft from "../../assets/vector.png";
import starRight from "../../assets/vector (1).png";

const LearningFramework = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F6EFE7] section-padding">
      <img
        src={starLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[64px] top-[220px] hidden h-[140px] w-[140px] lg:block"
      />
      <img
        src={starRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[96px] top-[260px] hidden h-[120px] w-[120px] lg:block"
      />

      <div className="section-container flex w-full flex-col gap-10 lg:gap-12">
        <div className="text-center text-[#6F5F52]">
          <h2 className="text-[clamp(34px,3.4vw,52px)] font-semibold leading-[1.2]">
            The <span className="text-[#D98956]">Kinderra</span> Learning Framework
          </h2>
          <p className="mx-auto mt-[14px] max-w-[640px] text-[clamp(14px,1.1vw,18px)] leading-[1.5] tracking-[0.01em]">
            Our Play to Readiness Program provides a Structured but Fun Learning
            Pathway
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:items-center lg:gap-12">
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="h-[clamp(230px,23vw,300px)] w-full overflow-hidden rounded-[32px]">
              <img
                src={rectTop}
                alt="Children learning together"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-[clamp(230px,23vw,300px)] w-full overflow-hidden rounded-[32px]">
              <img
                src={rectBottom}
                alt="Children in classroom"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="max-w-[520px] text-[#6F5F52]">
            <p className="text-[20px] font-semibold leading-[28px]">
              At Kinderra Play, learning through play is never random.
            </p>
            <p className="mt-[22px] text-[16px] leading-[28px]">
              Our Play to Readiness Pathway is designed to ensure children enjoy learning
              while steadily developing the skills they need for both school readiness and
              life readiness.
            </p>
            <h3 className="mt-[28px] text-[18px] font-semibold leading-[26px]">
              What Children Build at Kinderra :
            </h3>
            <ul className="mt-[18px] list-disc space-y-[14px] pl-[18px] text-[16px] leading-[28px]">
              <li>
                <span className="font-semibold">Independence</span> – managing routines,
                self-care, and dailychoices
              </li>
              <li>
                <span className="font-semibold">Confidence</span> – expressing ideas,
                trying new things, and speaking in groups
              </li>
              <li>
                <span className="font-semibold">Communication</span> – bilingual language
                development in Englishand Bahasa Indonesia
              </li>
            </ul>
            <p className="mt-[24px] text-[16px] leading-[28px]">
              Each activity is guided by trained educators with clear goals, milestones ,
              and outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningFramework;
