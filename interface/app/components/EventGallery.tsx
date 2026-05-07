'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import 'glightbox/dist/css/glightbox.min.css';

const events = [
  {
    id: 1,
    title: 'LCDI Teaching',
    description:
      "Sharing God's Word with LCDI children through fun Bible story dramas and activities.",
    path: '/LCDI',
    images: ['LCDI.jpg', 'LCDI2.jpg', 'LCDI3.jpg', 'LCDI4.jpg'],
  },
  {
    id: 2,
    title: '2025 Bible School',
    description:
      "A worldwide gathering of brothers and sisters to fellowship, learn, and grow deeper in God's Word.",
    path: '/BS',
    images: ['bs1.jpg', 'bs2.jpg', 'bs3.jpg', 'bs4.jpg'],
  },
  {
    id: 3,
    title: 'June 2025 Bible Seminar',
    description:
      'Spreading the truth across Cambodian provinces and raising up youth who are strong in faith.',
    path: '/TP',
    images: ['tp1.jpg', 'tp2.jpg', 'tp3.jpg', 'tp4.jpg'],
  },
  {
    id: 4,
    title: 'Game Activities',
    description:
      'Sports and strategy games designed to build teamwork and joy among our dorm students.',
    path: '/GAME-DAYS',
    images: ['plays.jpg', 'plays2.jpg', 'plays3.jpg'],
  },
  {
    id: 5,
    title: 'Aug 2025 Farm Bible School',
    description:
      "A countryside Bible school experience focused on fellowship, learning, and living God's Word together.",
    path: '/FARM',
    images: ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg'],
  },
];

export default function EventGallery() {
  useEffect(() => {
    let lightbox: any;

    const init = async () => {
      const GLightbox = (await import('glightbox')).default;
      lightbox = GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: true,
        zoomable: true,
      });
    };

    init();
    return () => lightbox?.destroy();
  }, []);

  return (
    <div className="container py-5">
      <h1 className="fw-bold text-center mb-5">Events Gallery</h1>

      <div className="row g-4">
        {events.map((event) => (
          <div key={event.id} className="col-12 col-sm-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm">
              {/* Thumbnail */}
              <a
                href={`${event.path}/${event.images[0]}`}
                className="glightbox"
                data-gallery={`gallery-${event.id}`}
                data-title={event.title}
                data-description={event.description}
              >
                <div className="ratio ratio-4x3 overflow-hidden rounded-top">
                  <Image
                    src={`${event.path}/${event.images[0]}`}
                    alt={event.title}
                    fill
                    className="object-fit-cover"
                  />
                </div>
              </a>

              {/* Card body */}
              <div className="card-body">
                <h5 className="card-title fw-bold">{event.title}</h5>
                <p className="card-text text-secondary small">{event.description}</p>
              </div>

              {/* Hidden lightbox links for remaining images */}
              {event.images.slice(1).map((img, idx) => (
                <a
                  key={idx}
                  href={`${event.path}/${img}`}
                  className="glightbox visually-hidden"
                  data-gallery={`gallery-${event.id}`}
                  data-title={event.title}
                  data-description={event.description}
                >
                  {event.title} image {idx + 2}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
