import oshcImage from "../../assets/Rectangle 31 (1).png";

const OSHC = () => {
  return (
    <section className="section-padding w-full bg-white font-['Fredoka',sans-serif] lg:py-[120px]">
      <div className="section-container flex w-full flex-col gap-10 lg:gap-[64px] lg:max-w-[1200px] lg:px-[0px]">
        {/* TITLE */}
        <div className="text-center text-[#6F5F52]">
          <h2 className="text-[clamp(28px,3.2vw,44px)] font-semibold leading-[1.2] lg:text-[64px] lg:leading-[77px]">
            <span className="text-[#D98956]">Outside</span>{" "}
            <span className="text-[#6F5F52]">School Hours Care (OSHC)</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid items-start gap-8 lg:grid-cols-[520px_1fr] lg:gap-[64px]">
          {/* LEFT TEXT */}
          <div className="order-2 flex flex-col text-[#6F5F52] lg:order-1 lg:-mt-[10px]">
            {/* SUBTITLE */}
           <h3 className="text-center tracking-[0.19em] text-[20px] font-semibold leading-[28px] lg:text-[40px] lg:leading-[51.6px]">
  <span className="relative inline-block lg:translate-x-[20px]">
    Afternoon Program |
  </span>
  <br className="hidden lg:block" />
   <span className="relative inline-block lg:translate-x-[110px]">
    5.00–7.00 PM
  </span>
</h3>

            {/* BODY TEXT (Figma: 20px regular, black) */}
            <div className="mt-[24px] space-y-[20px] text-[16px] leading-[28px] lg:text-[20px] lg:leading-[20px] lg:text-[#000000]">
              <p>
                The Kinderra OSHC Program is intentionally designed as a gentle
                transition after a full learning day
              </p>

              <p>Rather than adding academic pressure, this program prioritizes:</p>

              {/* LIST 1 */}
              <ul className="list-disc space-y-[10px] pl-[18px]">
                <li>
                  <span className="font-semibold">Free and imaginative play</span>
                </li>
                <li>
                  <span className="font-semibold">
                    Relaxation and emotional regulation
                  </span>
                </li>
                <li>
                  <span className="font-semibold">Light enrichment</span>{" "}
                  activities based on children’s interests
                </li>
              </ul>

              <p>Typical experiences may include :</p>

              {/* LIST 2 */}
              <ul className="list-disc space-y-[10px] pl-[18px]">
                <li>
                  <span className="font-semibold">Creative arts</span> and role play
                </li>
                <li>
                  <span className="font-semibold">Movement</span>, yoga, or outdoor play
                </li>
                <li>
                  <span className="font-semibold">Music</span>, storytelling, and hands-on
                  exploration
                </li>
              </ul>

              {/* LAST LINE (Bold full sentence) */}
              <p className="font-semibold">
                Afternoons at Kinderra are calm, joyful, and child-led,
                supporting wellbeing and social connection.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 w-full overflow-hidden rounded-[32px] bg-white lg:order-2 lg:h-[420px]">
            <img
              src={oshcImage}
              alt="Outside school hours care activities"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OSHC;
