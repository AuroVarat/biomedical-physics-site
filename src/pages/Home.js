import Header from "../components/Header";
import Profile from "./Profile";
import {motion} from "framer-motion";
import {CircularButton,  researchAreas} from "../components/dataComps/researchAreas";
import {events_list} from "../components/dataComps/events_list";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
    const navigate = useNavigate();
    const [showEventModal, setShowEventModal] = useState(false);
    const [modalEvent, setModalEvent] = useState(null);

    const handleNavigate = (index) => {
        const researchArea = researchAreas[index];
        console.log(researchArea);
        navigate('/research-area', { state: researchArea });
    };

    const handleShowDescription = (event) => {
        setModalEvent(event);
        setShowEventModal(true);
    };
    const handleCloseModal = () => {
        setShowEventModal(false);
        setModalEvent(null);
    };

    return (
        <div>
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
                      events_list.map((_, index) => (
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
                                  <h1 className={'min-w-100 font-bold text-white text-lg md:text-lg lg:text-2xl break-words'}>{_.title}</h1>
                                  <div className={'text-white mt-2 h-full'}>
                                      <div className={'flex flex-col h-full'}>
                                          <div className={'flex flex-col flex-grow '}>
                                              <p className="text-white md:text-sm">{_.location}</p>
                                              <p className="text-white md:text-sm">{_.date} | {_.time}</p>
                                          </div>
                                          <div className="w-full flex flex-row justify-between items-center">
                                              {/*<p className={'text-white pr-4 md:text-sm truncate max-w-[120px]'} title={_.description}>*/}
                                              {/*    {_.description.length > 40 ? `${_.description.slice(0, 40)}...` : _.description}*/}
                                              {/*</p>*/}
                                              <button
                                                  className="bg-white text-red-900 font-bold py-2 px-4 rounded-3xl flex-grow mr-2 last:mr-0"
                                                  onClick={() => window.open(_.registerLink, '_blank')}
                                              >
                                                  Free
                                              </button>
                                              <button
                                                  className="bg-transparent border-2 border-white text-white font-bold py-2 px-4 rounded-3xl flex-grow ml-2"
                                                  onClick={() => handleShowDescription(_)}
                                              >
                                                  More Info
                                              </button>
                                          </div>
                                      </div>
                                  </div>
                              </motion.div>
                          )
                      ))
                  }

              </motion.div>
          </div>

          {/* Modal for event description */}
          {showEventModal && modalEvent && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative">
                      <button
                          className="absolute top-2 right-2 text-gray-700 hover:text-red-600 text-2xl font-bold"
                          onClick={handleCloseModal}
                      >
                          &times;
                      </button>
                      <h2 className="text-2xl font-bold mb-2 text-gray-900">{modalEvent.title}</h2>
                      <p className="mb-2 text-gray-700">{modalEvent.description}</p>
                      <p className="text-sm text-gray-500">{modalEvent.location}</p>
                      <p className="text-sm text-gray-500">{modalEvent.date} | {modalEvent.time}</p>
                      <button
                          className="mt-4 bg-red-900 text-white font-bold py-2 px-4 rounded-3xl"
                          onClick={() => window.open(modalEvent.registerLink, '_blank')}
                      >
                          Register
                      </button>
                  </div>
              </div>
          )}

          {/*<AboutPage id={'contact'} className={'snap-start h-screen w-screen flex items-center justify-center bg-gray-900'}/>*/}

          {/*<ContactPage id={'contact'} className={'snap-start h-screen w-screen flex items-center justify-center bg-red-400'}/>*/}
          {/*<motion.div className="fixed top-0 left-0 right-0 bottom-100 h-5 bg-red-500" style={{scaleX}}/>*/}


          {/*</div>*/}
      </div>
        <Footer/>
      </div>

    );
}

export default Home;
