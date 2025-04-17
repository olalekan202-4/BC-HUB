import React from "react";
import famicons from "../assets/image/famicons_bulb-sharp.png"
import fluent_people from "../assets/image/fluent_people-community-12-filled.png"
import tabler_clock from "../assets/image/tabler_clock-filled.png"
const WhyChooseUs = () => {
    return (
        <div className="my-5">
            <div className="text-[#484848] text-center text-[30px] font-[700]">
                Why Choose Us
            </div>
            <div className="text-[#6D7681] text-center text-[12px] font-[500]">
                What sets us apart from the rest
            </div>
            <div className="flex flex-wrap justify-center items-center gap-10 p-5">
                <div className="flex-column w-70 bg-white p-4">
                    <img
                        src={famicons}
                        alt="light"
                        className="w-7"
                    />
                    <div className="text-[#6D7681] font-[700]">Innovative Solutions</div>
                    <div className="text-[#6D7681] text-[12px]">
                        Cutting-edge technology and creative approaches to solve complex
                        problems.
                    </div>
                </div>
                <div className="flex-column w-70 bg-white p-4">
                    <img
                        src={fluent_people}
                        alt="light"
                        className="w-7"
                    />
                    <div className="text-[#6D7681] font-[700]">Expert Team</div>
                    <div className="text-[#6D7681] text-[12px]">
                        Highly skilled professionals with diverse industry experience.
                    </div>
                </div>
                <div className="flex-column w-70 bg-white p-4">
                    <img
                        src={tabler_clock}
                        alt="light"
                        className="w-7"
                    />
                    <div className="text-[#6D7681] font-[700]">Timely Delivery</div>
                    <div className="text-[#6D7681] text-[12px]">
                        Consistent track record of delivering projects on schedule.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;