import React from 'react';
import us from "../assets/image/us.jpg";

const About = () => {
    return (
        <section id="about" className="bg-white py-5">
            <div className="md:flex justify-around items-center gap-10 m-10 md:m-20">
                <div className="md:w-[50%] text-start">
                    <h2 className="text-[#484848] text-start text-[35px] font-[800]">About Us</h2>
                    <p className="text-start my-5 font-inter">
                        Empowering businesses with innovative tech solutions
                    </p>
                    <p className="font-inter space-0">
                        At BC HUB Portfolio, we are a dynamic and forward-thinking organization dedicated to
                        empowering innovation through cutting-edge technology solutions. Established with a
                        vision to transform industries and enhance lives, we have grown into a trusted leader in
                        the tech landscape, delivering excellence across a wide range of services. Our journey
                        began with a passion for leveraging technology to solve real-world challenges, and
                        today, we stand as a beacon of creativity, expertise, and reliability for businesses and
                        communities alike.
                    </p>
                    <div className="flex justify-around items-center gap-10 my-5">
                        <div>
                            <p className="text-[#008D27] font-bold text-[20px]">50+</p>
                            <p>Projects</p>
                        </div>
                        <div>
                            <p className="text-[#008D27] font-bold text-[20px]">100+</p>
                            <p>Clients</p>
                        </div>
                        <div>
                            <p className="text-[#008D27] font-bold text-[20px]">200+</p>
                            <p>Community</p>
                        </div>
                    </div>
                </div>
                <div className="md:w-[50%] w-full">
                    <img src={us} alt="About Us" />
                </div>
            </div>
        </section>
    );
};

export default About;