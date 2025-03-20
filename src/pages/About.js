import React from 'react';
import Header from '../components/Header';
import jpg from '../assets/organigram.png';

const AboutPage = () => {
    return (
        <div className="flex flex-col min-h-screen w-screen bg-white px-4 md:px-8">
            <Header />

            {/* About Text Section */}
            <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                    About Us
                </h2>
                <p className="text-gray-600 leading-relaxed text-justify">
                    {/*We are a virtual, highly interdisciplinary centre including quantitative and life science researchers interested in addressing outstanding open and clinically relevant biomedical questions. Here, a combined approach involving physics, data science, chemistry, biology, and medicine synergistically drives new discoveries. Our goal is to provide a platform for reaching out to researchers with relevant expertise or overlapping interests, while also advertising seminars and workshop activities of the Centre.*/}
                    We are a virtual, highly interdisciplinary center bringing together researchers from quantitative and life sciences to address pressing, open, and clinically relevant biomedical questions. Through a synergistic approach integrating physics, data science, chemistry, biology, and medicine, we aim to drive transformative discoveries. Our mission is to connect researchers with shared interests or complementary expertise while promoting seminars and workshops hosted by the Centre to foster collaboration and innovation.


                </p>
                <p className="text-gray-600 leading-relaxed mt-4 text-justify">
                    We are committed to facilitating cross-disciplinary science by addressing challenges spanning diverse fields. By fostering connections with like-minded researchers who share overlapping expertise and interests, we aim to accelerate the advancement of scientific discoveries.
                </p>
            </div>
            {/*show organigram jpg in assets*/}
            <div className="flex justify-center mt-8 mb-8 ">
                <img src={jpg} alt="Organigram" className="max-w-sm md:max-w-2xl lg:max-w-4xl" />
            </div>

            {/* Flow Diagram Section */}
            {/*<div className="flex justify-center mt-8 mb-8 relative">*/}
            {/*    <div className="grid gap-4">*/}
            {/*        /!* Top Row *!/*/}
            {/*        <div className="grid grid-cols-2 gap-4">*/}
            {/*            /!* College of Science and Engineering *!/*/}
            {/*            <div className="border-4 border-blue-400 p-4 text-center rounded-md relative">*/}
            {/*                <h3 className="text-blue-600 font-semibold">College of Science and Engineering (CSE)</h3>*/}
            {/*                <p className="text-gray-700">School of Physics and Astronomy (SoPA)</p>*/}
            {/*                <div className="flex justify-center mt-4 space-x-4">*/}
            {/*                    <div className="w-20 h-20 bg-gray-300 rounded-full"></div>*/}
            {/*                    <div className="w-20 h-20 bg-gray-300 rounded-full"></div>*/}

            {/*                </div>*/}
            {/*            </div>*/}

            {/*            /!* College of Medicine and Veterinary Medicine *!/*/}
            {/*            <div className="border-4 border-blue-400 p-4 text-center rounded-md relative">*/}
            {/*                <h3 className="text-blue-600 font-semibold">College of Medicine and Veterinary Medicine*/}
            {/*                    (CMVM)</h3>*/}
            {/*                <p className="text-gray-700">Institute for Genetics and Cancer (IGC)</p>*/}
            {/*                <p className="text-gray-700">Royal Infirmary (Little France)</p>*/}
            {/*                <p className="text-gray-700">Roslin Institute</p>*/}
            {/*                /!*<div className="mt-2">*!/*/}
            {/*                /!*    <div className="w-20 h-20 bg-gray-300 mx-auto rounded-full"></div>*!/*/}
            {/*                /!*</div>*!/*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        /!* Arrow to Centre *!/*/}
            {/*        <div className="flex justify-center items-center relative mt-2">*/}
            {/*            /!* Left arrow *!/*/}
            {/*            <div className="absolute left-1/4 transform -translate-y-1/2 -rotate-45">*/}
            {/*                <div className="border-t-4 border-blue-400 w-8"></div>*/}
            {/*                <div className="w-4 h-4 bg-blue-400 rotate-45 -translate-y-1/2"></div>*/}
            {/*            </div>*/}

            {/*            /!* Right arrow *!/*/}
            {/*            <div className="absolute right-1/4 transform -translate-y-1/2 rotate-90">*/}
            {/*                <div className="border-t-4 border-blue-400 w-8"></div>*/}
            {/*                <div className="w-4 h-4 bg-blue-400 rotate-45 -translate-y-1/2"></div>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        /!* Centre *!/*/}
            {/*        <div className="border-4 border-red-400 p-6 text-center rounded-md max-w-2xl mx-auto relative">*/}
            {/*            <h3 className="text-red-500 font-semibold">Edinburgh Centre for Biomedical Physics (ECBP)</h3>*/}
            {/*            <p className="text-gray-700">*/}
            {/*                A virtual centre with a focus on applying physics to biomedical, clinically relevant problems*/}
            {/*            </p>*/}
            {/*            <div className="flex justify-center mt-4 space-x-4">*/}
            {/*                <div className="w-20 h-20 bg-gray-300 rounded-full"></div>*/}
            {/*                <div className="w-20 h-20 bg-gray-300 rounded-full"></div>*/}
            {/*                <div className="w-20 h-20 bg-gray-300 rounded-full"></div>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        /!* Arrow to Focus Areas *!/*/}
            {/*        <div className="flex justify-center items-center relative mt-2">*/}
            {/*            /!* Left arrow *!/*/}
            {/*            <div className="absolute left-1/4 transform -translate-y-1/2 rotate-45">*/}
            {/*                <div className="border-t-4 border-green-400 w-16"></div>*/}
            {/*                <div className="w-4 h-4 bg-green-400 rotate-45 -translate-y-1/2"></div>*/}
            {/*            </div>*/}

            {/*            /!* Center arrow *!/*/}
            {/*            <div className="absolute left-1/2 transform -translate-x-1/2">*/}
            {/*                <div className="border-t-4 border-green-400 w-16"></div>*/}
            {/*                <div className="w-4 h-4 bg-green-400 rotate-45 -translate-y-1/2"></div>*/}
            {/*            </div>*/}

            {/*            /!* Right arrow *!/*/}
            {/*            <div className="absolute right-1/4 transform -translate-y-1/2 -rotate-45">*/}
            {/*                <div className="border-t-4 border-green-400 w-16"></div>*/}
            {/*                <div className="w-4 h-4 bg-green-400 rotate-45 -translate-y-1/2"></div>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        /!* Bottom Row *!/*/}
            {/*        <div className="grid grid-cols-3 gap-4">*/}
            {/*            /!* Detectors *!/*/}
            {/*            <div className="border-4 border-green-400 p-4 text-center rounded-md">*/}
            {/*                <p className="text-green-600 font-semibold">Detectors, Imaging and Analysis</p>*/}
            {/*            </div>*/}

            {/*            /!* Molecular Mechanisms *!/*/}
            {/*            <div className="border-4 border-green-400 p-4 text-center rounded-md">*/}
            {/*                <p className="text-green-600 font-semibold">Molecular Mechanisms of Disease</p>*/}
            {/*            </div>*/}

            {/*            /!* Physics of Viruses and Biofilms *!/*/}
            {/*            <div className="border-4 border-green-400 p-4 text-center rounded-md">*/}
            {/*                <p className="text-green-600 font-semibold">Physics of Viruses and Biofilms</p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default AboutPage;
