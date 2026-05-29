const techs = [
  "React",
  "Node.js",
  "Next.js",
  "NestJS",
  "MongoDB",
  "PostgreSQL",
  "TypeScript",
  "PHP",
  "Laravel",
  "AI/ML",
  "Python",
  "Docker",
  "AWS",
  "Tailwind CSS",
  "GraphQL",
  "Redis",
  "WordPress",
  "Shopify",
];

export function TechMarquee() {
  const doubled = [...techs, ...techs];
  return (
    <div className="relative w-full overflow-hidden py-6 border-y border-border/40 bg-muted/40">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((tech, i) => (
          <span
            key={i}
            className="mx-8 text-sm font-medium uppercase tracking-widest text-muted-foreground/70 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold/50 inline-block" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
