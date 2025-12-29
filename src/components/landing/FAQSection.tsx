import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-purple-600 transition-colors duration-300"
      >
        <span className="text-lg font-semibold pr-8">{question}</span>
        <span
          className={`text-2xl transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ↓
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export const FAQSection = () => {
  const faqs = [
    {
      question: "Is Second Brain really free?",
      answer:
        "Yes! We offer a generous free plan that includes all core features. You can upgrade to premium for additional storage and advanced features, but the free plan is perfect for most users.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We take security very seriously. All data is encrypted in transit and at rest using industry-standard encryption. We never share your data with third parties, and you maintain full ownership of your content.",
    },
    {
      question: "Can I share my posts with others?",
      answer:
        "Absolutely! You can choose to keep posts private, share them with specific users, or make them public. You have complete control over who can see your content.",
    },
    {
      question: "What types of content can I save?",
      answer:
        "You can save text notes, links, images, YouTube videos, social media posts, and more. Our platform supports a wide variety of content types to capture all your ideas.",
    },
    {
      question: "Can I access my content from multiple devices?",
      answer:
        "Yes! Your Second Brain is accessible from any device with a web browser. All your content syncs automatically, so you can start on your phone and continue on your computer.",
    },
    {
      question: "How do tags and organization work?",
      answer:
        "You can add multiple tags to each post for easy categorization. Our smart search lets you find content instantly using tags, keywords, or filters. You can also create custom collections.",
    },
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. Can't find what you're looking
            for? Contact our support team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="#"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};
