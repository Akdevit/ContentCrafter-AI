import React from 'react';

const steps = [
    {
        title: "Sign Up or Log In",
        description: "Create an account or log in to access the content generator tool.",
        icon: "👤"
    },
    {
        title: "Choose a Content Template",
        description: "Select a template that matches the type of content you want to create.",
        icon: "📄"
    },
    {
        title: "Enter Your Keywords or Topic",
        description: "Provide the necessary keywords or topic for the content.",
        icon: "🔍"
    },
    {
        title: "Generate and Customize Your Content",
        description: "Use the tool to generate content and make any necessary customizations.",
        icon: "🛠️"
    },
    {
        title: "Download or Publish Directly",
        description: "Download your content or publish it directly to your platform.",
        icon: "💾"
    }
];

const HowItWorks = () => {
    return (
        <div className="max-w-5xl mx-auto py-12">
            <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
            <div className="w-full h-auto flex flex-wrap gap-4 justify-center items-center">
                {steps.map((step, index) => (
                    <>
                        <div key={index} className='w-[300px] h-[200px] p-4 bg-white shadow-md rounded-md  text-center'>
                            <div className="text-4xl mb-4">{step.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;
