import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchAdvancedUsers = async ({ searchTerm, location, minRepos }) => {
    let query = `q=${searchTerm}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const response = await axios.get(`${BASE_URL}/search/users?${query}`);
    return response.data.items;
};