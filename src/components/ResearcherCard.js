// src/components/ResearcherCard.js

import React from 'react';
import ResearcherInterests from "./ResearcherInterests";
import Arrow_up_right from "../assets/Arrow_up_right";
const ResearcherCard = ({ researcher }) => {
    return (
        <div className="max-w-full flex  bg-white shadow-lg rounded-lg overflow-hidden m-4 px-4 py-4 gap-4">
            <div className="w-fit flex flex-col items-start gap-2 ">
                <img
                    src="https://placehold.co/150"
                    alt="Profile"
                    className="h-fit w-fit object-cover rounded-lg"
                />
                {/*<a href={researcher.homepage} className="text-blue-500 hover:underline  w-full">*/}
                {/*    Visit Homepage*/}
                {/*</a>*/}

                <div
                    className=" flex flex-row   h-fit justify-between w-full gap-2 bg-gray-950 text-gray-100 text-xs font-semibold   px-2 py-1 rounded-full cursor-pointer"
                    onClick={

                        () => {
                            window.open(researcher.homepage, '_blank'); //to open new pag
                        }
                    }
                >
                    Homepage
                    <Arrow_up_right className={'w-2 '} color={'white'}/>
                </div>
            </div>
            <div className="w-2/3">
                <div className="font-bold text-2xl text-left mb-2 flex  gap-2 flex-row items-center"><p
                    className={'mb-0'}>{researcher.name}</p>

                    {/*<div*/}

                    {/*    className=" flex flex-row  w-fit gap-2 bg-gray-950 text-gray-100 text-xs font-semibold mr-2 mb-2 px-3 py-1 rounded-full"*/}
                    {/*>*/}
                    {/*    Email*/}
                    {/*    <Arrow_up_right className={'w-2 '} color={'white'}/>*/}
                    {/*</div>*/}
                </div>
                <p className="text-gray-700 text-sm text-left mb-2">{researcher.expertise}
                </p>
                {/*          <div className="text-gray-700 text-sm mb-2">*/}

                {/*              <div className="flex flex-wrap mt-2">*/}
                {/*                  {researcher.interests.split(',').map((interest, index) => (*/}
      {/*                      <span*/}
      {/*                          key={index}*/}
      {/*                          className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-3 py-1 rounded-full"*/}
      {/*                      >*/}
      {/*  {interest.trim()}*/}
      {/*</span>*/}
      {/*                  ))}*/}
      {/*              </div>*/}
      {/*          </div>*/}
                <ResearcherInterests interests={researcher.interests} />


            </div>
        </div>


    );
};

export default ResearcherCard;