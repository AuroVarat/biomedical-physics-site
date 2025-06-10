// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-gray-100 text-gray-600 py-3 px-4 text-xs">
            <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
                <p>&copy; University of Edinburgh 2025</p>
                <p>
                    Designed by <a
                    href="https://aurovarat.github.io/#/"
                    className="text-gray-500 hover:text-black transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                >Auro</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
