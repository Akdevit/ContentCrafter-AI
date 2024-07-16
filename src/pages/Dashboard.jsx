import React, { useState } from "react"
import Editor from "../components/dashboard/Editor"
import { useSelector } from "react-redux";
import { LuMinimize } from "react-icons/lu";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [response, setResponse] = useState(null);
  const [inputvalue, setInputvalue] = useState(null)
  const [lodding, setLodding] = useState(false)
  const [show, setShow] = useState(false)

  const items = useSelector(state => state.data.items);


  const socialmedias = items?.platform;
  const apiKey = process.env.REACT_APP_GEMINI_API_KEY



  const GenratecontantAi = () => {
    setLodding(true)
    fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `Generate engaging and platform-specific content for ${socialmedias} on the topic of ${inputvalue}.
`
              }
            ]
          }
        ]
      })
    })
      .then(response => response.json())
      .then(data => {
        setResponse(data?.candidates[0]?.content?.parts[0]?.text)
        setLodding(false)
        setInputvalue('')
        setShow(false)
        document.getElementById('contentName').value = ''
      })
      .catch(error => {
        toast.error('Error generating content:', error);

      });
  }

  const Genratecontant = () => {
    if (!inputvalue) {
      toast.error('Please enter a topic')
    } else {
      GenratecontantAi()
    }
  }



  /* ToggleSideBaar */
  const ToggleSideBaar = () => {
    setShow(!show)
  }
  return (
    <>




      <div className="w-full h-[100vh]  flex ">
        {/* side baar */}

        <div className={`w-[70%] xl:w-[20%] lg:w-[20%] md:w-[20%] sm:w-[20%] h-[100%] bg-white p-4 shadow-lg fixed top-0 left-0 z-40 xl:z-0 lg:z-0 md:z-0 sm:z-0 xl:flex lg:flex md:flex sm:flex   ${show ? 'block' : 'hidden'} flex-col items-center xl:relative lg:relative md:relative sm:relative`}>

          <h2 className=' text-xl font-bold mb-4 pt-2 text-center'> ContentCrafter AI</h2>

          <div className="w-full h-auto bg-white mb-4 flex justify-center items-center">
            <img
              className="w-[90%]"
              src={items.image_url} alt="" />
          </div>
          <p className="text-center pb-4 text-xl font-bold">{items?.platform}</p>
          <p className="text-center pb-4 ">{items?.content_suggestion}</p>

          <input
            type='text'
            id='contentName'
            className='w-[95%] h-[50px] outline-0 p-2 rounded-md border'
            placeholder='Enter topics name'
            onChange={(e) => setInputvalue(e.target.value)}
          />
          <button
            onClick={() => Genratecontant()}
            className='w-[150px] h-[40px] rounded-md bg-green-400  transition duration-300 mt-4 hover:bg-green-600'

          >
            {
              lodding ? 'Generating...' : 'Generate'

            }
          </button>
        </div>


        {/* text editor */}
        <div className='xl:w-[80%] lg:w-[80%] md:w-[80%] sm:w-[80%] w-[100%] h-[100%]  overflow-auto'>
          <div onClick={() => ToggleSideBaar()} className="w-[40px] cursor-pointer h-[40px] rounded-lg shadow-lg bg-gray-100 absolute z-30 right-8 bottom-8 flex justify-center items-center xl:hidden lg:hidden md:hidden sm:hidden" >
            <LuMinimize className="text-2xl" />
          </div>
          <Editor response={response} />
        </div>

      </div>
    </>
  )
}

export default Dashboard
