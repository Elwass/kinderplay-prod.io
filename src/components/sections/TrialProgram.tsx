import imgTrial from "../../assets/Rectangle 31 (3).png";

const whatsappLink = "https://wa.me/6288901910210";

export default function TrialProgram() {
  return (
    <section className="trial-section section-padding relative w-full bg-white font-['Fredoka',sans-serif] lg:py-[120px]">
      <div className="section-container mx-auto w-full max-w-[1200px]">
        {/* Title (Figma feel: 64 / 77) */}
        <h2 className="text-center text-[clamp(28px,3.2vw,44px)] font-semibold leading-[1.2] text-[#6F5F52] lg:text-[64px] lg:leading-[77px]">
          <span className="text-[#D98956]">Trial</span> Program
        </h2>

        {/* Grid (left text 420px-ish, right image 612px-ish, gap 64) */}
        <div className="mt-10 grid items-start gap-10 lg:mt-[64px] lg:grid-cols-[420px_612px] lg:gap-[64px]">
          {/* Left */}
          <div className="text-[#6F5F52] lg:text-[#000000]">
            {/* Subtitle (SemiBold 40 / 51.6) */}
            <h3 className="text-[20px] font-semibold leading-[28px] text-[#6F5F52] lg:text-[40px] lg:leading-[51.6px]">
              Free Trial | 1 Hour × 2 Days
            </h3>

            {/* Body (Regular 20 / 20) - NOT bold */}
            <p className="mt-[18px] text-[16px] leading-[28px] lg:mt-[20px] lg:text-[20px] lg:leading-[20px] lg:text-[#000000]">
              Our Trial Program allows families to experience Kinderra Play before making a
              commitment.
            </p>

            {/* Label (Medium-ish 20 / 20) - BOLD-ish (medium) */}
            <p className="mt-[18px] text-[16px] font-medium leading-[28px] lg:mt-[20px] lg:text-[20px] lg:leading-[20px] lg:text-[#000000]">
              During the trial, children :
            </p>

            {/* Bullets (Regular 20/20) - NOT bold */}
            <ul className="mt-[12px] list-disc space-y-[12px] pl-[18px] text-[16px] leading-[28px] lg:mt-[12px] lg:space-y-[10px] lg:text-[20px] lg:leading-[20px] lg:text-[#000000]">
              <li>Join regular class routines</li>
              <li>Engage in guided play activities</li>
              <li>Begin building comfort with educators and peers</li>
            </ul>

            {/* Label (Medium-ish) - BOLD-ish (medium) */}
            <p className="mt-[18px] text-[16px] font-medium leading-[28px] lg:mt-[20px] lg:text-[20px] lg:leading-[20px] lg:text-[#000000]">
              Parents gain insight into :
            </p>

            {/* Bullets (Regular) - NOT bold */}
            <ul className="mt-[12px] list-disc space-y-[12px] pl-[18px] text-[16px] leading-[28px] lg:mt-[12px] lg:space-y-[10px] lg:text-[20px] lg:leading-[20px] lg:text-[#000000]">
              <li>Creative arts and role play</li>
              <li>Movement, yoga, or outdoor play</li>
              <li>Music, storytelling, and hands-on exploration</li>
            </ul>
          </div>

          {/* Right image (612x-ish, radius 32) */}
          <div className="w-full overflow-hidden rounded-[32px] bg-white lg:h-[408px] lg:w-[612px]">
            <img
              className="h-full w-full object-cover"
              src={imgTrial}
              alt="Trial Program classroom"
            />
          </div>
        </div>

        {/* CTA center (Figma feel) */}
        <div className="mt-[40px] flex flex-col items-center justify-center lg:mt-[56px]">
          <a
            className="inline-flex flex-col items-center justify-center rounded-[999px] bg-[#D98956] px-[44px] py-[18px] text-center text-[12px] font-extrabold leading-[1.15] text-white shadow-[0_10px_22px_rgba(0,0,0,0.10)] transition-transform duration-200 hover:-translate-y-[1px]"
            href={whatsappLink}
          >
            REGISTER OUR
            <br />
            TRIAL CLASS
          </a>

          <p className="mt-[18px] w-full max-w-[362px] text-center text-[16px] leading-[24px] text-[#6B5A4A] lg:text-[16px] lg:leading-[22px] lg:font-medium lg:text-[#000000]">

            A calm, supportive first step into
            <br />
            structured fun learning
          </p>
        </div>
      </div>

      {/* Decorative blobs tetap pakai CSS kamu */}
      <span className="trial-decor trial-decor-left" aria-hidden="true" />
      <span className="trial-decor trial-decor-right" aria-hidden="true" />
    </section>
  );
}
