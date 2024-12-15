import axios from 'axios';

const BASE_URL = 'https://api.github.com';

/**
 * Fetches a single user by username.
 *
 * @param {string} username - The GitHub username to search for.
 * @returns {Promise<Object>} - The API response containing user data.
 */
export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/${username}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};

/**
 * Fetches users from GitHub based on advanced search criteria.
 *
 * @param {Object} params - The search parameters.
 * @param {string} params.searchTerm - The search term for the username.
 * @param {string} [params.location] - The location filter.
 * @param {number} [params.minRepos] - The minimum number of repositories filter.
 * @param {number} [params.page] - The page number for pagination (default: 1).
 * @returns {Promise<Object>} - The API response containing the search results.
 */
export const fetchAdvancedUsers = async ({ searchTerm, location, minRepos, page = 1 }) => {
    let query = `q=${searchTerm}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    try {
        const response = await axios.get(`${BASE_URL}/search/users?${query}&page=${page}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching advanced users:', error);
        throw error;
    }
};