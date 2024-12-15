import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setUserData(null);

        try {
            const data = await fetchUserData(searchTerm);
            setUserData(data);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {/* Conditional Rendering */}
            {loading && <p>Loading...</p>}
            {error && <p>Looks like we can't find the user.</p>}
            {userData && (
                <div className="user-data">
                    <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
                    <h2>{userData.name || userData.login}</h2>
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                        View Profile
                    </a>
                </div>
            )}
        </div>
    );
};

export default Search;