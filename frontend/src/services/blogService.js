import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getBlogs = async () => {
    try {
        const response = await axios.get(`${API_URL}/blogs`);
        console.log('Blogs fetched:', response.data); 
        return response.data;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        throw error;
    }
};
