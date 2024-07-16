import React from 'react';

const pricingPlans = [
  {
    title: "Free Plan",
    price: "0",
    features: [
      "Basic content generation",
      "Limited templates",
      "No customization options",
      "Community support"
    ]
  },
  {
    title: "Basic Plan",
    price: "29",
    features: [
      "Unlimited content generation",
      "Standard templates",
      "Basic customization options",
      "Email support"
    ]
  },
  {
    title: "Pro Plan",
    price: "59",
    features: [
      "Advanced content generation",
      "Premium templates",
      "Full customization options",
      "Priority email support"
    ]
  },
  {
    title: "Enterprise Plan",
    price: "Contact Us",
    features: [
      "Custom solutions",
      "Dedicated account manager",
      "24/7 support",
      "Enterprise-grade features"
    ]
  }
];

const Pricing = () => {
  return (
    <div className="w-full mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
      <div className="w-full  h-auto flex flex-wrap justify-center items-center gap-4">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="w-[250px] bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">{plan.title}</h3>
            <div className="flex items-center justify-center mb-6">
              <span className="text-xl font-bold">${plan.price}</span>
              <span className="ml-2 text-gray-600">/month</span>
            </div>
            <ul className="mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600 mb-2">
                  <svg className="w-5 h-5 fill-current text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M9 16.2l-3.5-3.5 1.4-1.4 2.1 2.1 4.5-4.5 1.4 1.4-6.5 6.5z"/>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-[#C39898] text-white py-2 px-4 rounded-md  focus:outline-none ">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
