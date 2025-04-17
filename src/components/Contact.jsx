import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
                "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
                form.current,
                "YOUR_USER_ID" // Replace with your EmailJS user ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message sent successfully!");
                },
                (error) => {
                    console.log(error.text);
                    alert("Failed to send the message. Please try again.");
                }
            );

        e.target.reset();
    };

    return (
        <section className="bg-white py-5 font-inter">
            <div>
                <h2 className="text-[#484848] text-center text-[30px] font-[700]">
                    Get in Touch
                </h2>
                <p className="text-[#6D7681] text-center text-[12px] font-[500]">
                    Have questions about our courses or need assistance? We’re here to
                    help!
                </p>
                <div className="flex justify-center items-center gap-10 m-10 flex-wrap">
                    <div className="border-2 border-gray-300 rounded-md w-[400px] md:w-[500px] shadow-lg">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="flex justify-center items-center gap-5 m-5 flex-wrap">
                                <div className="flex-column w-[500px] p-5">
                                    <label htmlFor="name" className="text-[#484848] font-bold">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="border border-gray-300 rounded-md p-2 w-full"
                                        required
                                    />
                                </div>
                                <div className="flex-column w-[500px] p-5">
                                    <label htmlFor="email" className="text-[#484848] font-bold">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="border border-gray-300 rounded-md p-2 w-full"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-5 mx-5 flex-wrap">
                                <div className="flex-column w-[500px] p-5">
                                    <label
                                        htmlFor="message"
                                        className="text-[#484848] font-bold"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        className="border border-gray-300 rounded-md p-2 w-full"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="w-[400px] md:w-[500px] px-10 pb-5">
                                <button
                                    type="submit"
                                    className="bg-[#008D27] text-white w-full p-2 rounded-md"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="space-y-10">
                        <div className="border-2 border-gray-300 p-5 rounded-md shadow-lg space-y-5 w-[400px] md:w-[500px]">
                            <h1 className="font-bold">Contact Information</h1>
                            <div className="flex gap-5">
                                <img src="./image/Frame 90 (1).png" alt="" />
                                <div>
                                    <p className="font-bold">Address</p>
                                    <p>123 Tech94025 Street, Silicon Valley, CA</p>
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <img src="./image/Frame 90 (2).png" alt="" />
                                <div>
                                    <p className="font-bold">Phone</p>
                                    <p>+1 (123) 456-7890</p>
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <img src="./image/Frame 90 (3).png" alt="" />
                                <div>
                                    <p className="font-bold">Email</p>
                                    <p>info@bchub.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-2 border-gray-300 p-5 rounded-md shadow-lg space-y-5 w-[400px] md:w-[500px]">
                            <h2 className="font-bold">Business Hours</h2>
                            <div className="flex justify-between">
                                <p>Monday - Friday</p>
                                <p>9:00 AM - 6:00 PM</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Saturday</p>
                                <p>10:00 AM - 4:00 PM</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Sunday</p>
                                <p>Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;