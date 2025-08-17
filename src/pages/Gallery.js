import { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import './Gallery.css';

export default function EventGallery() {
  const events = [
    {
      id: 1,
      title: "LCDI Teaching",
      description: "Sharing God’s Word with LCDI children through fun Bible story dramas and activities.",
      path: "/LCDI",
      images: ["LCDI.jpg", "LCDI2.jpg", "LCDI3.jpg", "LCDI4.jpg"]
    },
    {
      id: 2,
      title: "2025 Bible School",
      description: "A worldwide gathering of brothers and sisters to fellowship, learn, and grow deeper in God’s Word.",
      path: "/BS",
      images: ["bs1.jpg", "bs2.jpg", "bs3.jpg", "bs4.jpg"]
    },
    {
      id: 3,
      title: "June 2025 Bible Seminar",
      description: "Spreading the truth across Cambodian provinces and raising up youth who are strong in faith.",
      path: "/TP",
      images: ["tp1.jpg", "tp2.jpg", "tp3.jpg", "tp4.jpg"]
    },
    {
      id: 4,
      title: "Game Activities",
      description: "Sports and strategy games designed to build teamwork and joy among our dorm students.",
      path: "/GAME-DAYS",
      images: ["plays.jpg", "plays2.jpg", "plays3.jpg"]
    },
    {
      id: 5,
      title: "Aug 2025 Farm Bible School",
      description: "A countryside Bible school experience focused on fellowship, learning, and living God’s Word together.",
      path: "/FARM",
      images: ["p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg"]
    }
  ];

  useEffect(() => {
    GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
      zoomable: true
    });
  }, []);

  return (
    <div className="gallery-page">
      <div className="gallery-container">
        <h1 className="gallery-title">Events Gallery</h1>

        {/* Events Grid */}
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-thumbnail-container">
                <a
                  href={`${event.path}/${event.images[0]}`}
                  className="glightbox"
                  data-gallery={`gallery-${event.id}`}
                  data-title={event.title}
                  data-description={event.description}
                >
                  <img
                    src={`${event.path}/${event.images[0]}`}
                    alt={event.title}
                    className="event-thumbnail"
                  />
                </a>
              </div>
              <div className="event-info">
                <h2 className="event-title">{event.title}</h2>
                <p className="event-description">{event.description}</p>

                {/* Hidden extra images for lightbox */}
                {event.images.slice(1).map((img, idx) => (
                  <a
                    key={idx}
                    href={`${event.path}/${img}`}
                    className="glightbox"
                    data-gallery={`gallery-${event.id}`}
                    data-title={event.title}
                    data-description={event.description}
                    style={{ display: 'none' }}
                  >
                    Hidden
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
