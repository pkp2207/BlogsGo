import React, { useEffect, useState } from 'react';
import { getBlogs } from '../services/blogService';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const blogsData = await getBlogs();
                setBlogs(blogsData);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div>
            <h1>Blogs</h1>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id} style={{ marginBottom: '20px' }}>
                        <h2>{blog.title}</h2>
                        <p>{blog.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blogs;
