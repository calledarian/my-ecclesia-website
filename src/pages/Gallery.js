import { useState } from 'react';
import './Gallery.css'; // Import from the same directory

export default function EventGallery() {
  // Sample events data - replace with your actual data
  const events = [
    {
      id: 1,
      title: 'Weekly Memorial Meeting',
      description: 'Join us every Sunday for Bible readings, hymns, exhortation, and the breaking of bread.',
      images: [
        '/BECmeetingjpg.jpg',
        '/BECmeetingjpg.jpg',
        '/BECmeetingjpg.jpg',
      ]
    },
    {
      id: 2,
      title: 'Sunday School',
      description: 'Bring your children for a fun and educational Sunday School experience.',
      images: [
        '/SundaySchoolBreakfast.jpg',
        '/api/placeholder/800/500',
      ]
    },
    {
      id: 3,
      title: 'Baptism Day Celebration',
      description: 'Rejoice with us as we witness a baptism and enjoy fellowship afterward.',
      images: [
        '/Cambodia-1.png',
        '/api/placeholder/800/500',
        '/api/placeholder/800/500',
        '/api/placeholder/800/500',
      ]
    },
    {
      id: 4,
      title: 'Bible Study with Forein Teachers',
      description: 'Dive deeper into God’s Word together through weekly Bible study and discussion.',
      images: [
        '/Ethan.jpg',
        '/pam.jpg',
        '/sophie.jpg',
      ]
    }
  ];
  

  // State for the modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Open modal with selected event
  const openModal = (event) => {
    setSelectedEvent(event);
    setCurrentImageIndex(0);
    setModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

  // Navigate to next image
  const nextImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) => 
        prev === selectedEvent.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  // Navigate to previous image
  const prevImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedEvent.images.length - 1 : prev - 1
      );
    }
  };

  return (
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
              <img 
                src={event.images[0]} 
                alt={event.title} 
                className="event-thumbnail"
              />
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

      {/* Modal for displaying event images */}
      {modalOpen && selectedEvent && (
        <div className="modal-overlay">
          <div className="modal-container">
            {/* Modal header */}
            <div className="modal-header">
              <h3 className="modal-title">{selectedEvent.title}</h3>
              <button 
                onClick={closeModal}
                className="modal-close-button"
              >
                ×
              </button>
            </div>
            
            {/* Image container */}
            <div className="modal-image-container">
              <div className="modal-image-wrapper">
                <img 
                  src={selectedEvent.images[currentImageIndex]} 
                  alt={`${selectedEvent.title} - ${currentImageIndex + 1}`}
                  className="modal-image"
                />
              </div>
              
              {/* Navigation arrows */}
              <button 
                className="nav-button prev-button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                &#10094;
              </button>
              
              <button 
                className="nav-button next-button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                &#10095;
              </button>
              
              {/* Image counter */}
              <div className="image-counter">
                {currentImageIndex + 1} / {selectedEvent.images.length}
              </div>
            </div>
            
            {/* Description */}
            <div className="modal-description">
              <p>{selectedEvent.description}</p>
            </div>
            
            {/* Thumbnails */}
            <div className="thumbnails-container">
              <div className="thumbnails-wrapper">
                {selectedEvent.images.map((image, index) => (
                  <div 
                    key={index}
                    className={`thumbnail ${index === currentImageIndex ? 'active-thumbnail' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img 
                      src={image} 
                      alt={`Thumbnail ${index + 1}`}
                      className="thumbnail-image"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}