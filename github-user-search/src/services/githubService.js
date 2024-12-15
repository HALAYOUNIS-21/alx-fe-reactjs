import axios from 'axios';

const BASE_URL = 'https://api.github.com';

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

    const url = `https://api.github.com/search/users?q=${query}&page=${page}`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching advanced users:', error);
        throw error;
    }
};

/**
 * Fetches a single GitHub user by their username.
 *
 * @param {string} username - The GitHub username.
 * @returns {Promise<Object>} - The API response containing user details.
 */
export const fetchUserData = async (username) => {
    const url = `${BASE_URL}/users/${username}`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};