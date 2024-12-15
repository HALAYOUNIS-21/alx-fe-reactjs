import React, { useState } from 'react';
import { fetchUserData, fetchAdvancedUsers } from '../services/githubService';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [userData, setUserData] = useState(null);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleBasicSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setUserData(null);

        try {
            const data = await fetchUserData(searchTerm);
            setUserData(data);
        } catch (err) {
            setError('Failed to fetch user data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleAdvancedSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setUsers([]);

        try {
            const data = await fetchAdvancedUsers({ searchTerm, location, minRepos });
            setUsers(data.items);
        } catch (err) {
            setError('Failed to fetch advanced users. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search">
            {/* Basic Search */}
            <form onSubmit={handleBasicSearch}>
                <input
                    type="text"
                    placeholder="GitHub username"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Searching...' : 'Basic Search'}
                </button>
            </form>

            {error && <p>{error}</p>}

            {userData && (
                <div className="user-data">
                    <h3>{userData.login}</h3>
                    <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                        View Profile
                    </a>
                </div>
            )}

            {/* Advanced Search */}
            <form onSubmit={handleAdvancedSearch}>
                <input
                    type="text"
                    placeholder="Search term"
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
                    {loading ? 'Searching...' : 'Advanced Search'}
                </button>
            </form>

            {users.length > 0 && (
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
            )}
        </div>
    );
};

export default Search;