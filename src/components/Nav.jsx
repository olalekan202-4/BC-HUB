import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/image/bchublogo green 1.png';
const Nav = () => {
    const toggleNav = () => {
        const nav = document.getElementById('nav');
        if (nav.classList.contains('hidden')) {
            nav.classList.remove('hidden');
        } else {
            nav.classList.add('hidden');
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50">
            <div className="flex justify-between bg-white p-1 align-items-lg-center">
                <div className="flex items-center gap-3 mx-15 my-2">
                    <img src={logo} alt="logo" />
                    <div className="text-[#008D27] font-[700]">BC HUB PORTFOLIO</div>
                </div>
                <div className="md:flex hidden text-center items-center text-[#8B8B8B] gap-8 mx-18 font-[500] text-[12px] my-2">
                    <div className="hover:bg-[#008D27] hover:text-white p-2 rounded-md text-center items-center">
                        <Link to="#about">About Us</Link>
                    </div>
                    <div className="hover:bg-[#008D27] hover:text-white p-2 rounded-md text-center items-center">
                        <Link to="">Contacts</Link>
                    </div>
                    <div className="hover:bg-[#008D27] hover:text-white p-2 rounded-md text-center items-center">
                        <Link to="">Academy</Link>
                    </div>
                    <div className="hover:bg-[#008D27] hover:text-white p-2 rounded-md text-center items-center">
                        <Link to="#projects">Projects</Link>
                    </div>
                </div>
                <p
                    id="button"
                    className="md:hidden text-black text-center items-center my-2 pt-2 mr-10"
                    onClick={toggleNav}
                >
                    <FaBars />
                </p>
            </div>
            <div
                id="nav"
                className="md:hidden hidden text-end bg-white space-y-5 text-[#8B8B8B] gap-8 border-t-1 pb-5 font-[500] text-[12px]"
            >
                <div className="hover:bg-[#008D27] hover:text-white px-10">
                    <Link to="#about">About Us</Link>
                </div>
                <div className="hover:bg-[#008D27] hover:text-white px-10">
                    <Link to="">Contacts</Link>
                </div>
                <div className="hover:bg-[#008D27] hover:text-white px-10">
                    <Link to="">Academy</Link>
                </div>
                <div className="hover:bg-[#008D27] hover:text-white px-10">
                    <Link to="#projects">Projects</Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;