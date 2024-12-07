import { useState } from "react";
import { getAuthStatus, login, logout } from "../auth";

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(getAuthStatus());

    const toggleAuth = () => {
        if (isAuthenticated) {
            logout();
        } else {
            login();
        }
        setIsAuthenticated(getAuthStatus());
    };

    return { isAuthenticated, toggleAuth };
};

export default useAuth;