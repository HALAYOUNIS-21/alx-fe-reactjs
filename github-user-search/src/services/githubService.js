import axios from 'axios';

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
    // Base GitHub search API URL
    const BASE_URL = 'https://api.github.com/search/users?q';

    // Construct the query string
    let query = `${searchTerm}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    try {
        // Make the API request to the GitHub search endpoint
        const response = await axios.get(`${BASE_URL}${query}&page=${page}`);
        return response.data; // Return the response data containing users
    } catch (error) {
        console.error('Error fetching advanced users:', error);
        throw error;
    }
};