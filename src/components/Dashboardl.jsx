import React, { useEffect } from "react";
import EventUpload from "./CreateEvent"; // Ensure the EventUpload component is imported correctly
import { useNavigate } from "react-router-dom";
import axios from "axios";



export default function Dashboard() {
    const navigate = useNavigate();
    const backendurl = process.env.REACT_APP_BACKEND_URL;

    // 🔐 Verify Authentication when the dashboard is loaded
    useEffect(() => {
        const token = localStorage.getItem("jwt");

        if (!token) {
            navigate("/login"); // Redirect to login if no token is found
            return;
        }

        // Optional: Verify token with backend (check if token is still valid)
        axios
            .get(`${backendurl}/auth/check`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .catch((err) => {
                console.error("Token verification failed:", err);
                navigate("/login"); // Redirect to login if token is invalid
            });
    }, [navigate, backendurl]);

    // 🚪 Logout functionality
    const handleLogout = async () => {
        const confirmLogout = window.confirm(`Are you sure?`);
        if (!confirmLogout) return;
        const token = localStorage.getItem("jwt");

        if (token) {
            await fetch(`${backendurl}/auth/logout`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        }

        localStorage.removeItem("jwt");
        navigate("/login"); // Redirect to login page after logout
    };


    return (
        <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9" }}>
            <h1 style={{ color: "#333", textAlign: "center", marginBottom: "1.5rem" }}>
                Admin Dashboard
            </h1>
            <div style={{ maxWidth: "600px", margin: "0 auto", background: "#fff", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
                <EventUpload />
                <button
                    onClick={handleLogout}
                    style={{
                        background: "#ff4d4f",
                        border: "none",
                        padding: "0.6rem 1.2rem",
                        color: "white",
                        borderRadius: "4px",
                        cursor: "pointer",
                        marginTop: "1rem",
                        display: "block",
                        fontSize: "1rem",
                        fontWeight: "bold",
                    }}
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
