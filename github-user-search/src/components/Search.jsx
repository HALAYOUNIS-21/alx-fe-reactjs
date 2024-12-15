import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setUsers([]);

        // Build the advanced query
        let query = `q=${searchTerm}`;
        if (location) query += `+location:${location}`;
        if (minRepos) query += `+repos:>=${minRepos}`;

        try {
            const response = await axios.get(`https://api.github.com/search/users?${query}`);
            setUsers(response.data.items);
        } catch (err) {
            setError('Failed to fetch users. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search p-5">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-4 rounded-lg shadow-lg space-y-4"
            >
                <div>
                    <label htmlFor="username" className="block text-gray-700">Username</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="GitHub username"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="location" className="block text-gray-700">Location</label>
                    <input
                        id="location"
                        type="text"
                        placeholder="e.g., San Francisco"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="minRepos" className="block text-gray-700">Minimum Repositories</label>
                    <input
                        id="minRepos"
                        type="number"
                        placeholder="e.g., 10"
                        value={minRepos}
                        onChange={(e) => setMinRepos(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </form>

            {error && <p className="text-red-500 mt-4">{error}</p>}
            <div className="mt-4">
                {users.map((user) => (
                    <div key={user.id} className="p-4 border-b">
                        <img
                            src={user.avatar_url}
                            alt={`${user.login}'s avatar`}
                            className="w-16 h-16 rounded-full"
                        />
                        <h3 className="text-lg font-bold">{user.login}</h3>
                        {user.location && <p>{user.location}</p>}
                        <a
                            href={user.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500"
                        >
                            View Profile
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;