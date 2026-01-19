import readinessImg from "../../assets/Rectangle 41 (1).png";

const Readiness = () => {
  return (
    <section className="section-padding section-gradient section-animate relative w-full overflow-hidden bg-[#F6EFE7]">
      <div className="section-ornament section-ornament--top-right" aria-hidden="true" />
      <div className="section-ornament section-ornament--bottom-left" aria-hidden="true" />
      <div className="section-container relative z-10 flex w-full flex-col gap-10 lg:gap-12">
        <div className="text-center text-[#6F5F52]">
          <h2 className="text-[clamp(34px,3.2vw,48px)] font-semibold leading-[1.2]">
            What is meant by{" "}
            <span className="text-[#D98956]">Readiness</span> here?
          </h2>
          <p className="mx-auto mt-[14px] max-w-[640px] text-[clamp(14px,1.1vw,18px)] leading-[1.5]">
            Readiness at Kinderra is a child’s readiness to learn and navigate life,
            not merely the ability to read or write early.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:items-center lg:gap-12">
          <div className="h-[clamp(220px,26vw,320px)] w-full overflow-hidden rounded-[32px] bg-white">
            <img
              src={readinessImg}
              alt="Children learning"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="readiness-items grid gap-6 sm:grid-cols-2" data-reveal-stagger>
            <div className="readiness-item flex flex-col gap-3 text-[#6F5F52]">
              <div className="flex h-12 w-12 items-center justify-center">
                <img
                  src={new URL("../../assets/IconRead1.png", import.meta.url).href}
                  alt="Emotional icon"
                  className="h-10 w-10 object-contain"   // 40px
                />
              </div>
              <h3 className="text-[18px] font-semibold leading-[24px]">Emotional</h3>
              <ul className="readiness-list list-disc space-y-2 pl-5 text-[14px] leading-[22px]">
                <li>The child feels safe and confident</li>
                <li>Able to recognize and express emotions</li>
                <li>Not easily overwhelmed</li>
              </ul>
            </div>

            <div className="readiness-item flex flex-col gap-3 text-[#6F5F52]">
              <div className="flex h-12 w-12 items-center justify-center">
                <img
                  src={new URL("../../assets/IconRead2.png", import.meta.url).href}
                  alt="Life skill icon"
                  className="h-10 w-10 object-contain"   // 40px
                />
              </div>
              <h3 className="text-[18px] font-semibold leading-[24px]">Life Skill</h3>
              <ul className="readiness-list list-disc space-y-2 pl-5 text-[14px] leading-[22px]">
                <li>Follows daily routines</li>
                <li>Eats independently, tidies up toys, and chooses activities independently</li>
                <li>(Age-appropriate)</li>
              </ul>
            </div>

            <div className="readiness-item flex flex-col gap-3 text-[#6F5F52]">
              <div className="flex h-12 w-12 items-center justify-center">
                <img
                  src={new URL("../../assets/IconRead3.png", import.meta.url).href}
                  alt="Social and communication icon"
                  className="h-10 w-10 object-contain"   // 40px
                />
              </div>
              <h3 className="text-[18px] font-semibold leading-[24px]">
                Social &amp; Communication
              </h3>
              <ul className="readiness-list list-disc space-y-2 pl-5 text-[14px] leading-[22px]">
                <li>Interacts with peers and teachers</li>
                <li>Listens and takes turns to express needs</li>
                <li>Bilingual exposure (English–Indonesian)</li>
              </ul>
            </div>

            <div className="readiness-item flex flex-col gap-3 text-[#6F5F52]">
              <div className="flex h-12 w-12 items-center justify-center">
                <img
                  src={new URL("../../assets/IconRead4.png", import.meta.url).href}
                  alt="Cognitive icon"
                  className="h-10 w-10 object-contain"   // 40px
                />
              </div>
              <h3 className="text-[18px] font-semibold leading-[24px]">Cognitive</h3>
              <ul className="readiness-list list-disc space-y-2 pl-5 text-[14px] leading-[22px]">
                <li>Curiosity and critical thinking</li>
                <li>Solves simple problems</li>
                <li>Exploration and creativity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Readiness;
