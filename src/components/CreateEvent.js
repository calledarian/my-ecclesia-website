import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/EventUpload.css';

export default function EventUpload() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);
    const [isUploading, setIsUploading] = useState(false);
    const [events, setEvents] = useState([]);

    // Fetch all events
    const fetchEvents = async () => {
        try {
            const res = await axios.get('https://bibleec-backend.onrender.com/event/get_all_events');
            setEvents(res.data);
        } catch (err) {
            console.error('Failed to fetch events:', err);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    // Handle file input
    const handleImageChange = (e) => {
        setImages(Array.from(e.target.files));
    };

    // Handle event upload
    const handleSubmit = async (e) => {
        const confirmSubmit = window.confirm(`Uploud Event?`);
        if (!confirmSubmit) return;


        e.preventDefault();
        const token = localStorage.getItem('jwt');
        console.log('Token:', token);  // Check if the token is present

        if (!token) {
            alert('You are not authenticated! Please relogin.');
            return;
        }

        if (images.length > 5) {
            alert('Too many files! You can only upload up to 5 images.');
            return;
        }

        setIsUploading(true); // Start uploading

        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            images.forEach((img) => formData.append('images', img));

            const res = await axios.post('https://bibleec-backend.onrender.com/event/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                },
            });

            alert(`Event "${res.data.title}" uploaded successfully!`);
            setIsUploading(false); // End uploading
            fetchEvents(); // Re-fetch events after upload
        } catch (err) {
            console.error('Upload failed:', err.response?.data || err.message);
            alert(`Upload failed: ${err.response?.data?.message || err.message}`);
            setIsUploading(false); // End uploading even in case of failure
        }
    };

    // Delete event
    const handleDelete = async (eventId) => {
        const confirmDelete = window.confirm(`Delete event ID ${eventId}?`);
        if (!confirmDelete) return;

        try {
            const token = localStorage.getItem('jwt');

            if (!token) {
                alert('You are not authenticated!');
                return;
            }

            // Send DELETE request
            await axios.delete(`https://bibleec-backend.onrender.com/event/delete_event/${eventId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            alert(`Event ID ${eventId} deleted.`);
            fetchEvents(); // Re-fetch events after deletion
        } catch (err) {
            console.error('Failed to delete event:', err);
            alert('Failed to delete event.');
        }
    };


    return (
        <div className="event-upload-container">
            <h2>Create New Event</h2>
            <form onSubmit={handleSubmit} className="upload-form">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    required
                />
                <button type="submit" disabled={isUploading}>
                    {isUploading ? 'Uploading...' : 'Upload Event'}
                </button>
            </form>

            <h3>Existing Events</h3>
            <ul className="event-list">
                {events.map((event) => (
                    <li key={event.id} className="event-item">
                        <span>
                            <strong>ID:</strong> {event.id} | <strong>Title:</strong> {event.title}
                        </span>
                        <button onClick={() => handleDelete(event.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
