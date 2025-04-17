import React from 'react';
import Vector from "../assets/image/Vector1.png";
import mdi_code from "../assets/image/mdi_code.png";
import ic_baseline_security from "../assets/image/ic_baseline-security.png";
import mdi_design from "../assets/image/mdi_design.png";


const OurServices = () => {
    return (
        <section className="bg-white my-8 py-4">
            <div className="my-5">
                <div className="text-[#484848] text-center text-[30px] font-[700]">
                    Our Services
                </div>
                <div className="text-[#6D7681] text-center text-[12px] font-[500]">
                    Comprehensive solutions for your digital needs
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-10 mb-5">
                <div className="flex-column md:w-[500px] w-[400px] p-5 bg-white border-1 border-white rounded-lg border-solid shadow-lg">
                    <img className="my-4 h-12 w-12" src={Vector} alt="" />
                    <div className="text-[#6D7681] font-[700]">Web & Mobile Development</div>
                    <div className="text-[#6D7681] text-[12px]">
                        Custom solutions built with cutting-edge technologies for web and mobile platforms.
                    </div>
                </div>
                <div className="flex-column md:w-[500px] w-[400px] p-5 bg-white border-1 border-white rounded-lg border-solid shadow-lg">
                    <img className="my-4 h-12 w-12" src={mdi_code} alt="" />
                    <div className="text-[#6D7681] font-[700]">Digital Marketing</div>
                    <div className="text-[#6D7681] text-[12px]">
                        Strategic digital marketing solutions to boost your online presence and reach.
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-10">
                <div className="flex-column md:w-[500px] w-[400px] p-5 bg-white border-1 border-white rounded-lg border-solid shadow-lg">
                    <img className="my-4 h-12 w-12" src={ic_baseline_security} alt="" />
                    <div className="text-[#6D7681] font-[700]">Cybersecurity & Data Analysis</div>
                    <div className="text-[#6D7681] text-[12px]">
                        Robust security solutions and data-driven insights for your business.
                    </div>
                </div>
                <div className="flex-column md:w-[500px] w-[400px] p-5 bg-white border-1 border-white rounded-lg border-solid shadow-lg">
                    <img className="my-4 h-12 w-12" src={mdi_design} alt="" />
                    <div className="text-[#6D7681] font-[700]">UI/UX Design & Tech Projects</div>
                    <div className="text-[#6D7681] text-[12px]">
                        User-centered design solutions that create engaging digital experiences.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurServices;