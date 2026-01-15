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
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FAD6D2] text-[#F26B5B]">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path d="M12 21s-6.4-4.5-8.6-7.6C1.6 10.7 2.2 7.5 4.6 6.2c1.7-.9 3.7-.6 5 1 1.3-1.6 3.3-1.9 5-1 2.4 1.3 3 4.5 1.2 7.2C18.4 16.5 12 21 12 21z" />
                </svg>
              </div>
              <h3 className="text-[18px] font-semibold leading-[24px]">Emotional</h3>
              <ul className="list-disc space-y-2 pl-5 text-[14px] leading-[22px]">
                <li>Anak merasa aman dan percaya diri</li>
                <li>Mampu mengenali dan mengekspresikan emosi</li>
                <li>Tidak mudah overwhelmed</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 text-[#6F5F52]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D9F3E3] text-[#4CAF6A]">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path d="M4 20h4V8H4v12zm6 0h4V4h-4v16zm6 0h4v-6h-4v6z" />
                </svg>
              </div>
              <h3 className="text-[18px] font-semibold leading-[24px]">Life Skill</h3>
              <ul className="list-disc space-y-2 pl-5 text-[14px] leading-[22px]">
                <li>Mengikuti rutinitas harian</li>
                <li>Makan, merapikan, mandiri</li>
                <li>Main/beraktivitas sendiri (sesuai usia)</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 text-[#6F5F52]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D8E7FF] text-[#4B7BFF]">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h3v4l5-4h8c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
                </svg>
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
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFE9B9] text-[#F4A422]">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path d="M9 21h6v-1H9v1zm3-20C7.9 1 5 3.9 5 7c0 2.4 1.5 4.4 3.6 5.4L9 17h6l.4-4.6C17.5 11.4 19 9.4 19 7c0-3.1-2.9-6-7-6z" />
                </svg>
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
