import React from 'react';
import arrow_drop from "../assets/image/ri_arrow-drop-down-line.png";

const Faq = () => {
    return (
        <div className="my-5">
            <div className="text-[#484848] text-center text-[30px] font-[700]">
                Frequently Asked Questions
            </div>
            <div className="text-[#6D7681] text-center text-[12px] font-[500]">
                Find answers to common questions about our courses and platform
            </div>

            <div className="flex-column justify-center items-center bg-white border-1 border-white rounded-lg border-solid shadow-2xl mx-auto h-32 md:w-180 w-[400px] my-5">
                <div className="flex justify-between items-center px-8">
                    <p className="text-[11px] font-[700] text-[#484848]">
                        What services do you offer
                    </p>
                    <img src={arrow_drop} alt="" className="w-15" />
                </div>
                <p className="text-[11px] px-8 text-[#6D7681] md:w-120 w-[400px]">
                    We offer a comprehensive range of digital services including web
                    development, mobile app digital marketing and cyber security solutions
                </p>
            </div>

            <div className="flex-column justify-center items-center bg-white border-1 border-white rounded-lg border-solid shadow-2xl mx-auto h-32 md:w-180 w-[400px] mb-5">
                <div className="flex justify-between items-center px-8">
                    <p className="text-[11px] font-[700] text-[#484848]">
                        How long does a typical project last?
                    </p>
                    <img src={arrow_drop} alt="" className="w-15" />
                </div>
                <p className="text-[11px] px-8 text-[#6D7681] md:w-120 w-[400px]">
                    Project timelines vary based on complexity and scope. We provide
                    detailed timeline during our initial consultation.
                </p>
            </div>

            <div className="flex-column justify-center items-center bg-white border-1 border-white rounded-lg border-solid shadow-2xl mx-auto h-32 md:w-180 w-[400px] mb-5">
                <div className="flex justify-between items-center px-8">
                    <p className="text-[11px] font-[700] text-[#484848]">
                        Do you offer support after project completion?
                    </p>
                    <img src={arrow_drop} alt="" className="w-15" />
                </div>
                <p className="text-[11px] px-8 text-[#6D7681] md:w-120 w-[400px]">
                    Yes, we provide ongoing support and maintenance services to ensure
                    your solution continues to perform optimally.
                </p>
            </div>

            <div className="flex-column justify-center items-center bg-white border-1 border-white rounded-lg border-solid shadow-2xl mx-auto h-32 md:w-180 w-[400px] mb-5">
                <div className="flex justify-between items-center px-8">
                    <p className="text-[11px] font-[700] text-[#484848]">
                        What is your pricing model?
                    </p>
                    <img src={arrow_drop} alt="" className="w-15" />
                </div>
                <p className="text-[11px] px-8 text-[#6D7681] md:w-120 w-[400px]">
                    We offer flexible pricing models based on project requirements.
                    Contact us for a detailed quote.
                </p>
            </div>
        </div>
    );
};

export default Faq;