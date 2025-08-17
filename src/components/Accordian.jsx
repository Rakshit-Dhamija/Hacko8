import { IconBrandDiscord } from '@tabler/icons-react';
import React, { useState, useRef, useEffect } from 'react';
import { motion } from "framer-motion";

const AccordionItem = ({ question, answer, isOpen, onClick, index, handleKeyDown }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="rounded-xl overflow-hidden border border-cyan-500/30 bg-gray-900/80 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,255,0.4)]">
      <button
        className="flex justify-between items-center w-full px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
        onClick={onClick}
        onKeyDown={(e) => handleKeyDown(e, index)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span className="text-xl font-semibold text-cyan-100 tracking-wide flex-1 pr-4">{question}</span>
        <span
          className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 transform ${isOpen ? 'bg-cyan-500 text-gray-900 rotate-180 shadow-[0_0_10px_rgba(0,255,255,0.7)]' : 'bg-gray-800/50 text-cyan-300'
            }`}
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <div
        id={`faq-answer-${index}`}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ height }}
        aria-hidden={!isOpen}
        role="region"
        aria-labelledby={`faq-question-${index}`}
      >
        <div ref={contentRef} className="px-6 py-5 border-t border-cyan-500/20 text-gray-300 text-base leading-relaxed">
          <span> {answer}</span>
          <span> {index == 1 && <motion.a
            href="https://discord.gg/Tgu28Mt99v"
            target="_blank"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-600 hover:text-white transition-colors duration-300"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconBrandDiscord size={18} />
          </motion.a>}</span>
        </div>
      </div>
    </div>
  );
};

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const accordionRef = useRef(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleKeyDown = (e, index) => {
    const buttons = accordionRef.current.querySelectorAll('button');
    const currentIndex = Array.from(buttons).findIndex((button) => button.id === `faq-question-${index}`);

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (currentIndex < buttons.length - 1) {
          buttons[currentIndex + 1].focus();
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (currentIndex > 0) {
          buttons[currentIndex - 1].focus();
        }
        break;
      case 'Home':
        e.preventDefault();
        buttons[0].focus();
        break;
      case 'End':
        e.preventDefault();
        buttons[buttons.length - 1].focus();
        break;
      default:
        break;
    }
  };

  const faqData = [
    {
      question: "What is the team size for HackOwasp 8.0?",
      answer: "A Team can consist of 1-4 members.",
    },
    {
      question: "What if I have no team?",
      answer: `We will club individual members and you may form a team in our discord server as well.`
    },
    {
      question: "How long is the hackathon going to last?",
      answer: "Hackathon is going to last for 36 hours",
    },
    {
      question: "Do I need experience?",
      answer:
        "No, you do not need any prior development experience. We will assign you mentors to assist you in figuring things out. Of course, willingness to think, learn, and cooperate is a cherry on the top.",
    },
    {
      question: "Is a working prototype / website of our product required?",
      answer: "Yes, You will need a functioning prototype of how your product/idea works to pitch it to the judges in the final round.",
    },
    {
      question: "What is the cost of participation",
      answer: "HackOWASP 8.0 is completely free to participate for everyone.",
    },
    {
      question: "What is the mode of Hackathon?",
      answer:
        "HackOWASP 8.0 is being conducted in OFFLINE mode for students at pan India level",
    },
    // {
    //   question: "Will hardware be provided for the hardware track?",
    //   answer:
    //     "No. Any team choosing to work on the Hardware track will have to use their own equipment and team OWASP will NOT be providing any hardware accessories.",
    // },
    {
      question: "Will accomodation be provided and what's the procedure?",
      answer:
        "Yes. Any team choosing to opt for accomodation is required to fill the google form at the top of the page. The accomodation will be provided at the venue itself.",
    },
    // {
    //   question: "How can I register for Workshops and Kaggle Hack?",
    //   answer:
    //     "You can register for the workshops and Kaggle Hack by filling the form at the top of the page. The registration is free of cost. https://forms.gle/oJFXHmn9XjKJ9FiW6",
    // },
    // {
    //   question: "Who all can register for Workshops, Kaggle Hack, Ideathon and HACKOWASP?",
    //   answer:
    //     "All students from all years from any college or university can register for the workshops, Kaggle Hack, Ideathon and HACKOWASP. The registration is free of cost.",
    // },
  ];

  return (
    <section className="py-20 px-4 min-h-screen">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse">
            FAQs
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-4 shadow-[0_0_10px_rgba(0,255,255,0.7)]"></div>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto tracking-wide">
            Everything you need to know about HackOwasp 8.0
          </p>
        </div>

        <div className="space-y-6" ref={accordionRef}>
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={activeIndex === index}
              onClick={() => toggleAccordion(index)}
              handleKeyDown={handleKeyDown}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
