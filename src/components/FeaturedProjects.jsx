import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const FeaturedProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch projects from API
        const fetchProjects = async () => {
            try {
                const response = await fetch("https://api.example.com/projects");
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section className="text-[14px] font-inter">
            <div className="py-10">
                <div className="text-[#484848] text-center text-[30px] font-[700]">
                    Featured Projects
                </div>
                <div className="text-[#6D7681] text-center text-[12px] font-[500]">
                    Discover our latest work and innovations
                </div>
                <div className="flex justify-around items-center m-10 flex-wrap">
                    {projects.map((project) => (
                        <div key={project.id} className="w-[339px] bg-white my-5 rounded-sm">
                            <div>
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="p-5">
                                <h2 className="font-bold text-gray-700">{project.title}</h2>
                                <p>{project.description}</p>
                                <div className="flex justify-between text-[10px] my-5">
                                    <div className="flex">
                                        <img
                                            className="rounded-full h-12 w-12 cover"
                                            src={project.creatorImage}
                                            alt={project.creatorName}
                                        />
                                        <div className="ml-4 mt-2">
                                            <p className="font-bold">{project.creatorName}</p>
                                            <p>{project.techStack}</p>
                                        </div>
                                    </div>
                                    <div className="bg-[#008D27] text-white px-3 text-[12px] h-5 mt-3 rounded-sm">
                                        <Link to={project.hireLink}>Hire Creator</Link>
                                    </div>
                                </div>
                                <div className="bg-[#008D27] text-center text-white rounded-sm">
                                    <Link to={project.readMoreLink}>Read More</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;