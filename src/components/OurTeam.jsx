import React, { useEffect, useState } from "react";
import Group from "../assets/image/Group.png";
import mdi_linkedin from "../assets/image/mdi_linkedin.png";

const OurTeam = () => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        // Fetch team members from API
        const fetchTeamMembers = async () => {
            try {
                const response = await fetch("https://api.example.com/team"); // Replace with your API endpoint
                const data = await response.json();
                setTeamMembers(data);
            } catch (error) {
                console.error("Error fetching team members:", error);
            }
        };

        fetchTeamMembers();
    }, []);

    return (
        <div className="my-5">
            <div className="text-[#484848] text-center text-[30px] font-[700]">
                Meet Our Team
            </div>
            <div className="text-[#6D7681] text-center text-[12px] font-[500]">
                Meet the experts behind our success
            </div>
            <div className="flex flex-wrap justify-center items-center gap-10 p-5">
                {teamMembers.map((member) => (
                    <div
                        key={member.id}
                        className="flex-column w-60 bg-white border-1 border-white rounded-lg border-solid shadow-lg"
                    >
                        <img src={member.image} alt={member.name} />
                        <p className="text-[#6D7681] font-bold text-[14px] p-2">
                            {member.name}
                        </p>
                        <p className="text-[#008D27] font-bold text-[14px] px-2 leading-0">
                            {member.role}
                        </p>
                        <div className="flex w-10 gap-3 my-4 p-2">
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                <img src={mdi_linkedin} alt="linkedin" />
                            </a>
                            <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                                <img src={Group} alt="twitter" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurTeam;