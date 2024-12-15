import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Search from './Search';

// Create a mock adapter instance for Axios
const mock = new MockAdapter(axios);

describe('Search Component', () => {
    // Reset the mock after each test
    afterEach(() => {
        mock.reset();
    });

    test('displays "Looks like we can\'t find the user" when the API call fails', async () => {
        // Mock a 404 response for the "nonexistentuser" request
        mock.onGet('https://api.github.com/users/nonexistentuser').reply(404);

        // Render the Search component
        render(<Search />);

        // Simulate user input and search button click
        fireEvent.change(screen.getByPlaceholderText(/Enter GitHub username/i), {
            target: { value: 'nonexistentuser' },
        });
        fireEvent.click(screen.getByText(/Search/i));

        // Debugging: Log the rendered DOM to check for issues
        screen.debug();

        // Wait for the error message to appear
        await waitFor(() => {
            expect(screen.getByText("Looks like we can't find the user.")).toBeInTheDocument();
        });
    });

    test('calls the GitHub API and displays user data on success', async () => {
        // Mock a successful response for the "octocat" request
        mock.onGet('https://api.github.com/users/octocat').reply(200, {
            login: 'octocat',
            avatar_url: 'https://github.com/images/error/octocat_happy.gif',
            html_url: 'https://github.com/octocat',
            name: 'The Octocat',
        });

        // Render the Search component
        render(<Search />);

        // Simulate user input and search button click
        fireEvent.change(screen.getByPlaceholderText(/Enter GitHub username/i), {
            target: { value: 'octocat' },
        });
        fireEvent.click(screen.getByText(/Search/i));

        // Wait for the user's name to appear in the document
        expect(await screen.findByText('The Octocat')).toBeInTheDocument();
        expect(screen.getByRole('img', { name: /octocat's avatar/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /View Profile/i })).toHaveAttribute(
            'href',
            'https://github.com/octocat'
        );
    });
});