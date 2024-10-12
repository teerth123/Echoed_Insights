import './App.css'
import Navbar from './components/Navbar'
import image from '../public/images/image.png'
import Use from './components/Use'
import Que from './components/Que'
import Particle from './components/Particle'
import Signin from './pages/Signin'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import SigninWithEmail from './pages/SigninEmail'

function AppContent() { 
  const navigate = useNavigate();
  return (
    <>
    <div className='relative'>
    <Particle />
    {/* <TracingBeam className="px-6"></TracingBeam> */}
      <Navbar />
      {/* Main heading */}
      <h1 className="font-sansita text-white text-[96px] mt-20 leading-[110px]">Real Stories, Real Help, Real <br /> Community</h1>
      
      {/* Floating Icons */}
      <div className="absolute top-56 text-4xl text-[#4386fa]">
        <i className="ri-eye-2-fill"></i>
      </div>

      <div className="absolute top-44 right-64 text-4xl text-[#e44343]">
        <i className="ri-shake-hands-fill"></i>
      </div>

      <h1 className='font-inter text-white italic tracking-widest mt-10'>Your go-to platform for campus life, from freshers to alumni</h1>
      
      <div className="absolute top-90 right-40 text-4xl text-[#00fa9a]">
        <i className="ri-bar-chart-fill"></i>
      </div>

      <div className="absolute top-172 left-16 text-4xl text-[#ffdb58]">
        <i className="ri-hand-heart-fill"></i>
      </div>
      
      {/* Horizontal lines */}
      <hr className='mt-8 min-w-full border-gray-500 ' /> {/* Full width */}
      
      <div className="flex items-center justify-center mt-5 mb-5">
        <h1 className='font-inter text-3xl bg-white rounded p-4 w-80 text-center' onClick={() => navigate('/signin')}>
          Get Started for Free
        </h1>
      </div>
      
      <hr className='border-gray-500 w-full' /> {/* Full width */}
      
      <img src={image} alt="" className='mt-7 rounded' />
      <hr  className='mt-8 min-w-full border-gray-500 '/>
      <h1 className='font-inter text-white text-[44px] font-light mt-5' ><b className='font-bold text-[64px]'>Echoed Insights </b> is not like any other Blogging App</h1>
      <h1 className='text-white tracking-wide text-[26px] mt-8 font-thin'>WCE is a free, user-friendly platform for Walchandiates to share experiences,<br />
      seek advice, and help peers - anonymously or openly.</h1>
      <div className='mt-8'>
        <div className='flex justify-center space-x-4'>
        <Use 
          heading="Opinions & experiences" 
          desc="share thoughts & personal views openly or anonymously." 
          iconClassName="ri-eye-2-fill" 
          color="text-[#4386fa]" 
        />        
        <Use 
          heading="Help & suggestions" 
          desc="Get help and suggestions from peers and seniors." 
          iconClassName="ri-hand-heart-fill" 
          color="text-[#ffcc00]" 
        />
        <Use 
          heading="Mutual issues" 
          desc="Discussing shared challenges like finding rooms and room-mates." 
          iconClassName="ri-shake-hands-fill" 
          color="text-[#E84F38]" 
        />
        
        </div>
        <div className='flex justify-center space-x-4 mt-3'>
        <Use 
          heading="Placement insights" 
          desc="Placement tips, experiences, and interview prep strategies." 
          iconClassName="ri-bar-chart-fill" 
          color="text-[#6DE8A0]" 
        />
        <Use 
          heading="Campus info for newbies" 
          desc="Helping new students with campus resources and guidance." 
          iconClassName="ri-treasure-map-fill" 
          color="text-[#BA2DB8]" 
        />
        <Use 
          heading="Club-student engagement" 
          desc="Clubs interacting with students through events & updates." 
          iconClassName="ri-community-fill" 
          color="text-[#48D9B7]" 
        />
        </div>
      </div>
      <hr  className='mt-10 min-w-full border-gray-500 '/>
      <h1 className='font-inter font-light text-white mt-10 text-[52px]'>Watch a Demo Video here</h1>
      <h1 className='text-white tracking-wide text-[26px] mt-1 font-thin'>Click on the following video to know about us.</h1>
      <div className='mx-auto flex justify-center items-center rounded w-[700px] mt-5 h-[395px] border border-[#353535]'>
  <iframe
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/22Gta6zs_Gc"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

      <hr  className='mt-10 min-w-full border-gray-500 '/>
      <div>
        <h1 className='font-inter font-light text-[52px] mt-10 text-white'>FAQ's</h1>
        <h1 className='text-white tracking-wide text-[26px] mt-1 font-thin'>Get your doubts cleared!!!</h1>
        <div className='mt-14'>
        <Que 
                que="How to use this platform?" 
                answer="To use this platform, simply sign up, log in, and navigate through the dashboard to access various features." 
            />
          <Que  que={"Who are we?"} answer={"we are walchandiates who wants to help other walchandiates"}></Que>
          <Que  que={"Is this 100% secure platform?"} answer={"While we take extensive measures to ensure security, no platform can guarantee 100% security. We recommend following best practices to protect your account."} ></Que>
          <Que  que={"How the post rankings are decided?"} answer={"Post rankings are determined based on a combination of user engagement, relevance, and community feedback, ensuring that the most valuable content is highlighted."}></Que>
          <Que  que={"Can outsiders join the platform?"} answer={"Outsiders can join the platform by signing up, but access to certain features may be limited based on their verification status."} ></Que>
          <Que  que={"How can I report inappropriate content?"} answer={"You can report inappropriate content by clicking the 'Report' button next to the post or by contacting our support team directly."}></Que>

        </div>
      </div>
      </div>

      
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/signin" element={<Signin />} />
        <Route path='/Email' element={<SigninWithEmail/>}></Route>
      </Routes>
    </Router>
  )
}

export default App

