export const FeaturesSection = () => {
  const features = [
    {
      icon: "🧠",
      title: "Smart Organization",
      description:
        "Tag, categorize, and search your content with intelligent filters. Find anything in seconds, even after months.",
      gradient: "from-purple-50 to-purple-100",
      hoverGradient: "hover:from-purple-100 hover:to-purple-200",
    },
    {
      icon: "🔐",
      title: "Secure & Private",
      description:
        "Your thoughts are yours alone. Industry-standard encryption keeps your data safe and private.",
      gradient: "from-blue-50 to-blue-100",
      hoverGradient: "hover:from-blue-100 hover:to-blue-200",
    },
    {
      icon: "🚀",
      title: "Easy Sharing",
      description:
        "Share posts with friends, teams, or publicly. Control exactly who sees what, when.",
      gradient: "from-green-50 to-green-100",
      hoverGradient: "hover:from-green-100 hover:to-green-200",
    },
    {
      icon: "📱",
      title: "Cross-Platform",
      description:
        "Access your second brain from anywhere. Works seamlessly on desktop, tablet, and mobile.",
      gradient: "from-pink-50 to-pink-100",
      hoverGradient: "hover:from-pink-100 hover:to-pink-200",
    },
    {
      icon: "🏷️",
      title: "Smart Tags",
      description:
        "Organize with tags and categories. Create custom collections and filters for your content.",
      gradient: "from-yellow-50 to-yellow-100",
      hoverGradient: "hover:from-yellow-100 hover:to-yellow-200",
    },
    {
      icon: "🔗",
      title: "Link Everything",
      description:
        "Save links, embed videos, and store all your digital content in one secure place.",
      gradient: "from-indigo-50 to-indigo-100",
      hoverGradient: "hover:from-indigo-100 hover:to-indigo-200",
    },
  ];

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Why Choose Second Brain?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to capture, organize, and share your knowledge
            effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group text-center p-8 rounded-2xl bg-gradient-to-br ${feature.gradient} ${feature.hoverGradient} transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer`}
            >
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
