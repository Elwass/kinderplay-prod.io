import daycareMain from "../../assets/Rectangle 31 (4).png";
import daycareSmall from "../../assets/Rectangle 45.png";
import decoLeft from "../../assets/Group 20.png";
import decoRight from "../../assets/Group 21.png";

const DaycareProgram = () => {
  return (
    <section className="our-programs-section section-padding relative w-full bg-white font-['Fredoka',sans-serif] lg:py-[120px]">
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
      <div className="section-container relative flex w-full flex-col gap-10 lg:gap-[64px] lg:max-w-[1200px] lg:px-[0px]">
        {/* Desktop inspect values (lg):
            Section padding: pt-120px pb-120px
            Our Programs: 32px / 38px, tracking 0em, color #D98956, mb 8px
            Daycare heading: 64px / 77px, tracking 0em, colors #D98956 + #6F5F52, mt 8px
            Heading-to-grid gap: 64px, container max-width 1200px
            Grid: 612px | 420px, column gap 64px
            Large image: 612x408px, radius 32px
            Small image: 260x170px, radius 24px, mt 12px
            Right heading: 40px / 51.6px
            Body text: 20px / 20px, tracking 0em, color #000000
            Left list: title 16px / 24px, bullets 16px / 24px, pl 18px, item gap 8px
            Right list: 20px / 20px, pl 18px, item gap 10px, section gaps 20px
        */}
        <div className="flex min-h-[clamp(140px,16vw,180px)] flex-col items-center justify-center text-center text-[#6F5F52]">
          <p className="text-[clamp(32px,3.9vw,52px)] font-semibold leading-[1.2] text-[#6F5F52] lg:mb-[8px] lg:text-[32px] lg:leading-[38px] lg:tracking-[0em] lg:text-[#D98956]">
            Our Programs
          </p>
          <h2 className="mt-[6px] text-[clamp(26px,2.6vw,36px)] font-semibold leading-[1.25] lg:mt-[8px] lg:text-[64px] lg:leading-[77px] lg:tracking-[0em]">
            <span className="text-[#D98956]">Daycare</span>{" "}
            <span className="text-[#6F5F52]">Program (Ages 1–5)</span>
          </h2>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[612px_420px] lg:gap-[64px]">
          <div className="flex flex-col gap-6 lg:gap-[32px]">
            <div className="h-[clamp(260px,30vw,380px)] w-full overflow-hidden rounded-[32px] bg-white lg:h-[408px] lg:w-[612px] lg:rounded-[32px]">
              <img
                src={daycareMain}
                alt="Daycare classroom activities"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-[32px]">
              <div className="max-w-[360px] text-[#6F5F52] lg:max-w-[360px] lg:text-[#6F5F52]">
                <h3 className="text-[18px] font-semibold leading-[26px] lg:text-[16px] lg:leading-[24px] lg:tracking-[0em]">
                  What makes our daycare different:
                </h3>
                <ul className="mt-[14px] list-disc space-y-[10px] pl-[18px] text-[14px] leading-[22px] lg:mt-[12px] lg:space-y-[8px] lg:pl-[18px] lg:text-[16px] lg:leading-[24px] lg:tracking-[0em]">
                  <li>Small class sizes with low teacher-child ratios</li>
                  <li>Qualified educators who guide, observe, and scaffold learning</li>
                  <li>
                    Balanced rhythm of active play, focused learning, rest, and free
                    exploration
                  </li>
                </ul>
              </div>

              <div className="daycare-small-image h-[clamp(140px,16vw,180px)] w-full max-w-[240px] overflow-hidden rounded-[24px] bg-white lg:mt-[12px] lg:h-[170px] lg:w-[260px] lg:max-w-none lg:rounded-[24px]">
                <img
                  src={daycareSmall}
                  alt="Children learning together"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="max-w-[520px] text-[#6F5F52] lg:max-w-[420px]">
            <h3 className="text-[20px] font-semibold leading-[28px] lg:text-[40px] lg:leading-[51.6px] lg:tracking-[0em] lg:text-[#6F5F52]">
              Half-Day &amp; Full-Day Options | Open All Year
            </h3>
            <p className="mt-[18px] text-[16px] leading-[28px] lg:mt-[20px] lg:text-[20px] lg:leading-[20px] lg:tracking-[0em] lg:text-[#000000]">
              Our Daycare Program is designed for families who seek more than
              supervision. At Kinderra Play, daycare is a learning-rich environment
              where care and education are seamlessly integrated.
            </p>
            <p className="mt-[18px] text-[16px] leading-[28px] lg:mt-[20px] lg:text-[20px] lg:leading-[20px] lg:tracking-[0em] lg:text-[#000000]">
              Children are supported through:
            </p>
            <ul className="mt-[12px] list-disc space-y-[12px] pl-[18px] text-[16px] leading-[28px] lg:mt-[12px] lg:space-y-[10px] lg:pl-[18px] lg:text-[20px] lg:leading-[20px] lg:tracking-[0em] lg:text-[#000000]">
              <li>Guided play with clear learning intentions</li>
              <li>Calm, predictable daily routines that build security</li>
              <li>
                Development of independence, communication, and social skills
              </li>
            </ul>
            <p className="mt-[18px] text-[16px] leading-[28px] lg:mt-[20px] lg:text-[20px] lg:leading-[20px] lg:tracking-[0em] lg:text-[#000000]">
              Age-appropriate early literacy and numeracy foundations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DaycareProgram;
