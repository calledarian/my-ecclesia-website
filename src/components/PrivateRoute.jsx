// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';

// const PrivateRoute = () => {
//     const [isAuthenticated, setIsAuthenticated] = React.useState(null); // Start as null (loading)

//     React.useEffect(() => {
//         const checkAuth = async () => {
//             const token = localStorage.getItem('jwt');

//             try {
//                 const response = await fetch('http://localhost:3000/auth/check', {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (response.ok) {
//                     const data = await response.json();
//                     console.log('Authenticated:', data);
//                     setIsAuthenticated(true);
//                 } else {
//                     setIsAuthenticated(false);
//                 }
//             } catch (error) {
//                 console.error('Auth check failed:', error);
//                 setIsAuthenticated(false);
//             }
//         };

//         checkAuth();
//     }, []);

//     if (isAuthenticated === null) {
//         // Still checking auth status
//         return <div>Loading...</div>;
//     }

//     return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
// };

// export default PrivateRoute;
