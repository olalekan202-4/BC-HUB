import React from 'react';
import ben from "../assets/image/ben.png";
import john from "../assets/image/john.png";

const Testimonials = () => {
    return (
        <section className="font-inter">
            <div>
                <div>
                    <h2 className="text-[#484848] text-center text-[30px] font-[700]">Client Testimonials</h2>
                    <p className="text-[#6D7681] text-center text-[12px] font-[500]">What our clients have to say about us</p>
                </div>
                <div className="flex justify-center items-center gap-10 m-10 flex-wrap">
                    <div className="bg-white w-[500px] p-10 rounded-sm">
                        <div className="flex">
                            <img className="h-15 w-15 cover rounded-full" src={john} alt="pic" />
                            <div className="ml-4 mt-2">
                                <p className="font-bold">John Smith</p>
                                <p>CEO, Tech Solutions</p>
                            </div>
                        </div>
                        <div className="my-5">
                            "BC HUB transformed our digital presence with their innovative solutions and professional approach. Highly recommended!"
                        </div>
                    </div>
                    <div className="bg-white w-[500px] p-10 rounded-sm">
                        <div className="flex">
                            <img className="h-15 w-15 contain rounded-full" src={ben} alt="pic" />
                            <div className="ml-4 mt-2">
                                <p className="font-bold">Ben Johnson</p>
                                <p>CEO, Innovative Tech</p>
                            </div>
                        </div>
                        <div className="my-5">
                            "Working with BC HUB was a game-changer for our business. Their expertise and dedication are <br /> unmatched."
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;