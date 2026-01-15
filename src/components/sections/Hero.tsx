import heroBg from "../../assets/Hero Section.png";
import logo from "../../assets/kinderra-logo.png";

const Hero = () => {
  return (
    <section className="relative w-screen min-h-screen overflow-hidden">
      <img
        src={heroBg}
        alt="Kinderra Play background"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="pointer-events-none absolute bottom-0 left-0 z-[1] h-[clamp(120px,12vw,200px)] w-full bg-gradient-to-b from-transparent to-[#F6EFE7]" />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1480px] flex-col items-center px-6 pb-[clamp(32px,5vw,80px)] pt-[clamp(28px,4vw,56px)] lg:px-16 xl:px-10">
        <div className="hero-topbar">
          <img
            src={logo}
            alt="Kinderra Play"
            className="hero-logo"
          />

          <div className="hero-announcement">
            <button
              type="button"
              aria-label="Previous announcement"
              className="h-[clamp(10px,1.1vw,12px)] w-[clamp(10px,1.1vw,12px)] text-[#D98956] opacity-[0.75]"
            >
              <svg
                className="h-full w-full"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 2L4 6L8 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="hero-pill">
              <div className="hero-pill__content">
                <svg
                  className="hero-pill__icon"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2.5C7.7 2.5 5.8 4.4 5.8 6.7V9.6C5.8 10 5.7 10.4 5.5 10.8L4.4 12.7C4.1 13.2 4.5 13.8 5.1 13.8H14.9C15.5 13.8 15.9 13.2 15.6 12.7L14.5 10.8C14.3 10.4 14.2 10 14.2 9.6V6.7C14.2 4.4 12.3 2.5 10 2.5Z"
                    stroke="#FFFFFF"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.3 15.2C8.6 16.1 9.2 16.6 10 16.6C10.8 16.6 11.4 16.1 11.7 15.2"
                    stroke="#FFFFFF"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="hero-pill__text">
                  <span className="sm:hidden">
                    JOIN TRIAL CLASS &amp; PLAYDATE{" "}
                    <span className="font-semibold">JAN 17 &amp; 24!</span>
                  </span>
                  <span className="hidden sm:inline">
                    JOIN OUR TRIAL CLASS &amp; STORY BOOK PLAYDATE{" "}
                    <span className="font-semibold">ON JANUARY 17 &amp; 24!</span>
                  </span>
                </p>
              </div>
            </div>

            <button
              type="button"
              aria-label="Next announcement"
              className="h-[clamp(10px,1.1vw,12px)] w-[clamp(10px,1.1vw,12px)] text-[#D98956] opacity-[0.75]"
            >
              <svg
                className="h-full w-full"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 2L8 6L4 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <button
            type="button"
            className="hero-register-button"
          >
            <span className="text-[clamp(12px,1vw,14px)] font-semibold uppercase text-[#6F5F52]">
              Register
            </span>
            <svg
              className="h-[clamp(10px,1vw,14px)] w-[clamp(10px,1vw,14px)]"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6H10M6 2L10 6L6 10"
                stroke="#6F5F52"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="relative -translate-y-10 lg:-translate-y-16 2xl:-translate-y-20">
          <div className="mt-[clamp(36px,6vw,96px)] flex w-full flex-col items-center text-center">
            <h1 className="text-[clamp(32px,3.4vw,64px)] font-semibold leading-[1.1] text-[#6F5F52]">
              Early Learning Center
            </h1>
            <h2 className="mt-[clamp(6px,1.2vw,14px)] text-[clamp(18px,1.6vw,32px)] font-medium leading-[1.2] text-[#6F5F52]">
              Play – Learn – Grow
            </h2>
          </div>

          <div className="mt-[clamp(18px,3.5vw,44px)] flex w-full max-w-[900px] flex-col items-center gap-[clamp(10px,2.2vw,20px)] text-center text-[clamp(14px,1.6vw,20px)] leading-[1.5] text-[#6F5F52]">
            <p>
              <span className="font-semibold">
                Kinderra Play, a premium early learning center
              </span>{" "}
              supporting the development of{" "}
              <span className="font-semibold">confident</span>,{" "}
              <span className="font-semibold">independent</span>, and{" "}
              <span className="font-semibold">communicative</span> children through guided{" "}
              <span className="font-semibold">play, discovery, and joy.</span>
            </p>
            <p>
              Inspired by the{" "}
              <span className="font-semibold">
                Australian Early Years Learning Framework
              </span>
              , Kinderra Play delivers a calm, intentional, and professionally designed
              and structured learning experience—where play is purposeful and every day
              builds clear progress.
            </p>
          </div>

          <div className="hero-cta-buttons">
            <button
              type="button"
              className="hero-cta hero-cta--primary"
            >
              <span>Register for a</span>
              <span>Trial Class</span>
            </button>
            <button
              type="button"
              className="hero-cta hero-cta--secondary"
            >
              <span>Get Enrollment</span>
              <span>Information</span>
            </button>
          </div>

          <div className="mb-[clamp(24px,4vw,64px)] mt-[clamp(16px,3vw,48px)] flex flex-col items-center justify-center gap-[clamp(16px,3vw,44px)] text-[#6F5F52] lg:flex-row">
            <div className="text-center text-[clamp(22px,2.8vw,40px)] font-medium leading-[1.1]">
              1-5 y.o
              <div className="mt-[clamp(6px,1vw,8px)] text-[clamp(14px,1.6vw,20px)] font-normal leading-[1.2]">
                Age
              </div>
            </div>
            <div className="hidden h-[clamp(40px,4.5vw,53px)] w-[3px] rounded-[31px] bg-[#6F5F52] lg:block" />
            <div className="text-center text-[clamp(22px,2.8vw,40px)] font-medium leading-[1.1]">
              Bilingual
              <div className="mt-[clamp(6px,1vw,8px)] text-[clamp(14px,1.6vw,20px)] font-normal leading-[1.2]">
                Language
              </div>
            </div>
            <div className="hidden h-[clamp(40px,4.5vw,53px)] w-[3px] rounded-[31px] bg-[#6F5F52] lg:block" />
            <div className="text-center text-[clamp(22px,2.8vw,40px)] font-medium leading-[1.1]">
              Full &amp; Half Day Programs
              <div className="mt-[clamp(6px,1vw,8px)] text-[clamp(14px,1.6vw,20px)] font-normal leading-[1.2]">
                Program
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
