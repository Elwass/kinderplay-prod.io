import readinessImg from "../../assets/Rectangle 41 (1).png";

const Readiness = () => {
  return (
    <section className="section-padding w-full bg-[#F6EFE7]">
      <div className="section-container flex w-full flex-col gap-10 lg:gap-12">
        <div className="text-center text-[#6F5F52]">
          <h2 className="text-[clamp(34px,3.2vw,48px)] font-semibold leading-[1.2]">
            Apa yang dimaksud dengan{" "}
            <span className="text-[#D98956]">Readiness</span> di sini?
          </h2>
          <p className="mx-auto mt-[14px] max-w-[640px] text-[clamp(14px,1.1vw,18px)] leading-[1.5]">
            Readiness di Kinderra adalah kesiapan anak untuk belajar &amp; hidup,
            bukan sekedar bisa membaca atau menulis lebih cepat.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:items-center lg:gap-12">
          <div className="h-[clamp(260px,30vw,360px)] w-full overflow-hidden rounded-[32px] bg-white">
            <img
              src={readinessImg}
              alt="Children learning"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-3 text-[#6F5F52]">
              <div className="flex h-12 w-12 items-center justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}assets/IconRead1.png`}
                  alt="Emotional icon"
                  className="h-6 w-6 object-contain"
                />
              </div>
              <h3 className="text-[18px] font-semibold leading-[24px]">Emotional</h3>
              <ul className="list-disc space-y-2 pl-5 text-[14px] leading-[22px]">
                <li>Anak merasa aman dan percaya diri</li>
                <li>Mampu mengenali dan mengekspresikan emosi</li>
                <li>Tidak mudah overwhelmed</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 text-[#6F5F52]">
              <div className="flex h-12 w-12 items-center justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}assets/IconRead2.png`}
                  alt="Life skill icon"
                  className="h-6 w-6 object-contain"
                />
              </div>
              <h3 className="text-[18px] font-semibold leading-[24px]">Life Skill</h3>
              <ul className="list-disc space-y-2 pl-5 text-[14px] leading-[22px]">
                <li>Mengikuti rutinitas harian</li>
                <li>Makan, merapikan, mandiri</li>
                <li>Main/beraktivitas sendiri (sesuai usia)</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 text-[#6F5F52]">
              <div className="flex h-12 w-12 items-center justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}assets/IconRead3.png`}
                  alt="Social and communication icon"
                  className="h-6 w-6 object-contain"
                />
              </div>
              <h3 className="text-[18px] font-semibold leading-[24px]">
                Social &amp; Communication
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-[14px] leading-[22px]">
                <li>Berinteraksi dengan teman dan guru</li>
                <li>Mendengarkan, bergiliran, menyampaikan kebutuhan</li>
                <li>Penggunaan bilingual (EN-ID)</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 text-[#6F5F52]">
              <div className="flex h-12 w-12 items-center justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}assets/IconRead4.png`}
                  alt="Cognitive icon"
                  className="h-6 w-6 object-contain"
                />
              </div>
              <h3 className="text-[18px] font-semibold leading-[24px]">Cognitive</h3>
              <ul className="list-disc space-y-2 pl-5 text-[14px] leading-[22px]">
                <li>Rasa ingin tahu dan berpikir kritis</li>
                <li>Memecahkan masalah sederhana</li>
                <li>Eksplorasi dan kreativitas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Readiness;
