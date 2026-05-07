export default function Contact() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-2">Contact Us</h2>
      <p className="text-secondary mb-4">
        If you have any questions or need more information, feel free to reach out:
      </p>

      <div className="row g-4 mb-5">
        <div className="col-12 col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-bold">Email</h5>
              <a href="mailto:jonnykatie1705@gmail.com" className="text-decoration-none text-secondary">
                jonnykatie1705@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-bold">Phone</h5>
              <a href="tel:+85578959342" className="text-decoration-none text-secondary">
                +855 78 959 342
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-bold">Address</h5>
              <p className="text-secondary mb-0">444, Street 598, Toul Kork, Cambodia</p>
            </div>
          </div>
        </div>
      </div>

      <div className="ratio ratio-16x9 mb-5 rounded overflow-hidden shadow-sm">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.029168647145!2d104.88323247354342!3d11.584849343765347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951118e0c0343%3A0xc035b379dec66b7a!2sCambodia%20Bible%20Education%20Centre%20(BEC)!5e1!3m2!1sen!2skh!4v1743417939523!5m2!1sen!2skh"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Cambodia Bible Education Centre Map"
        />
      </div>

      <h5 className="fw-bold mb-3">Follow Us</h5>
      <div className="d-flex gap-3">
        <a
          href="https://www.facebook.com/PPbec/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-primary"
        >
          <i className="bi bi-facebook me-2" />
          Facebook
        </a>
        <a
          href="https://instagram.com/fieldworkers_in_cambodia/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-danger"
        >
          <i className="bi bi-instagram me-2" />
          Instagram
        </a>
      </div>
    </div>
  );
}