import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const getBlogs = async () => {
    try {
        const response = await axios.get(`${API_URL}/blogs`);
        return response.data;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        throw error;
    }
};
