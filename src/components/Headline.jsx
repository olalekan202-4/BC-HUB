import React from "react";
import frame from "../assets/image/Frame 8.png";
const Headline = () => {
    return (
        <div className="flex p-14 items-center gap-10 mt-[10%] mx-5 md:mx-18 justify-around">
            <div className="flex-column w-full md:w-100">
                <div className="font-[700] text-[2.5em] text-[#484848]">
                    Empowering Innovation Through Tech Solutions
                </div>
                <div className="text-[#6D7681] text-[14px] my-2">
                    We combine cutting-edge technology with creative expertise to deliver
                    exceptional digital solutions that drive business growth and
                    innovation
                </div>
                <div className="flex gap-5 my-4">
                    <button className="text-[#008D27] bg-white border-1 p-1 px-4 py-1.5 text-[14px] font-[700] rounded-md">
                        Get CV
                    </button>
                    <button className="bg-[#008D27] text-white border-1 p-1 px-4 py-1.5 text-[14px] font-[700] rounded-md">
                        Hire Us
                    </button>
                </div>
            </div>
            <div className="w-150">
                <img src={frame} alt="frame" />
            </div>
        </div>
    );
};

export default Headline;