import type { Metadata } from 'next';
import { pageMetadata } from '../lib/site';

export const metadata: Metadata = pageMetadata('/forms');

export default function Forms() {
  const feedbackFormUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSfRVIz4LdxhHxrOdUJWz3z98nlwKvAlElSqhg8KUjXwmtI4LA/viewform?embedded=true';

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">Feedback Form</h2>
      <div className="ratio ratio-4x3">
        <iframe
          src={feedbackFormUrl}
          title="Feedback Form"
          allowFullScreen
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}