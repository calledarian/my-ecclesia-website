import React, { useState } from "react";
import "../CSS/FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Do I need a visa to enter Cambodia?",
      answer: (
        <>
          A majority of countries will need a visa to enter Cambodia. Please research if you will need a visa and then apply for a visa by going to{" "}
          <a href="https://evisa.gov.kh" target="_blank" rel="noreferrer">
            evisa.gov.kh
          </a>{" "}
          and then complete the e-arrival form by downloading the app{" "}
          <a href="https://arrival.gov.kh" target="_blank" rel="noreferrer">
            arrival.gov.kh
          </a>.
        </>
      )
    },
    {
      question: "How can I get involved?",
      answer: (
        <>
          We'd love to have volunteers to help teach English through the Bible at BEC. Email Jonny (BEC Manager) at{" "}
          <a href="mailto:jonnykatie1705@gmail.com">
            jonnykatie1705@gmail.com
          </a>{" "}
          to find out more information.
        </>
      )
    },
    {
      question: "How close is the BEC to shops and essential supplies?",
      answer:
        "The BEC is a short 5 minitue tuk-tuk ride away from a major supermarket and lots of other essential shops are in close proximity to the BEC."
    },
    {
      question: "How do I travel around while I'm here?",
      answer:
        "Traveling around is extremly easy via tuk-tuks which you can book with your phone with apps like Grab, PassApp or Tada."
    },
    {
      question: "What's the cost of meals in Cambodia?",
      answer:
        "The cost of food will vary depend on how much you eat out and where you're eating. You can typically get a good meal out for around $3 USD."
    },
    {
      question: "Can I stay at the BEC as a fieldworker?",
      answer:
        "Whether you're staying short term or long term, staying at the BEC is definetly a possibility, depending on availability at the time."
    },
    {
      question: "What does a typical day look like as a fieldworker?",
      answer:
        "A typical day starts of with morning readings, followed by one-to-one and small group Bible-English classes. The times you will teach can be flexable throughout the day and night times consist of dorm visits, praise nights, bible seminars and more!"
    },
    {
      question: "Can I swap foreign currency for Khmer Riel or USD and how easy is it to get money out?",
      answer: "There are multiple money exchange places around Phnom Penh and also many banks with ATMs that you can get cash out at."
    },
    {
      question: "What do I do for a sim-card?",
      answer: "Buying a physical or e-sim is extremly cheap and easy and it's worth waiting to buy one in Cambodia as it works out much cheaper."
    },
    {
      question: "What do I do for travel insurance?",
      answer: (
        <>
          If you're baptised, ACBM can cover your travel insurance. Visit{" "}
          <a href="https://acbm.org.au/member-registration/" target="_blank" rel="noreferrer">
            acbm.org.au/member-registration/
          </a>{" "}
          and complete the field workers application form.
        </>
      )
    },
    {
      question: "Are they any cultural considerations?",
      answer: "We ask that you dress modestly and to know that it's expected that you take your shoes off before entering houses, so wearing easy to remove shoes is beneficial."
    }
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
