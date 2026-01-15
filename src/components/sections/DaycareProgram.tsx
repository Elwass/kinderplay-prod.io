import daycareMain from "../../assets/Rectangle 31 (4).png";
import daycareSmall from "../../assets/Rectangle 45.png";
import decoLeft from "../../assets/Group 20.png";
import decoRight from "../../assets/Group 21.png";

const DaycareProgram = () => {
  return (
    <section className="our-programs-section section-padding relative w-full bg-white">
      <img
        src={decoLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[40px] top-[120px] hidden h-[128px] w-[128px] opacity-55 lg:block"
      />
      <img
        src={decoRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[48px] right-[56px] hidden h-[150px] w-[150px] opacity-45 lg:block"
      />
      <div className="section-container relative flex w-full flex-col gap-10 lg:gap-12">
        <div className="flex min-h-[clamp(140px,16vw,180px)] flex-col items-center justify-center text-center text-[#6F5F52]">
          <p className="text-[clamp(32px,3.9vw,52px)] font-semibold leading-[1.2] text-[#6F5F52]">
            Our Programs
          </p>
          <h2 className="mt-[6px] text-[clamp(26px,2.6vw,36px)] font-semibold leading-[1.25]">
            <span className="text-[#D98956]">Daycare</span> Program (Ages 1–5)
          </h2>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,620px)_minmax(0,1fr)] lg:gap-12">
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="h-[clamp(260px,30vw,380px)] w-full overflow-hidden rounded-[32px] bg-white">
              <img
                src={daycareMain}
                alt="Daycare classroom activities"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-6">
              <div className="max-w-[360px] text-[#6F5F52]">
                <h3 className="text-[18px] font-semibold leading-[26px]">
                  What makes our daycare different:
                </h3>
                <ul className="mt-[14px] list-disc space-y-[10px] pl-[18px] text-[14px] leading-[22px]">
                  <li>Small class sizes with low teacher-child ratios</li>
                  <li>Qualified educators who guide, observe, and scaffold learning</li>
                  <li>
                    Balanced rhythm of active play, focused learning, rest, and free
                    exploration
                  </li>
                </ul>
              </div>

              <div className="h-[clamp(140px,16vw,180px)] w-full max-w-[240px] overflow-hidden rounded-[24px] bg-white lg:mt-[18px]">
                <img
                  src={daycareSmall}
                  alt="Children learning together"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="max-w-[520px] text-[#6F5F52]">
            <h3 className="text-[20px] font-semibold leading-[28px]">
              Half-Day &amp; Full-Day Options | Open All Year
            </h3>
            <p className="mt-[18px] text-[16px] leading-[28px]">
              Our Daycare Program is designed for families who seek more than
              supervision. At Kinderra Play, daycare is a learning-rich environment
              where care and education are seamlessly integrated.
            </p>
            <p className="mt-[18px] text-[16px] leading-[28px]">
              Children are supported through:
            </p>
            <ul className="mt-[12px] list-disc space-y-[12px] pl-[18px] text-[16px] leading-[28px]">
              <li>Guided play with clear learning intentions</li>
              <li>Calm, predictable daily routines that build security</li>
              <li>
                Development of independence, communication, and social skills
              </li>
            </ul>
            <p className="mt-[18px] text-[16px] leading-[28px]">
              Age-appropriate early literacy and numeracy foundations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DaycareProgram;
