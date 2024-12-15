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
            setUsers(data.items);
        } catch (err) {
            setError('Failed to fetch users. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="GitHub username"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Minimum Repositories"
                    value={minRepos}
                    onChange={(e) => setMinRepos(e.target.value)}
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </form>

            {error && <p>{error}</p>}

            <div>
                {users.map((user) => (
                    <div key={user.id}>
                        <h3>{user.login}</h3>
                        <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
                        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                            View Profile
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;