import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setData } from '../../redux/Dataslice';
const Templates = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const SocialMedia = [
        {
            'id': "Blog",
            "platform": "Blog",
            "heading": " A Guide for Content Creators",
            "image_url": "https://img.freepik.com/premium-vector/picture-people-working-computer-with-picture-man-top_1230457-2509.jpg?ga=GA1.1.1262692796.1695691184&semt=ais_user_ai_gen",
            "content_suggestion": "Discuss the importance of trends, tips for creating compelling challenges, and examples of successful challenges that have gone viral. Include actionable steps and insights."
        },
        {
            'id': "Facebook",
            "platform": "Facebook",
            "heading": "Live Now",
            "image_url": "https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049579.jpg?ga=GA1.1.1262692796.1695691184&semt=sph",
            "content_suggestion": "Share insights, engage with viewers through polls, and promote upcoming events."
        },
        {
            'id': "Twitter",
            "platform": "Twitter",
            "heading": "Join the Tweet Chat",
            "image_url": "https://img.freepik.com/free-vector/twitter-logo-design_1035-8934.jpg?ga=GA1.1.1262692796.1695691184&semt=sph",
            "content_suggestion": "Use hashtags effectively, ask questions, and retweet participant tweets."
        },
        {
            'id': "Instagram",
            "platform": "Instagram",
            "heading": "Behind the Scenes",
            "image_url": "https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049581.jpg?ga=GA1.1.1262692796.1695691184&semt=sph",
            "content_suggestion": "Use stories and reels to showcase the process, add interactive polls, and encourage DMs for more details."
        },
        {
            'id': "LinkedIn",
            "platform": "LinkedIn",
            "heading": "Professional Insights",
            "image_url": "https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049587.jpg?ga=GA1.1.1262692796.1695691184&semt=sph",
            "content_suggestion": "Share thought-provoking articles, engage in discussions in professional groups, and connect with influencers."
        },
        {
            'id': "Pinterest",
            "platform": "Pinterest",
            "heading": "Explore [Theme] Pins",
            "image_url": "https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049593.jpg?ga=GA1.1.1262692796.1695691184&semt=sph",
            "content_suggestion": "Create visually appealing pins, use descriptive captions, and link to related blog posts."
        },

        {
            'id': "YouTube",
            "platform": "YouTube",
            "heading": "Watch the Tutorial",
            "image_url": "https://img.freepik.com/premium-psd/psd-3d-youtube-button_832240-2436.jpg?ga=GA1.1.1262692796.1695691184&semt=sph",
            "content_suggestion": "Create comprehensive tutorials, use clear demonstrations, and encourage viewers to subscribe."
        },
        {
            'id': "Reddit",
            "platform": "Reddit",
            "heading": "Ask Me Anything",
            "image_url": "https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049595.jpg?ga=GA1.1.1262692796.1695691184&semt=sph",
            "content_suggestion": "Be open to all questions, provide detailed answers, and engage with the Reddit community."
        },
        {
            'id': "Snapchat",
            "platform": "Snapchat",
            "heading": "Snap Story",
            "image_url": "https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049603.jpg?ga=GA1.1.1262692796.1695691184&semt=sph",
            "content_suggestion": "Use creative snaps, add location filters, and encourage followers to interact with snaps."
        },
        {
            'id': "Tumblr",
            "platform": "Tumblr",
            "heading": "Thoughts on [Topic]",
            "image_url": "https://img.freepik.com/premium-vector/blue-geometric-t-modern-alphabet-vector-illustration_196200-452.jpg?ga=GA1.1.1262692796.1695691184&semt=ais_user",
            "content_suggestion": "Create engaging posts, use tags effectively, and reblog related content to spark conversations."
        }


    ]


    const handleCardClick = (id,data) => {
        navigate(`/dashboard/${id}`);
        dispatch(setData(data))
    };

    return (
        <>
            <div className='w-full h-auto bg-white'>
                <h1 className='text-5xl font-bold mb-4 text-center pt-4 text-black '>Template's</h1>

                <div className='w-full h-auto  flex flex-wrap gap-4 justify-center items-center'>

                    {
                        SocialMedia.map((res, index) => (
                            <>
                                <div key={index}
                                    onClick={() => handleCardClick(res?.id,res)}
                                    className='w-[350px] h-[500px]  rounded-md overflow-hidden shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer '>
                                    <div className='w-full h-[300px]'>
                                        <img className='w-full h-[100%] object-cover'
                                            src={res?.image_url}
                                            alt=''
                                        />
                                    </div>
                                    <h1 className='text-2xl text-center font-bold pb-2 mt-2 text-black'>{res?.platform}</h1>
                                    <p className='text-center font-bold text-black'>
                                        {res?.heading}
                                    </p>
                                    <p className='p-2 text-black'>
                                        {res?.content_suggestion}
                                    </p>
                                </div>

                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Templates
