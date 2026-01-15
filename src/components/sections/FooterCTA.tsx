import Button from "../ui/Button";

const FooterCTA = () => {
  return (
    <section className="bg-beige px-6 pb-20 pt-10 md:px-16">
      <div className="mx-auto max-w-6xl rounded-[40px] bg-primary px-8 py-12 text-white md:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Siap memulai hari ceria bersama Kinderra?
            </h2>
            <p className="mt-3 text-sm text-white/80">
              Hubungi tim kami untuk jadwal kunjungan atau konsultasi program terbaik
              untuk si kecil.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Button className="bg-white text-primary">Hubungi Kami</Button>
            <Button variant="secondary" className="border-white text-white">
              Lihat Brosur
            </Button>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/70">
          <span>Jl. Kinderra No. 8, Jakarta Selatan</span>
          <span>hello@kinderraplay.com</span>
          <span>+62 812 1234 5678</span>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
