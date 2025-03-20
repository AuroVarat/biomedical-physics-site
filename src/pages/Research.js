// src/pages/ResearchArea.js

import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import ResearcherCard from "../components/ResearcherCard";

const ResearchArea = () => {
  //   always start at the top of the page
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])

  const location = useLocation();
  const { title, description, background,bannerImage, body, researchers, phdStudents } = location.state;

  return (
      <div className={`flex flex-col items-center min-h-screen w-screen bg-gray-200`}>
          <Header/>
          <div className="max-w-6xl  px-8 py-4 text-center flex flex-col items-center justify-center">
              <div
                  className={` flex w-full h-80 ${background} rounded-2xl mb-4  bg-center bg-cover`}
                  style={{backgroundImage: `url(${bannerImage.src})`}}
                  alt={bannerImage.alt}
              >
                  {/*    add a caption at the bottom*/}


              </div>

              <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold mb-4 text-center text-gray-900">{title}</h1>
              <div className={'max-w-2xl items-center '}>
                  <p className="text-lg mb-4 text-justify text-black">{description}</p>
                  <div className="text-lg text-gray-900 text-justify font-mono">
                      {body}

                      <p className={'text-sm'}>Cover: {bannerImage.caption}</p>
                  </div>


                  <div className="mt-8">
                      <h2 className="text-2xl font-bold mb-4 text-center text-gray-900">Researchers</h2>
                      <ul className="list-inside">
                          {researchers.map((researcher, index) => (
                              <li key={index} className="text-lg text-gray-900 mb-2">
                                  <ResearcherCard researcher={researcher}/>
                              </li>
                          ))}
                      </ul>
                  </div>

                  <div className="mt-8">
                      <h2 className="text-2xl font-bold mb-4 text-center text-gray-900">PhD Researchers</h2>


                      <ul className="list-inside">
                          {phdStudents.map((researcher, index) => (
                              <li key={index} className="text-lg text-gray-900 mb-2">
                                  {/*<ResearcherCard researcher={researcher}/>*/}
                                  <p>{researcher}</p>
                              </li>
                          ))}
                      </ul>
                  </div>


              </div>

          </div>
      </div>

  );
};

export default ResearchArea;