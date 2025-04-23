import React, { useState } from "react";
import "../CSS/FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the purpose of this educational center?",
      answer:
        "Our mission is to provide free English and Bible lessons to individuals of all ages, regardless of background. We aim to foster a loving, welcoming community focused on learning and spiritual growth.",
    },
    {
      question: "How can I sign up for a class?",
      answer:
        "You can contact us via phone, email, or our website to arrange a class schedule. We offer flexible timing to accommodate your availability.",
    },
    {
      question: "Are the classes really free?",
      answer:
        "Yes, all our classes are completely free! We believe that education should be accessible to everyone, regardless of financial status.",
    },
    {
      question: "What do I need to bring to a class?",
      answer:
        "Just bring your willingness to learn! We provide all the materials, but you can bring a notebook if you prefer to take notes.",
    },
    {
      question: "Can I volunteer at the center?",
      answer:
        "Absolutely! We welcome volunteers who want to support our mission, whether by teaching, assisting with events, or helping with administrative tasks.",
    },
    {
      question: "Is your church welcoming to everyone?",
      answer:
        "Yes, our church welcomes everyone, regardless of background. Our mission is to create a loving and inclusive community where individuals of all ages can grow through free English and Bible lessons. We believe in making education and spiritual support accessible to all.",
    },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <h4>{faq.question}</h4>
              <span className="arrow">{activeIndex === index ? "−" : "+"}</span>
            </div>
            {activeIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
