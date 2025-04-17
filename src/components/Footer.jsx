import React from 'react';
import { Link } from 'react-router-dom';
import email from "../assets/image/ic_baseline-email.png";
import phone from "../assets/image/ic_baseline-phone.png";
import facebook from "../assets/image/ic_baseline-facebook.png";
import twitter from "../assets/image/prime_twitter.png";
import linkin from "../assets/image/linkin.png";
import instagram from "../assets/image/mingcute_instagram-fill.png";
import send from "../assets/image/mingcute_send-fill.png";


const Footer = () => {
    return (
        <footer className="bg-[#064E3B] text-white py-10 font-inter">
            <div>
                <div className="flex justify-center items-center gap-20 m-10 flex-wrap">
                    <div>
                        <h1 className="font-bold text-2xl my-5">BC HUB</h1>
                        <p>Empowering careers through</p>
                        <p>expert-led online education in</p>
                        <p>technology and development.</p>
                    </div>
                    <div>
                        <h2 className="font-bold text-xl my-5">Quick Links</h2>
                        <p><Link className="hover:underline" to="#about">About Us</Link></p>
                        <p><Link className="hover:underline" to="#">Academy</Link></p>
                        <p><Link className="hover:underline" to="#testmonies">Testimonies</Link></p>
                        <p><Link className="hover:underline" to="#">Contacts</Link></p>
                    </div>
                    <div>
                        <h2 className="font-bold text-xl my-5">Contact Us</h2>
                        <div className="flex my-3 gap-5">
                        <img className="h-6 w-6" src={email} alt="Email" />
                            <p>info@bchub.co</p>
                        </div>
                        <div className="flex my-3 gap-5">
                            <img className="h-6 w-6" src={phone} alt="Phone" />
                            <p>+1 (234) 567-890</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold text-xl my-5">Follow Us</h2>
                        <div className="flex gap-3">
                            <img className="h-10 w-10" src={facebook} alt="Facebook" />
                            <img className="h-10 w-10" src={twitter} alt="Twitter" />
                            <img className="h-10 w-10" src={instagram} alt="Instagram" />
                            <img className="h-10 w-10" src={linkin} alt="LinkedIn" />
                        </div>
                        <div className="mt-10">
                            <h1>Newsletter</h1>
                            <div className="flex rounded-sm">
                                <input
                                    type="email"
                                    className="placeholder:p-2 rounded-l-sm bg-white text-black p-2 placeholder:text-gray-700"
                                    name="email"
                                    placeholder="your email"
                                    id=""
                                />
                                <img
                                    className="bg-[#008D27] h-10 w-10 rounded-r-sm"
                                    src={send}
                                    alt="Send"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <p>©2025 BENCODES HUB. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;