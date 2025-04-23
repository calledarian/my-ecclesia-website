import { useState, useEffect } from 'react';
import './Gallery.css';

const API_BASE_URL = 'https://bibleec-backend.onrender.com';

export default function EventGallery() {
  const [events, setEvents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetch(`${API_BASE_URL}/event/get_all_events`)
      .then((res) => res.json())
      .then((data) => {
        // Ensure images array exists
        const processed = data.map((e) => ({
          ...e,
          images: e.images || [],
        }));
        setEvents(processed);
      })
      .catch((err) => console.error('Error fetching events:', err));
  }, []);

  const openModal = (event) => {
    setSelectedEvent(event);
    setCurrentImageIndex(0);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };
  const nextImage = () =>
    setCurrentImageIndex((i) =>
      i === selectedEvent.images.length - 1 ? 0 : i + 1
    );
  const prevImage = () =>
    setCurrentImageIndex((i) =>
      i === 0 ? selectedEvent.images.length - 1 : i - 1
    );

  return (
    <div className="gallery-page">
      <div className="gallery-container">
        <h1 className="gallery-title">Events Gallery</h1>

        {/* Events Grid */}
        <div className="events-grid">
          {events.map((event) => (
            <div
              key={event.id}
              className="event-card"
              onClick={() => openModal(event)}
            >
              <div className="event-thumbnail-container">
                {event.images[0] ? (
                  <img
                    src={`${API_BASE_URL}/uploads/${event.images[0]}`}
                    alt={event.title}
                    className="event-thumbnail"
                  />
                ) : (
                  <div className="empty-thumbnail">No image available</div>
                )}
              </div>
              <div className="event-info">
                <h2 className="event-title">{event.title}</h2>
                <p className="event-description">{event.description}</p>
                <div className="event-gallery-link">
                  View gallery ({event.images.length} photos)
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalOpen && selectedEvent && (
          <div className="modal-overlay" onClick={closeModal}>
            <div
              className="modal-container"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3 className="modal-title">{selectedEvent.title}</h3>
                <button onClick={closeModal} className="modal-close-button">
                  ×
                </button>
              </div>

              <div className="modal-image-container">
                {selectedEvent.images[currentImageIndex] ? (
                  <img
                    src={`${API_BASE_URL}/uploads/${selectedEvent.images[currentImageIndex]}`}
                    alt={`${selectedEvent.title} ${currentImageIndex + 1}`}
                    className="modal-image"
                  />
                ) : (
                  <div className="no-image-placeholder">No image</div>
                )}

                {selectedEvent.images.length > 1 && (
                  <>
                    <button
                      className="nav-button prev-button"
                      onClick={prevImage}
                    >
                      &#10094;
                    </button>
                    <button
                      className="nav-button next-button"
                      onClick={nextImage}
                    >
                      &#10095;
                    </button>
                  </>
                )}

                <div className="image-counter">
                  {selectedEvent.images.length
                    ? `${currentImageIndex + 1} / ${selectedEvent.images.length}`
                    : 'No images'}
                </div>
              </div>

              <div className="modal-description">
                <p>{selectedEvent.description}</p>
              </div>

              <div className="thumbnails-container">
                {selectedEvent.images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`thumbnail ${idx === currentImageIndex ? 'active-thumbnail' : ''
                      }`}
                    onClick={() => setCurrentImageIndex(idx)}
                  >
                    <img
                      src={`${API_BASE_URL}/uploads/${img}`}
                      alt={`Thumb ${idx + 1}`}
                      className="thumbnail-image"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
