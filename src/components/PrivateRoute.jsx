import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(null); // Start as null (loading)

    const backendurl = process.env.REACT_APP_BACKEND_URL;

    React.useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('jwt');

            try {
                const response = await fetch(`${backendurl}/auth/check`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Authenticated:', data);
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error('Auth check failed:', error);
                setIsAuthenticated(false);
            }
        };

        checkAuth();
    }, [backendurl]);

    if (isAuthenticated === null) {
        // Still checking auth status
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                fontSize: '1.5rem',
                color: '#555',
            }}>
                Loading...
            </div>
        );
    }

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
