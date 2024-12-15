import React, { useState } from 'react';
import { fetchAdvancedUsers } from '../services/githubService';

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

        try {
            const data = await fetchAdvancedUsers({ searchTerm, location, minRepos });
            setUsers(data.items); // `items` contains the list of users
        } catch (err) {
            setError('Failed to fetch users. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search p-5">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="GitHub username"
                        className="border rounded w-full p-2"
                    />
                </div>
                <div>
                    <label>Location</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Location"
                        className="border rounded w-full p-2"
                    />
                </div>
                <div>
                    <label>Minimum Repositories</label>
                    <input
                        type="number"
                        value={minRepos}
                        onChange={(e) => setMinRepos(e.target.value)}
                        placeholder="Minimum repos"
                        className="border rounded w-full p-2"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </form>

            {error && <p className="text-red-500">{error}</p>}

            <div className="mt-4">
                {users.map((user) => (
                    <div key={user.id} className="border p-2 rounded mb-2">
                        <img
                            src={user.avatar_url}
                            alt={user.login}
                            className="w-16 h-16 rounded-full"
                        />
                        <h3 className="text-lg font-bold">{user.login}</h3>
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