'use client';

import Link from 'next/link';

const donationItems = [
  {
    title: 'Bible Education Programs',
    description:
      'Your contribution helps us teach the Bible to all ages by funding classes, materials, and outreach programs.',
  },
  {
    title: 'Sunday School',
    description:
      `We teach kids about God's love every Sunday. Donations help provide breakfast and drinks for them each week.`,
  },
  {
    title: 'Facility Maintenance',
    description:
      'Help us maintain our education centre as a welcoming place for worship, study, and community gatherings.',
  },
  {
    title: 'Youth Ministry',
    description:
      'Your donations support our work with children and young adults, providing them with spiritual guidance and a strong foundation in faith.',
  },
];

export default function Donation() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">Your Donation Supports:</h2>

      <div className="row g-4 mb-5">
        {donationItems.map((item) => (
          <div key={item.title} className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">{item.title}</h5>
                <p className="card-text text-secondary">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="fw-bold mb-3">Australia Bank Details</h2>
      <div className="card shadow-sm border-0 mb-5">
        <div className="card-body">
          <p className="mb-1">
            <strong>Bank:</strong> Westpac Queen St, Brisbane
          </p>
          <p className="mb-1">
            <strong>BSB:</strong> 734–000
          </p>
          <p className="mb-1">
            <strong>Account No:</strong> 07 2437
          </p>
          <p className="mb-3">
            <strong>SWIFT/BIC:</strong> WPACAU2S
          </p>
          <div className="alert alert-info mb-0">
            <strong>Note:</strong> Please include &quot;Cambodia&quot; or the purpose of your
            donation in the reference field so we can direct your gift appropriately. Thank you for
            your support!
          </div>
        </div>
      </div>

      <p className="text-center text-secondary">
        If you have any questions about supporting our ministry or donations, please visit our{' '}
        <Link href="/faq" className="text-decoration-none fw-semibold">
          FAQ
        </Link>{' '}
        page.
      </p>
    </div>
  );
}