import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const PopularProject = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("https://api.example.com/projects"); // Replace with your API endpoint
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section
            id="projects"
            className="justify-center items-center gap-10 mb-5  overflow-hidden"
        >
            <div>
                <div className="m-10">
                    <h2 className="text-[#484848] text-center text-[30px] font-[700]">
                        Popular Projects
                    </h2>
                    <p className="text-[#6D7681] text-center text-[12px] font-[500]">
                        Discover our latest work and innovations
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-15">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white w-[500px] h-[500px] rounded-sm"
                        >
                            <div>
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="p-5 text-[20px]">
                                <h2 className="font-bold my-5">{project.title}</h2>
                                <div className="flex justify-between my-5">
                                    <div className="text-[#008D27] hover:bg-[#008D27] hover:text-white px-2">
                                        <Link to={project.hireLink}>Hire</Link>
                                    </div>
                                    <div className="bg-[#008D27] text-white px-2">
                                        <Link to={project.livePreviewLink}>Live Preview</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularProject;