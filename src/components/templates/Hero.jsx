import React from 'react'

const Hero = () => {
    return (
        <>
            <div className='w-full h-[60vh] bg-green-300 '
                style={{
                    backgroundImage: `url('https://img.freepik.com/premium-photo/concept-about-social-media-day_853677-95210.jpg?ga=GA1.1.1262692796.1695691184&semt=ais_user_ai_gen')`,
                    backgroundRepeat: 'no-repeat',
                    objectFit: 'cover',
                    backgroundSize: '100% 100%'
                }}
            >
                {/* <div className="absolute inset-0 bg-black opacity-50 "></div>
                <div className="relative w-[80%] h-[500px] flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-5xl font-bold mb-4">Revolutionize Your Writing</h1>
                    <p className="text-lg pb-4">
                        Harness the power of AI to create compelling content effortlessly. Elevate your writing with precision, creativity, and efficiency. Join the future of content creation today.
                    </p>
                    <button className=" text-white font-bold py-2 px-4 rounded backdrop-blur-md shadow-md">
                        Start Writing Now
                    </button>
                </div> */}
            </div>
        </>
    )
}

export default Hero
