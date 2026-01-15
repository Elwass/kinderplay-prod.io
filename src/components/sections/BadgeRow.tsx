const badges = [
  "Play-based learning",
  "Montessori inspired",
  "Bilingual environment",
  "Character building",
  "Outdoor exploration",
];

const BadgeRow = () => {
  return (
    <section className="bg-beige px-6 py-10 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3">
        {badges.map((badge) => (
          <span
            key={badge}
            className="rounded-full bg-white px-4 py-2 text-xs font-medium text-text shadow-sm"
          >
            {badge}
          </span>
        ))}
      </div>
    </section>
  );
};

export default BadgeRow;
