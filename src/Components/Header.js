import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <div className="w-[80vw] flex justify-between md:w-[80vw] shadow-2xl shadow-gray-500 md:my-[2vw] md:mx-[10vw] rounded-2xl mx-10 my-8 text-black font-custom transform transition duration-300 ease-in-out hover:scale-105">
            <h1 className="text-[15px] w-6 font-semibold md:p-5 py-8 ml-5 md:text-4xl md:m-3">Swayam Mishra</h1>
            <div className="Links">
                <ul className="flex py-7 px-5 m-5 font-semibold">
                    <li className="mx-2 md:mx-6 text-[10px] md:text-lg cursor-pointer">
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            offset={-70}
                        >
                            About Me
                        </Link>
                    </li>
                    <li className="mx-2 md:mx-6 text-[10px] md:text-lg cursor-pointer">
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-70}
                        >
                            Contact Me
                        </Link>
                    </li>
                    <li className="mx-2 md:mx-6 text-[10px] md:text-lg cursor-pointer">
                        Resume
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;

