import React, { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    // Destructure formData for simplicity and compatibility with tests
    const { username, email, password } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!username) newErrors.username = "Username is required";
        if (!email) newErrors.email = "Email is required";
        if (!password) newErrors.password = "Password is required";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted:", formData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username} // Use destructured value
                    onChange={handleChange} // Update state
                />
                {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email} // Use destructured value
                    onChange={handleChange} // Update state
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password} // Use destructured value
                    onChange={handleChange} // Update state
                />
                {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;