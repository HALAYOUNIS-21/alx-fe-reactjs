import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const fetchAdvancedUsers = async ({ searchTerm, location, minRepos, page = 1 }) => {
    // Build the query string
    let query = `q=${searchTerm}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    try {
        const response = await axios.get(`${BASE_URL}?${query}&page=${page}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};