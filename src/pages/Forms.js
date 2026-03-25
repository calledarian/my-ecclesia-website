// Forms.js
import "../CSS/Forms.css"; // optional CSS for styling

const feedbackFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfRVIz4LdxhHxrOdUJWz3z98nlwKvAlElSqhg8KUjXwmtI4LA/viewform?embedded=true"
const Forms = () => {
  return (
    <div className="forms-container">
      <h2 className="forms-heading">Feedback Form</h2>
      <div className="iframe-wrapper">
        <iframe
          src={feedbackFormUrl}
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Feedback Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Forms;