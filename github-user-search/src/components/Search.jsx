import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Check for empty input
        if (!searchTerm.trim()) {
            setError('Please enter a valid GitHub username.');
            setUserData(null);
            return;
        }

        setLoading(true);
        setError('');
        setUserData(null);

        try {
            const response = await axios.get(`https://api.github.com/users/${searchTerm}`);
            setUserData(response.data);
        } catch (err) {
            if (err.response && err.response.status === 404) {
                setError("Looks like we can't find the user.");
            } else {
                setError('An error occurred. Please try again later.');
            }
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
                <button type="submit" disabled={loading}>
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </form>

            {/* Feedback Messages */}
            {error && <p className="error-message">{error}</p>}
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