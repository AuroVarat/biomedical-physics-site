import {useNavigate} from "react-router-dom";
import {DIA} from "./DIA";
import {MMD} from "./MMD";
import {POV} from "./POV";

export const CircularButton = ({text, color, onClick}) => {

    return (
        <div className={'flex flex-col h-full justify-between'} onClick={onClick}>
            <div className="flex-grow"></div>
            {/* Empty space */}
            <button className="bg-white text-gray-900 border-2 border-transparent font-bold py-2 px-4 rounded-3xl self-end">
                Learn More
            </button>
        </div>
    )

}
// src/components/dataComps/researchAreas.js

export const researchAreas = [

    DIA
    ,

      MMD
    ,
    POV
];
