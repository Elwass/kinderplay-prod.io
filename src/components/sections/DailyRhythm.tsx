const schedule = [
  {
    time: "08.00",
    title: "Morning welcome",
    description: "Kegiatan sambut hangat, permainan bebas, dan circle time.",
  },
  {
    time: "09.30",
    title: "Learning stations",
    description: "Aktivitas tematik di area seni, sains, dan literasi.",
  },
  {
    time: "11.00",
    title: "Outdoor play",
    description: "Gerak aktif di playground dan sensory garden.",
  },
  {
    time: "12.30",
    title: "Lunch & rest",
    description: "Makan siang sehat diikuti waktu istirahat yang tenang.",
  },
];

const DailyRhythm = () => {
  return (
    <section className="bg-beige px-6 py-16 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Daily Rhythm
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-text md:text-4xl">
              Ritme harian yang menenangkan.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-text/70">
            Rutinitas yang konsisten membantu anak merasa aman dan membangun kebiasaan
            positif setiap hari.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {schedule.map((item) => (
            <div key={item.time} className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-semibold text-primary">{item.time}</span>
                <span className="h-2 w-2 rounded-full bg-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-text">{item.title}</h3>
              <p className="mt-2 text-sm text-text/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailyRhythm;
