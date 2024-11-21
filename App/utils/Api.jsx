import axios from 'axios';

export const fetchQuote = async () => {
    try {
        const response = await axios.get('https://thesimpsonsquoteapi.glitch.me/quotes');
        return response.data[0];
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};