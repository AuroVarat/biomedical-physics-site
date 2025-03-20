import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
// import a png logo from assets folder
import logo from '../assets/logo.png';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    // onclick go to home
    const goHome = () => {
        window.location.href = '/';
    };

    return (
        <nav className=" w-screen  bg-transparent text-white py-4 px-8 flex justify-between items-center font-mono">
            <div className="text-xl font-extrabold
            animate-text bg-gradient-to-r from-gray-50 via-gray-400 to-gray-50 bg-clip-text text-white
            ">
                <img src={logo} alt="logo" className="w-48 inline-block" onClick={goHome} />
            </div>
            {/*<div className="hidden md:block">*/}
            {/*    <a href="#" className="ml-4 hover:text-gray-300">*/}
            {/*        Home*/}
            {/*    </a>*/}
            {/*    <a href="#" className="ml-4 hover:text-gray-300">*/}
            {/*        About*/}
            {/*    </a>*/}
            {/*    <a*/}
            {/*        href="#"*/}
            {/*        className="ml-4 hover:text-gray-300"*/}
            {/*        // go to external link on click*/}
            {/*        onClick={() =>*/}
            {/*            window.open(*/}
            {/*                'https://scholar.google.co.uk/citations?hl=en&user=OvfzkRoAAAAJ&view_op=list_works&sortby=pubdate',*/}
            {/*                '_blank'*/}
            {/*            )}*/}
            {/*    >*/}
            {/*        Publications*/}
            {/*    </a>*/}
            {/*    <a href="#contact" className="ml-4 hover:text-gray-300">*/}
            {/*        Contact*/}
            {/*    </a>*/}
            {/*    /!* Add more menu items as needed *!/*/}
            {/*</div>*/}

            {/*<div className="md:hidden">*/}
            {/*    <Menu as="div" className="relative inline-block text-left">*/}
            {/*        <Menu.Button*/}
            {/*            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">*/}
            {/*            <svg*/}
            {/*                className="w-6 h-6 text-white"*/}
            {/*                fill="none"*/}
            {/*                stroke="currentColor"*/}
            {/*                viewBox="0 0 24 24"*/}
            {/*                xmlns="http://www.w3.org/2000/svg"*/}
            {/*            >*/}
            {/*                <path*/}
            {/*                    strokeLinecap="round"*/}
            {/*                    strokeLinejoin="round"*/}
            {/*                    strokeWidth="2"*/}
            {/*                    d="M4 6h16M4 12h16m-7 6h7"*/}
            {/*                />*/}
            {/*            </svg>*/}
            {/*        </Menu.Button>*/}

            {/*        <Menu.Items*/}
            {/*            className="absolute right-0 mt-2 origin-top-right bg-gray-300 divide-y divide-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">*/}
            {/*            <div className="px-1 py-1 ">*/}
            {/*                <Menu.Item>*/}
            {/*                    {({active}) => (*/}
            {/*                        <a*/}
            {/*                            href="#"*/}
            {/*                            className={`${*/}
            {/*                                active ? 'bg-gray-800' : ''*/}
            {/*                            } text-gray-900 block px-4 py-2 text-sm`}*/}
            {/*                        >*/}
            {/*                            Home*/}
            {/*                        </a>*/}
            {/*                    )}*/}
            {/*                </Menu.Item>*/}
            {/*                <Menu.Item>*/}
            {/*                    {({ active }) => (*/}
            {/*                        <a*/}
            {/*                            href="#"*/}
            {/*                            className={`${*/}
            {/*                                active ? 'bg-gray-800' : ''*/}
            {/*                            } text-gray-900 block px-4 py-2 text-sm`}*/}
            {/*                        >*/}
            {/*                            About*/}
            {/*                        </a>*/}
            {/*                    )}*/}
            {/*                </Menu.Item>*/}
            {/*                <Menu.Item>*/}
            {/*                    {({ active }) => (*/}
            {/*                        <a*/}
            {/*                            href="#"*/}
            {/*                            className={`${*/}
            {/*                                active ? 'bg-gray-800' : ''*/}
            {/*                            } text-gray-900 block px-4 py-2 text-sm`}*/}

            {/*                            // go to external link on click*/}
            {/*                            onClick={() =>*/}
            {/*                                window.open(*/}
            {/*                                    'https://scholar.google.co.uk/citations?hl=en&user=OvfzkRoAAAAJ&view_op=list_works&sortby=pubdate',*/}
            {/*                                    '_blank'*/}
            {/*                                )}*/}
            {/*                        >*/}
            {/*                            Publications*/}
            {/*                        </a>*/}
            {/*                    )}*/}
            {/*                </Menu.Item>*/}

            {/*                <Menu.Item>*/}
            {/*                    {({ active }) => (*/}
            {/*                        <a*/}
            {/*                            href="#"*/}
            {/*                            className={`${*/}
            {/*                                active ? 'bg-gray-800' : ''*/}
            {/*                            } text-gray-900 block px-4 py-2 text-sm`}*/}
            {/*                        >*/}
            {/*                            Contact*/}
            {/*                        </a>*/}
            {/*                    )}*/}
            {/*                </Menu.Item>*/}
            {/*                /!* Add more menu items as needed *!/*/}
            {/*            </div>*/}
            {/*        </Menu.Items>*/}
            {/*    </Menu>*/}
            {/*</div>*/}
        </nav>
    );
};

export default Header;
