'use client';

import { useState } from 'react';

const faqData = [
  {
    question: 'Do I need a visa to enter Cambodia?',
    answer: (
      <>
        A majority of countries will need a visa to enter Cambodia. Please research if you will need
        a visa and then apply at{' '}
        <a href="https://evisa.gov.kh" target="_blank" rel="noreferrer">
          evisa.gov.kh
        </a>
        , then complete the e-arrival form by downloading the app at{' '}
        <a href="https://arrival.gov.kh" target="_blank" rel="noreferrer">
          arrival.gov.kh
        </a>
        .
      </>
    ),
  },
  // {
  //   question: 'How can I get involved?',
  //   answer: (
  //     <>
  //       We'd love to have volunteers to help teach English through the Bible at BEC. Email Jonny
  //       (BEC Manager) at{' '}
  //       <a href="mailto:jonnykatie1705@gmail.com">jonnykatie1705@gmail.com</a> to find out more
  //       information.
  //     </>
  //   ),
  // },
  {
    question: 'How close is the BEC to shops and essential supplies?',
    answer:
      'The BEC is a short 5-minute tuk-tuk ride away from a major supermarket, and many other essential shops are nearby.',
  },
  {
    question: `How do I travel around while I'm here?`,
    answer: 'Travelling around is extremely easy via tuk-tuks, which you can book on your phone with apps like Grab, PassApp, or Tada.',
  },
  {
    question: `What's the cost of meals in Cambodia?`,
    answer:
      'Food costs vary depending on how often you eat out and where. You can typically get a good meal for around $3 USD.',
  },
  {
    question: 'Can I stay at the BEC as a fieldworker?',
    answer:
      `Whether you're staying short or long term, staying at the BEC is definitely a possibility, depending on availability.`,
  },
  {
    question: 'What does a typical day look like as a fieldworker?',
    answer:
      'A typical day starts with morning readings, followed by one-to-one and small group Bible-English classes. Teaching times are flexible throughout the day, and evenings include dorm visits, praise nights, Bible seminars, and more!',
  },
  {
    question: 'Can I swap foreign currency for Khmer Riel or USD, and how easy is it to get money out?',
    answer:
      'There are multiple money exchange places around Phnom Penh, and many banks with ATMs where you can withdraw cash.',
  },
  {
    question: 'What do I do for a SIM card?',
    answer:
      `Buying a physical or eSIM is extremely cheap and easy. It's worth waiting to buy one in Cambodia as it works out much cheaper.`,
  },
  {
    question: 'What do I do for travel insurance?',
    answer: (
      <>
        If you're baptised, ACBM can cover your travel insurance. Visit{' '}
        <a href="https://acbm.org.au/member-registration/" target="_blank" rel="noreferrer">
          acbm.org.au/member-registration/
        </a>{' '}
        and complete the fieldworkers application form.
      </>
    ),
  },
  {
    question: 'Are there any cultural considerations?',
    answer:
      'We ask that you dress modestly. It is also expected that you remove your shoes before entering homes, so easy-to-remove footwear is recommended.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {faqData.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button fw-semibold ${activeIndex === index ? '' : 'collapsed'}`}
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={activeIndex === index}
              >
                {faq.question}
              </button>
            </h2>
            <div className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}>
              <div className="accordion-body text-secondary">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}