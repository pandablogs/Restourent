import React, { useState } from "react";

const FAQs = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpansion = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="relative font-inter antialiased">
            <main className="relative h flex flex-col justify-center bg-slate-50 overflow-hidden">
                <div className="w-full max-w-2xl mx-auto px-4 md:px-6 py-12">
                    <h1 className="text-2xl font-bold text-slate-900 mb-4">FAQs</h1>

                    {/* Accordion component */}
                    <div className="divide-y divide-slate-200">
                        {[
                            {
                                question: "What are the advantages of your service?",
                                answer:
                                    "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
                            },
                            {
                                question:
                                    "Are there any fees or commissions in addition to the monthly subscription?",
                                answer:
                                    "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
                            },
                            {
                                question: "You really don't charge per user? Why not?",
                                answer:
                                    "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
                            },
                            {
                                question: "What happens when I go over my monthly active limit?",
                                answer:
                                    "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
                            },
                            {
                                question: "Can your service help me understand how to work with my product?",
                                answer:
                                    "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
                            },
                            {
                                question: "Which third-party application do you integrate with?",
                                answer:
                                    "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
                            },
                            {
                                question: "I have another question!",
                                answer:
                                    "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
                            },
                        ].map((item, index) => (
                            <div key={index} className="py-2">
                                <h2>
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full text-left font-semibold py-2"
                                        onClick={() => toggleExpansion(index)}
                                        aria-expanded={expandedIndex === index}
                                        aria-controls={`faqs-text-${index}`}
                                    >
                                        <span>{item.question}</span>
                                        <svg
                                            className={`fill-indigo-500 shrink-0 ml-8 ${expandedIndex === index ? "!rotate-180" : ""
                                                }`}
                                            width="16"
                                            height="16"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect
                                                y="7"
                                                width="16"
                                                height="2"
                                                rx="1"
                                                className="transform origin-center transition duration-200 ease-out"
                                            />
                                            <rect
                                                y="7"
                                                width="16"
                                                height="2"
                                                rx="1"
                                                className="transform origin-center rotate-90 transition duration-200 ease-out"
                                            />
                                        </svg>
                                    </button>
                                </h2>
                                <div
                                    id={`faqs-text-${index}`}
                                    role="region"
                                    aria-labelledby={`faqs-title-${index}`}
                                    className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${expandedIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="pb-3">{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* End: Accordion component */}
                </div>
            </main>
        </div>
    );
};

export default FAQs;
