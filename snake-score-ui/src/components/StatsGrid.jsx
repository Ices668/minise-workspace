import StatCard from "./StatCard";

const stats = [
  { title: "High Score", icon: "emoji_events", value: "5,840" },
  { title: "Level", icon: "trending_up", value: "12" },
];

function StatsGrid() {
  return (
    <div className="mt-8 grid w-full max-w-2xl grid-cols-1 gap-6 md:grid-cols-2">
      {stats.map((stat) => (
        <StatCard key={stat.title} title={stat.title} icon={stat.icon} value={stat.value} />
      ))}
    </div>
  );
}

export default StatsGrid;
