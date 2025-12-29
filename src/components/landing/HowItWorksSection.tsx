export const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Create Posts",
      description:
        "Capture notes, links, images, or ideas as easily as sending a message. Quick and intuitive.",
      color: "bg-purple-600",
    },
    {
      number: "2",
      title: "Organize with Tags",
      description:
        "Add tags and categories to make everything searchable and easy to find later. Smart filtering included.",
      color: "bg-blue-600",
    },
    {
      number: "3",
      title: "Share Selectively",
      description:
        "Choose to keep posts private or share them with specific people or publicly. You're in control.",
      color: "bg-green-600",
    },
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in three simple steps. No credit card required.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group flex items-start gap-6 bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`flex-shrink-0 w-16 h-16 ${step.color} text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                {step.number}
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="hidden md:block text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                ✨
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
