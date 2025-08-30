
function SendMessage() {
  return (
    <section id="contact" className="py-5">
      <div className="messageContainer text-center">
        <h2 className="mb-4">Send your message.</h2>
        <form onSubmit={(e) => e.preventDefault()} aria-label="Contact form">
 
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label><br />
              <input id="name" className="form-control custom-input" type="text" required  />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Your Email</label><br />
              <input id="email" className="form-control custom-input" type="email" required />
            </div>
          </div>


          <div className="form-group">
            <label htmlFor="subject" className="form-label">Your Subject</label><br />
            <input id="subject" className="form-control custom-input" type="text" required  />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Your Message</label><br />
            <textarea id="message" className="form-control custom-input" rows="5" required></textarea>
          </div>

          <div className="text-center">
            <button className="btn custom-btn" type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SendMessage;
