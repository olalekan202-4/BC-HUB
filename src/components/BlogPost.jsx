import React, { useEffect, useState } from "react";

const BlogPost = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("https://api.example.com/blog-posts"); // Replace with your API endpoint
                const data = await response.json();
                setPosts(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching blog posts:", error);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <div><div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24 animate-spin"></div></div>;
    }

    return (
        <section className="bg-white my-8 py-4">
            <div className="my-5">
                <div className="text-[#484848] text-center text-[30px] font-[700]">
                    Latest Blog Posts
                </div>
                <div className="text-[#6D7681] text-center text-[12px] font-[500]">
                    Insights and updates from our experts
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-15">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="flex-column w-60 bg-white border-1 border-white rounded-lg border-solid shadow-2xl"
                    >
                        <img src={post.image} alt={post.title} className="mb-5" />
                        <p className="text-[#008D27] text-[11px] font-bold px-3 py-1">
                            {post.date}
                        </p>
                        <p className="text-[11px] text-[#484848] font-[700] px-3 py-1">
                            {post.title}
                        </p>
                        <p className="text-[11px] px-3 text-[#6D7681]">{post.description}</p>
                        <button className="text-[#008D27] text-[11px] mt-5 px-3 py-5 font-bold">
                            Read More <span className="text-[20px] font-[900] ml-2">→</span>
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogPost;