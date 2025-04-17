import React from 'react';
import solar_transmission from "../assets/image/solar_transmission-circle-linear.png"
import transmission_circle from "../assets/image/solar_transmission-circle-linear (1).png"

const OurMission = () => {
    return (
        <div className="bg-[white] flex flex-wrap items-center justify-center gap-5">
            <div className="flex-column bg-[#ECFDF5] md:w-120 w-[400px] p-10 my-15">
                <img
                    src={solar_transmission}
                    alt="light"
                    className="w-7"
                />
                <div className="text-[#484848] font-[700] text-[30px]">Our Mission</div>
                <div className="text-[#6D7681] text-[12px] w-90">
                    To empower business through innovative technology solution, driving
                    growth and digital transformation in an ever-evolving landscape.
                </div>
            </div>
            <div className="flex-column bg-[#ECFDF5] md:w-120 w-[400px] p-10 my-15">
                <img
                    src={transmission_circle}
                    alt="light"
                    className="w-7"
                />
                <div className="text-[#484848] font-[700] text-[30px]">Our Vision</div>
                <div className="text-[#6D7681] text-[12px] w-90">
                    To be the leading force in technology innovation, creating
                    sustainable digital solutions that shape the future of businesses
                    worldwide.
                </div>
            </div>
        </div>
    );
};

export default OurMission;