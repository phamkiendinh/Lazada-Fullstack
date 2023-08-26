import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children, initialAuthData }) => {
    const [isAuthenticated, setIsAuthenticated] =useState(initialAuthData.isAuthenticated || false);
    const [user, setUser] = useState(initialAuthData.user|| null);

    const login = (userData) => {
        setIsAuthenticated(true);
        setUser(userData);
        localStorage.setItem('authData', JSON.stringify({ isAuthenticated: true, user: userData }));
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
