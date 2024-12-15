import axios from 'axios';

const API_URL = 'https://api.github.com';

export const githubApi = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`, // Use the key if required
    },
});