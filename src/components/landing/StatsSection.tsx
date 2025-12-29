export const StatsSection = () => {
  const stats = [
    {
      number: "10K+",
      label: "Active Users",
      icon: "👥",
    },
    {
      number: "500K+",
      label: "Posts Created",
      icon: "📝",
    },
    {
      number: "99.9%",
      label: "Uptime",
      icon: "⚡",
    },
    {
      number: "4.9/5",
      label: "User Rating",
      icon: "⭐",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center transform hover:scale-110 transition-transform duration-300"
            >
              <div className="text-5xl mb-3">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-purple-100 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
