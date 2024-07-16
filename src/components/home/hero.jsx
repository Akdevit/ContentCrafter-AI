import React from 'react';

const Hero = () => {
    return (
        <>
            <div
                className="w-full xl:h-[100vh] lg:h-[100vh] md:h-[100vh] sm:h-[100vh] h-[80vh] flex items-center justify-center relative"
                style={{
                    backgroundImage: `url('https://img.freepik.com/free-photo/abstract-background-with-vibrant-colors-shiny-blue-liquid-futuristic-design-generated-by-artificial-intelligence_24877-80961.jpg?ga=GA1.1.1262692796.1695691184&semt=ais_user_ai_gen')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50 "></div>
                <div className="relative w-[80%] h-[500px] flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-5xl font-bold mb-4">Revolutionize Your Writing</h1>
                    <p className="text-lg pb-4">
                        Harness the power of AI to create compelling content effortlessly. Elevate your writing with precision, creativity, and efficiency. Join the future of content creation today.
                    </p>
                    <button className=" text-white font-bold py-2 px-4 rounded backdrop-blur-md shadow-md">
                        Start Writing Now
                    </button>
                </div>
            </div>
        </>
    );
};

export default Hero;
