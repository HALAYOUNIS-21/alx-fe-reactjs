import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';

const fetchUserData = async (username) => {
    if (!username) throw new Error('Username is required');
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;
};

export default fetchUserData;