import { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import './Gallery.css';

export default function EventGallery() {
  const events = [
    {
      id: 1,
      title: "LCDI Teaching",
      description: "Teaching LCDI children about God by acting Bible stories.",
      path: "/LCDI",
      images: ["LCDI.jpg", "LCDI2.jpg", "LCDI3.jpg", "LCDI4.jpg"]
    },
    {
      id: 2,
      title: "2025 Bible School",
      description: "Brothers and sisters from all around the world gathering to have fellowship, learn, grow in Bible.",
      path: "/BS",
      images: ["bs1.jpg", "bs2.jpg", "bs3.jpg", "bs4.jpg"]
    },
    {
      id: 3,
      title: "June 2025 Bible Seminar",
      description: "Teaching the truth in Cambodian provinces and an growing youth in God.",
      path: "/TP",
      images: ["tp1.jpg", "tp2.jpg", "tp3.jpg", "tp4.jpg"]
    },
    {
      id: 4,
      title: "Game Activities",
      description: "Sportic, Strategic activities for our dormers.",
      path: "/GAME-DAYS",
      images: ["plays.jpg", "plays2.jpg", "plays3.jpg"]
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
