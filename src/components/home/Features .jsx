import React from 'react'

const Features = () => {
    return (
        <>
            <div className='w-full h-auto bg-white'>
                <h1 className='text-5xl font-bold mb-4 text-center pt-4 text-black '>Feature's</h1>

                <div className='w-full h-auto  flex flex-wrap gap-4 justify-center'>

                    <div className='w-[350px] h-[600px]  rounded-md overflow-hidden shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer '>
                        <div className='w-full h-[300px]'>
                            <img className='w-full h-[100%] object-cover'
                                src='https://img.freepik.com/free-photo/futuristic-scene-with-high-tech-robot-used-construction-industry_23-2151329548.jpg?ga=GA1.1.1262692796.1695691184&semt=ais_user_ai_gen'
                                alt=''
                            />
                        </div>
                        <h1 className='text-2xl text-center font-bold pb-2 mt-2 text-black'>Automated Post Generation</h1>
                        <p className='p-2 text-black'>
                            Automatically generate engaging social media posts using AI algorithms tailored to your target audience and platform specifications. This feature allows you to effortlessly create posts in various formats such as text, images, and videos, ensuring they are optimized for maximum impact across different social media channels.
                        </p>
                    </div>
                    <div className='w-[350px] h-[600px]  rounded-md overflow-hidden shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer'>
                        <div className='w-full h-[300px] '>
                            <img className='w-full h-[100%] object-cover'
                                src='https://img.freepik.com/free-photo/one-person-hand-painting-colorful-abstract-design-generated-by-ai_188544-39056.jpg?ga=GA1.1.1262692796.1695691184&semt=ais_user_ai_gen'
                                alt=''
                            />
                        </div>
                        <h1 className='text-2xl text-center font-bold pb-2 mt-2 text-black'>Customizable Templates</h1>
                        <p className='p-2 text-black '>
                            Access a rich library of customizable templates designed for posts, stories, and advertisements. Easily tailor these templates to align with your brand identity and campaign objectives, ensuring consistency and effectiveness in your content strategy. Save customized templates for future use, streamlining your content creation process and enhancing overall efficiency.
                        </p>
                    </div>
                    <div className='w-[350px] h-[600px] rounded-md overflow-hidden shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer'>
                        <div className='w-full h-[300px]'>
                            <img className='w-full h-[100%] object-cover'
                                src='https://img.freepik.com/premium-photo/calculator-icon-purple-background-3d-rendering-computer-digital-drawing_1111504-8901.jpg?ga=GA1.1.1262692796.1695691184&semt=ais_user_ai_gen'
                                alt=''
                            />
                        </div>
                        <h1 className='text-2xl text-center font-bold pb-2 mt-2 text-black'>Scheduling and Publishing</h1>
                        <p className='pl-2  text-black'>
                            Effortlessly manage your social media presence with advanced scheduling and publishing capabilities. Schedule posts across multiple platforms ahead of time, specify exact dates and times for optimal audience engagement, and conveniently edit or reschedule posts from a centralized dashboard. This feature empowers you to maintain a consistent posting schedule while maximizing reach and impact.                        </p>
                    </div>
                    <div className='w-[350px] h-[600px] rounded-md overflow-hidden shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer'>
                        <div className='w-full h-[300px]'>
                            <img className='w-full h-[100%] object-cover'
                                src='https://img.freepik.com/free-photo/variety-people-multitasking-3d-cartoon-scene_23-2151294543.jpg?ga=GA1.1.1262692796.1695691184&semt=ais_user_ai_gen'
                                alt=''
                            />
                        </div>
                        <h1 className='text-2xl text-center font-bold pb-2 mt-2 text-black'> Analytics and Insights</h1>
                        <p className='p-2  text-black'>
                            Gain valuable insights into your content’s performance with comprehensive analytics and reporting tools. Track key metrics such as reach, engagement rates, click-throughs, and conversions across different social media channels. Analyze audience demographics and behavior patterns to refine your content strategy, optimize performance, and achieve your marketing goals effectively.                        </p>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Features 
