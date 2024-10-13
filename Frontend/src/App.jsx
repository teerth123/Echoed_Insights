import { useEffect, useState } from 'react';
import './App.css';
import { TracingBeam } from './@/components/ui/tracing-beam';
import { Spotlight } from './@/components/ui/spotlight';
import SignupFormDemo from './@/components/ui/example/signup-form-demo';
import LoginFormDemo from './@/components/ui/example/login-form-demo';
import { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription } from './@/components/ui/text-reveal-card';
import Navbar from './components/Navbar';
import image from './images/image.png';
import Use from './components/Use';
import Que from './components/Que';
import IconGroup from './components/Icons_micro';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import BeforeStart from './pages/BeforeStart';

function AppContent() { 
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 15000); // Change tagline every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const taglines = [
    {
      first : "Made new friends?",
      sec : "Trip to dandoba then share exp here!!!"
    },

    {
      first : "Internship mil gyi?",
      sec : "Help other Walchandiates!!!"
    },   
    
    {
      first : "Group project ka credit le gyi?",
      sec : "Share your exp anonymously.🥷"
    },

    {
      first : "CGPA kam hai???",
      sec : "Seek help from Walchandiates"
    },

    {
      first : "PPO mil gya?",
      sec : "Bhai party? Pehle dostonko help krde!!!"
    },

    {
      first : "Crush ne REJECT kiya?",
      sec : "Koi na... koi to mil hi jayegi!!!"
    },

    {
      first : "Club wale loche?",
      sec : "Share your stories!!!"
    },

    {
      first : "Subjects difficult hain?",
      sec : "Get help from Seniors!!!"
    },


    {
      first : "New in WCE?",
      sec : "Get started today!!!"
    },

    {
      first : "Hostel mein naya drama?",
      sec : "Spill the tea, anonymously! 🍵"
    },

    {
      first : "Canteen food not hitting the spot?",
      sec : "Review do, sabki help karo! 🍔"
    },

    {
      first : "Lab partner giving headache?",
      sec : "Vent here, solutions milenge! 🧪"
    }
  ]
  
  return (
    <>
      <div className='relative'>
        {/* <Particle /> */}
        <TracingBeam className="px-10 w-full max-w-7xl mx-auto"> {/* Increased padding and max-width */}
          <Navbar />
          (<div
            className="h-[30rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight className="-top-20 left-0 md:left-60 md:-top-5" fill="white" />
            <div className=" p-2 max-w-7xl  mx-auto relative z-10  w-full pt-5 md:pt-0">
              <h1
                className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                Real Stories, Real Help, Real <br /> Community
              </h1>
              <p
                className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                Spotlight effect is a great way to draw attention to a specific part
                of the page. Here, we are drawing the attention towards the text
                section of the page. I don&apos;t know why but I&apos;m running out of
                copy.
              </p>
            </div>
          </div>)
 
          
          
            <IconGroup/>

          <hr className='mt-8 border-gray-500 w-full' />
          
          
          <div className="flex items-center justify-center mt-5 mb-5">
            <button
              className="font-inter text-3xl bg-white rounded p-4 w-80 text-center transition-transform transform hover:scale-105 hover:shadow-lg active:scale-95"
              onClick={() => navigate('/signin')}
            >
              Get Started for Free
            </button>
          </div>


          <hr className='border-gray-500 w-full' />
          
          
            <img src={image} alt="" className='my-5' />

          <hr className='mt-8 border-gray-500 w-full' />
          <h1 className='font-inter text-white text-[44px] font-light mt-5 text-center'><b className='font-bold text-[64px]'>Echoed Insights </b> is not like any other Blogging App</h1>
          <h1 className='text-white tracking-wide text-[26px] mt-8 font-thin text-center'>WCE is a free, user-friendly platform for Walchandiates to share experiences,<br />
          seek advice, and help peers - anonymously or openly.</h1>
          
          <div className='mt-8 flex flex-col items-center'>
            <div className='flex justify-around space-x-4 w-full'>
              <Use heading="Opinions & experiences" desc="share thoughts & personal views openly or anonymously." iconClassName="ri-eye-2-fill" color="text-[#4386fa]" />
              <Use heading="Help & suggestions" desc="Get help and suggestions from peers and seniors." iconClassName="ri-hand-heart-fill" color="text-[#ffcc00]" />
              <Use heading="Mutual issues" desc="Discussing shared challenges like finding rooms and room-mates." iconClassName="ri-shake-hands-fill" color="text-[#E84F38]" />
            </div>
            <div className='flex justify-around space-x-4 mt-3 w-full'>
              <Use heading="Placement insights" desc="Placement tips, experiences, and interview prep strategies." iconClassName="ri-bar-chart-fill" color="text-[#6DE8A0]" />
              <Use heading="Campus info for newbies" desc="Helping new students with campus resources and guidance." iconClassName="ri-treasure-map-fill" color="text-[#BA2DB8]" />
              <Use heading="Club-student engagement" desc="Clubs interacting with students through events & updates." iconClassName="ri-community-fill" color="text-[#48D9B7]" />
            </div>
          </div>
          
          <hr className='mt-10 border-gray-500 w-full' />
          <h1 className='font-inter font-light text-white mt-10 text-[52px] text-center'>Watch a Demo Video here</h1>
          <h1 className='text-white tracking-wide text-[26px] mt-1 font-thin text-center'>Click on the following video to know about us.</h1>
          <div className='mx-auto flex justify-center items-center rounded w-[90%] md:w-[700px] mt-5 h-[395px] border border-[#353535]'>
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
          <hr className='mt-10 border-gray-500 w-full mb-10' />

            <div className="flex items-center justify-center bg-[#0E0E10] h-[20rem] rounded-2xl w-full"  >
              <TextRevealCard
                text={taglines[index].first}
                revealText={taglines[index].sec}
              >
                <TextRevealCardTitle>
                  Sometimes, you just need to see it.
                </TextRevealCardTitle>
                <TextRevealCardDescription>
                  This is a text reveal card. Hover over the card to reveal the hidden
                  text.
                </TextRevealCardDescription>
              </TextRevealCard>
            </div>

          <hr className='mt-10 border-gray-500 w-full' />
          <div>
            <h1 className='font-inter font-light text-[40px] md:text-[52px] mt-10 text-white text-center'>FAQ's</h1>
            <h1 className='text-white tracking-wide text-[20px] md:text-[26px] mt-1 font-thin text-center'>Get your doubts cleared!!!</h1>
            <div className='mt-10 md:mt-14'>
              <Que que="How to use this platform?" answer="To use this platform, simply sign up, log in, and navigate through the dashboard to access various features." />
              <Que que={"Who are we?"} answer={"We are Walchandiates who want to help other Walchandiates."} />
              <Que que={"Is this a 100% secure platform?"} answer={"While we take extensive measures to ensure security, no platform can guarantee 100% security. We recommend following best practices to protect your account."} />
              <Que que={"How are the post rankings decided?"} answer={"Post rankings are determined based on a combination of user engagement, relevance, and community feedback, ensuring that the most valuable content is highlighted."} />
              <Que que={"Can outsiders join the platform?"} answer={"Outsiders can join the platform by signing up, but access to certain features may be limited based on their verification status."} />
              <Que que={"How can I report inappropriate content?"} answer={"You can report inappropriate content by clicking the 'Report' button next to the post or by contacting our support team directly."} />
            </div>
          </div>

        </TracingBeam>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/signin" element={<SignupFormDemo />} />
        <Route path="/login" element={<LoginFormDemo />} />
        <Route path='/before' element={<BeforeStart />} />
      </Routes>
    </Router>
  );
}

export default App;
