export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Designer",
      content:
        "Second Brain has completely transformed how I organize my research and inspiration. I can find everything in seconds!",
      avatar: "👩‍💼",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      content:
        "As a developer, I needed a place to store code snippets and documentation. This is perfect for my workflow.",
      avatar: "👨‍💻",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Content Creator",
      content:
        "Love how easy it is to save ideas and share them with my team. The tagging system is brilliant!",
      avatar: "👩‍🎨",
      rating: 5,
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Loved by Thousands
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our users have to say about their Second Brain experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-2xl">
                    ⭐
                  </span>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-5xl">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
