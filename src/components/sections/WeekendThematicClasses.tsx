import rect312 from "../../assets/Rectangle 31 (2).png";
import vector2 from "../../assets/Vector (2).png";

export default function WeekendThematicClasses() {
  return (
    <section className="section-padding w-full bg-white font-['Fredoka',sans-serif] lg:py-[120px]">
      <div className="section-container mx-auto flex w-full max-w-[1200px] flex-col lg:gap-[64px]">
        {/* Title (Figma: 64 / 77) */}
        <h2 className="text-center text-[clamp(28px,3.2vw,44px)] font-semibold leading-[1.2] text-[#6F5F52] lg:text-[64px] lg:leading-[77px]">
          Weekend <span className="text-[#D98956]">Thematic Classes</span>
        </h2>

        {/* Grid */}
        <div className="relative mt-10 grid items-start gap-10 lg:mt-0 lg:grid-cols-[612px_420px] lg:gap-[64px]">
          {/* Left */}
          <div className="flex flex-col gap-8">
            {/* Main Image */}
            <div className="w-full overflow-hidden rounded-[32px] bg-white lg:w-[612px]">
              <img
                className="h-[clamp(260px,30vw,380px)] w-full object-cover lg:h-[408px]"
                src={rect312}
                alt="Weekend Thematic Classes"
              />
            </div>

            {/* Ideal block (DITURUNKAN + BOLD sesuai Figma) */}
            <div className="max-w-[520px] lg:max-w-[520px] lg:mt-[44px]">
              <p className="text-[16px] leading-[28px] text-[#6F5F52] lg:text-[20px] lg:leading-[20px] lg:text-[#000000]">
                <span className="font-semibold">
                  This program is ideal for families who want :
                </span>
              </p>

              <ul className="mt-[12px] list-disc space-y-[10px] pl-[18px] text-[16px] leading-[28px] text-[#6F5F52] lg:text-[20px] lg:leading-[20px] lg:text-[#000000]">
                {/* 1: BOLD semua kalimat */}
                <li>
                  <span className="font-semibold">Quality weekend activities</span>
                </li>

                {/* 2: BOLD hanya "A gentle" */}
                <li>
  <span className="font-semibold">A gentle</span> introduction to Kinderra <br />
  before full enrollment
</li>

<li>
  Meaningful parent–child bonding <br />
  experiences
</li>
              </ul>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col">
            {/* Subtitle */}
            <h3 className="text-[20px] font-semibold leading-[28px] text-[#6F5F52] lg:text-[40px] lg:leading-[51.6px]">
              Ages 1.5–5 | Open to Kinderra Families &amp; the Public
            </h3>

            {/* Paragraphs */}
            <p className="mt-[20px] text-[16px] leading-[28px] text-[#6F5F52] lg:text-[20px] lg:leading-[20px] lg:text-[#000000]">
              Our Weekend Thematic Classes offer a relaxed and engaging way for children to explore
              learning through weekly changing themes.
            </p>

            <p className="mt-[20px] text-[16px] leading-[28px] text-[#6F5F52] lg:text-[20px] lg:leading-[20px] lg:text-[#000000]">
              Designed as short, meaningful experiences, these sessions support:
            </p>

            {/* Bullet group 1: bold hanya item pertama */}
            <ul className="mt-[12px] list-disc space-y-[10px] pl-[18px] text-[16px] leading-[28px] text-[#6F5F52] lg:text-[20px] lg:leading-[20px] lg:text-[#000000]">
              <li>
                <span className="font-semibold">Sensory exploration and creativity</span>
              </li>
              <li>Fine and gross motor development</li>
              <li>Social interaction and confidence building</li>
            </ul>

            <p className="mt-[20px] text-[16px] leading-[28px] text-[#6F5F52] lg:text-[20px] lg:leading-[20px] lg:text-[#000000]">
              Each theme is delivered through :
            </p>

            {/* Bullet group 2: bold item 2 & 3 saja */}
            <ul className="mt-[12px] list-disc space-y-[10px] pl-[18px] text-[16px] leading-[28px] text-[#6F5F52] lg:text-[20px] lg:leading-[20px] lg:text-[#000000]">
              <li>Sensory play</li>
              <li>
                <span className="font-semibold">Art and craft</span>
              </li>
              <li>
                <span className="font-semibold">Imaginative and role play</span>
              </li>
              <li>Nature-based or outdoor activities (where possible)</li>
            </ul>
          </div>

          {/* Decor vector (DIKECILIN + posisi tengah bawah) */}
          <img
            className="pointer-events-none absolute -bottom-[-9px] left-1/2 hidden w-[160px] -translate-x-1/2 select-none lg:block left-[500px]"
            src={vector2}
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
