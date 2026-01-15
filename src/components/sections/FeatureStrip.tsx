const features = [
  {
    title: "Adaptation of Australia’s\nEYLF Curriculum",
    icon: (
      <svg
        className="h-[32px] w-[32px]"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="12" r="6" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M13 7V12H19"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 21L8 29L16 25L24 29L21.5 21"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Safe Environment &\nTrained Teachers",
    icon: (
      <svg
        className="h-[32px] w-[32px]"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 4L26 8V16C26 22 21 26 16 28C11 26 6 22 6 16V8L16 4Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 16.5L15 19L20.5 13.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Integrated Preschool &\nDaycare",
    icon: (
      <svg
        className="h-[32px] w-[32px]"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 10L12 4L20 10"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 10V20H18V10"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M10 20V14H14V20"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Premium Experience – Smart\nPricing",
    icon: (
      <svg
        className="h-[32px] w-[32px]"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3L14.9 8.6L21 9.2L16.5 13.1L17.8 19L12 15.8L6.2 19L7.5 13.1L3 9.2L9.1 8.6L12 3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const FeatureStrip = () => {
  return (
    <section className="w-full bg-[#F6EFE7]">
      <div className="mx-auto flex min-h-[120px] w-full max-w-[1480px] items-center px-[48px] py-[20px]">
        <div className="grid w-full items-center gap-x-[40px] gap-y-[24px] text-[#6F5F52] md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-center gap-[18px] text-[18px] leading-[24px]"
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
