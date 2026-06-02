import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row g-4">
          {/* Logo & Description */}
          <div className="col-12 col-md-4">
            <div className="d-flex align-items-center mb-3 gap-3">
              <Image
                src="/favicon.ico"
                alt="Cambodia Bible Education Centre logo"
                width={60}
                height={60}
                className="rounded-circle"
              />
              <div>
                <p className="mb-0 small">មជ្ឈមណ្ឌលអប់រំព្រះគម្ពីរកម្ពុជា។</p>
                <p className="mb-0 small fw-semibold">Cambodia Bible Education Centre</p>
              </div>
            </div>
            <p className="small text-secondary">
              Our mission is to provide free Bible education and English for all Cambodians.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled mb-0">
              {[
                { href: '/', label: 'Home' },
                { href: '/contact', label: 'Contact' },
                { href: '/donation', label: 'Donation' },
                { href: '/faq', label: 'FAQ' },
              ].map(({ href, label }) => (
                <li key={href} className="mb-2">
                  <Link href={href} className="text-secondary text-decoration-none small">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-6 col-md-4">
            <h6 className="fw-bold mb-3">Contact</h6>
            {/* <p className="mb-1 small text-secondary">Phone: </p> */}
            {/* <p className="mb-1 small text-secondary">Email: </p> */}
            <p className="mb-0 small text-secondary">Address: 444, Street 598, Toul Kork, Cambodia</p>
          </div>
        </div>

        <div className="row mt-4 pt-3 border-top border-secondary">
          <div className="col-12 text-center">
            <p className="mb-0 small text-secondary">
              &copy; {new Date().getFullYear()} Cambodia Bible Education Centre (BEC). All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
