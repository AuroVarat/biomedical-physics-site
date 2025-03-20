// ContactPage.js

import React from "react";
import {Strings} from "../assets/Strings";


const Contact = (props) => {
    return (
        <div className={props.className}>

            <div className="max-w-xl px-8">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-center text-white ">
                    {'Contact'}
                </h1>
                <p className="text-lg md:text-7xl lg:text-lg mb-4 text-center text-white ">
                    <a
                    href={`mailto:${Strings.email}`}
                    className="text-blue-950 hover:underline"
                    >{Strings.email}</a> | {Strings.phone}
                </p>
                <p className="text-lg md:text-xl lg:text-lg text-gray-900 mb-8 text-justify font-mono">
                    {Strings.address}

                </p>
            </div>
        </div>
    );
};

export default Contact;
