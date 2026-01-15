const features = [
  {
    title: "Adaptation of Australia’s\nEYLF Curriculum",
    icon: (
      <img
        src={new URL("../../assets/badge 1.png", import.meta.url).href}
        alt=""
        aria-hidden="true"
        className="feature-badge"
      />
    ),
  },
  {
    title: "Safe Environment &\nTrained Teachers",
    icon: (
      <img
        src={new URL("../../assets/badge 2.png", import.meta.url).href}
        alt=""
        aria-hidden="true"
        className="feature-badge"
      />
    ),
  },
  {
    title: "Integrated Preschool &\nDaycare",
    icon: (
      <img
        src={new URL("../../assets/badge 3.png", import.meta.url).href}
        alt=""
        aria-hidden="true"
        className="feature-badge"
      />
    ),
  },
  {
    title: "Premium Experience – Smart\nPricing",
    icon: (
      <img
        src={new URL("../../assets/badge 4.png", import.meta.url).href}
        alt=""
        aria-hidden="true"
        className="feature-badge"
      />
    ),
  },
];

const FeatureStrip = () => {
  return (
    <section className="feature-strip w-full">
      <div className="feature-strip__inner mx-auto flex w-full max-w-[1480px] items-center justify-center px-[48px]">
        <div className="grid w-full max-w-[1200px] items-center justify-items-center gap-x-[40px] gap-y-[24px] text-[#6F5F52] md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-center justify-center gap-[18px] text-[18px] leading-[24px]"
            >
              <div className="text-[#6F5F52]">{feature.icon}</div>
              <p className="whitespace-pre-line font-medium">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureStrip;
