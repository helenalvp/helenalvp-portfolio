import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="container mt-5 ">
      <h1 className="title ">Contact Me</h1>
      <div className="card  contact-card bg-transparent p-3 mb-5 mt-4 bg-body rounded ">
        <form
          className=" container contact-card bg-transparent mb-5 bg-body rounded"
          name="contact"
          method="post"
          action="/contact"
        >
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control "
                placeholder="First name *"
                name="first-name"
              />
              <input type="hidden" name="form-name" value="contact" />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name *"
                name="last-name"
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <input
              type="email"
              className="form-control"
              aria-describedby="email"
              placeholder="Email *"
              name="email"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              rows="10"
              placeholder="Message for me *"
              name="message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-dark mt-5">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
