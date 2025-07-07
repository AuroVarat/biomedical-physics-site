import React from 'react';
import {Strings} from "../assets/Strings";

import BgImage from '../assets/adam-wilson-ktDODr-3tvY-unsplash.jpg';
import {useNavigate} from "react-router-dom";

const Profile = (props) => {
    const navigate = useNavigate();

    const goToLink = (link) => {
        window.open(link, '_blank');
    };

    return (
        <div
            className={'snap-start flex-col-reverse md:flex-row flex-grow  h-full w-screen flex  justify-between mb-4'}>
            <div className="flex flex-col max-w-xl px-8">
                <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold mb-4 text-left text-gray-900">
                    {Strings.name}
                </h1>
                <p className="text-lg md:text-xl lg:text-lg text-gray-800 mb-2">
                    Bridging the gap between physics, data science, chemistry, biology, and medicine to solve critical
                    biomedical challenges.
                </p>

                <span onClick={()=> navigate('/about')}
                   className=" max-w-64 relative inline-flex items-center justify-start py-3 pl-0 pr-12 overflow-hidden font-semibold text-gray-900 transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6 bg-transparent group">
                    <span
                        className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gray-900 group-hover:h-full"></span>
                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"
                                                                      strokeWidth="2"
                                                                      d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span
                        className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"
                                                                      strokeWidth="2"
                                                                      d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span
                        className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white"
                        >
                        MORE ABOUT US
                    </span>
                </span>


                <span onClick={()=> goToLink('https://forms.office.com/e/Jgf1gMp5Lv')}
                      className=" max-w-64 relative inline-flex items-center justify-start py-3 pl-0 pr-12 overflow-hidden font-semibold text-gray-900 transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6 bg-transparent group">
                    <span
                        className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gray-900 group-hover:h-full"></span>
                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"
                                                                      strokeWidth="2"
                                                                      d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span
                        className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"
                                                                      strokeWidth="2"
                                                                      d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span
                        className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white"
                    >
                        JOIN US
                    </span>
                </span>


                <span onClick={()=> navigate('/events')}
                      className=" max-w-64 relative inline-flex items-center justify-start py-3 pl-0 pr-12 overflow-hidden font-semibold text-gray-900 transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6 bg-transparent group">
                    <span
                        className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gray-900 group-hover:h-full"></span>
                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"
                                                                      strokeWidth="2"
                                                                      d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span
                        className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"
                                                                      strokeWidth="2"
                                                                      d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span
                        className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white"
                    >
                        UPCOMING EVENTS
                    </span>
                </span>
            </div>

            <div className="flex w-full px-4 py-0 relative">
                <div className={'bg-gray-900 h-full w-full rounded-2xl overflow-hidden relative'}>
                    {/* Use an img tag with absolute positioning */}
                    <img
                        src={BgImage} // Use the imported image here
                        alt="Landscape View of Edinburgh"
                        className="absolute inset-0 h-full w-full object-cover rounded-2xl"
                    />
                </div>
            </div>
        </div>

    );
};

export default Profile;
