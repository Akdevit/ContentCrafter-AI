import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is AI-Powered Content Generation?",
            answer: "AI-Powered Content Generation uses artificial intelligence to create content automatically based on input data and parameters."
        },
        {
            question: "How does it work?",
            answer: "It works by using machine learning models trained on large datasets to understand language patterns and generate coherent text."
        },
        {
            question: "Is the content unique?",
            answer: "Yes, the content generated is unique. However, it's always a good idea to review and edit the content to ensure it meets your standards."
        },
        {
            question: "What types of content can it create?",
            answer: "It can create various types of content including articles, blog posts, social media posts, product descriptions, and more."
        },
        {
            question: "Is there a free trial available?",
            answer: "Yes, we offer a free trial so you can test the service before committing to a subscription."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto py-12 ">
            <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4 flex flex-col justify-center items-center">
                {faqs.map((faq, index) => (
                    <div key={index} className="w-[95%] shadow-md rounded-md p-4">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full text-left flex justify-between items-center focus:outline-none"
                        >
                            <span className="text-lg font-medium">{faq.question}</span>
                            <svg
                                className={`w-6 h-6 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </button>
                        {openIndex === index && (
                            <div className="mt-2 text-gray-600">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
