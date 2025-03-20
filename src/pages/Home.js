import Header from "../components/Header";
import Profile from "./Profile";
import {motion} from "framer-motion";
import {CircularButton,  researchAreas} from "../components/dataComps/researchAreas";
import {events} from "../components/dataComps/events";
import React from "react";
import {useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const handleNavigate = (index) => {
        const researchArea = researchAreas[index];
        console.log(researchArea);
        navigate('/research-area', { state: researchArea });
    };

    return (
      <div className={'flex flex-col  min-h-screen w-screen  bg-gray-200'}>

          <Header/>
          {/*<div className={*/}
          {/*    // 'snap-y snap-mandatory ' +*/}
          {/*    'h-screen w-screen '*/}
          {/*    // 'overflow-y-scroll '*/}
          {/*}>*/}

          <Profile/>

          {/*add 4 cards in row at the bottom of the page with framer motion transition */}
          <div className={'snap-start w-screen flex items-center justify-center mb-4'}>
              <motion.div
                  initial={{opacity: 0, y: -50}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.5}}


                  className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-4'}>
                  {researchAreas.map((_, index) => (
                      <motion.div
                          key={index}
                          // className={'flex flex-col h-64 w-full rounded-lg shadow-lg p-4 bg-cover bg-center ' + _.background}
                          className={
                              'relative flex flex-col h-64 w-full rounded-lg shadow-lg p-4 bg-cover bg-center ' +
                              _.background
                          }
                          // initial={{opacity: 0, y: -50}}
                          // animate={{opacity: 1, y: 0}}
                          style={{backgroundImage: `url(${_.bannerImage.src})`}}
                          transition={{duration: 0.1}}
                          whileHover={{
                              borderColor: "#ffffff", // Changes the border color on hover
                              borderWidth: 2, // Keeps it subtle by slightly highlighting the border

                          }}

                          // You can define a separate transition here if you need it for the hover state.

                      >

                          <p className={'text-gray-300 font-bold z-20 '}>{_.subtitle}</p>
                          <h1 className={' font-bold text-white text-4xl md:text-xl lg:text-2xl z-20'}>{_.title}</h1>
                          <div className={'text-white mt-2 h-full z-20'}>
                              <CircularButton text={'Learn More'} color={'indigo-900'}
                                              onClick={() => handleNavigate(index)}/>
                          </div>
                          <div className="absolute inset-0 bg-black opacity-50 rounded-lg pointer-events-none"></div>


                      </motion.div>
                  ))}

                  {
                      events.map((_, index) => (
                          index === 0 && (
                              <motion.div
                                  key={index}
                                  className={'flex flex-col h-64 w-full rounded-lg shadow-lg p-4 ' + _.background}
                                  transition={{duration: 0.1}}
                                  whileHover={{
                                      borderColor: "#ffffff",
                                      borderWidth: 2,
                                  }}

                              >
                                  <p className={'text-gray-300 font-bold '}>{_.subtitle}</p>
                                  <h1 className={' font-bold text-white text-4xl md:text-xl lg:text-2xl'}>{_.title}</h1>
                                  <div className={'text-white mt-2 h-full'}>
                                      <div className={'flex flex-col h-full'}>
                                          {/*<p className="text-white">Join us for a discussion on the latest research in the field of virology.</p>*/}
                                          <div className={'flex flex-col flex-grow '}>
                                              <p className="text-white">{_.location}</p>
                                              <p className="text-white">{_.date}</p>
                                              <p className="text-white">{_.time}</p>

                                          </div>

                                          <div className="w-full flex flex-row justify-between items-center">
                                              <p className={'text-white pr-16 '}>{_.description}</p>
                                              <button
                                                  className="bg-white text-red-900 font-bold py-2 px-4 rounded-3xl flex-grow mr-2 last:mr-0"
                                                  onClick={() => window.open(_.registerLink, '_blank')}
                                              >
                                                  Free
                                              </button>
                                              {/*<button*/}
                                              {/*    className="bg-transparent border-2 border-white text-white font-bold py-2 px-4 rounded-3xl flex-grow">*/}
                                              {/*    More Events*/}
                                              {/*</button>*/}
                                          </div>
                                      </div>
                                  </div>
                              </motion.div>
                          )
                      ))
                  }


              </motion.div>
          </div>


          {/*<AboutPage id={'contact'} className={'snap-start h-screen w-screen flex items-center justify-center bg-gray-900'}/>*/}

          {/*<ContactPage id={'contact'} className={'snap-start h-screen w-screen flex items-center justify-center bg-red-400'}/>*/}
          {/*<motion.div className="fixed top-0 left-0 right-0 bottom-100 h-5 bg-red-500" style={{scaleX}}/>*/}


          {/*</div>*/}


      </div>

    );
}

export default Home;