import oshcImage from "../../assets/Rectangle 31 (1).png";

const OSHC = () => {
  return (
    <section className="section-padding w-full bg-white">
      <div className="section-container flex w-full flex-col gap-10 lg:gap-12">
        <div className="text-center text-[#6F5F52]">
          <h2 className="text-[clamp(28px,3.2vw,44px)] font-semibold leading-[1.2]">
            <span className="text-[#D98956]">Outside</span> School Hours Care
            (OSHC)
          </h2>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-12">
          <div className="order-2 flex flex-col text-[#6F5F52] lg:order-1">
            <h3 className="text-[20px] font-semibold leading-[28px]">
              Afternoon Program | 5.00–7.00 PM
            </h3>
            <p className="mt-[18px] text-[16px] leading-[28px]">
              Our OSHC program offers a calm, engaging space after school where
              children can recharge, connect with friends, and explore meaningful
              activities before heading home.
            </p>
            <ul className="mt-[16px] list-disc space-y-[12px] pl-[18px] text-[16px] leading-[28px]">
              <li>Healthy snack and wind-down routines</li>
              <li>Creative projects and enrichment activities</li>
              <li>Guided homework support and reading time</li>
              <li>Social play that builds confidence and empathy</li>
            </ul>
          </div>

          <div className="order-1 h-[clamp(260px,30vw,380px)] w-full overflow-hidden rounded-[32px] bg-white lg:order-2">
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
