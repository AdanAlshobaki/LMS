import React, { useState } from "react";
import { IoMdPaperPlane } from "react-icons/io";
import "./App.css";

export default function NewsletterForm() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching course:", query);
    alert(`Searching for: ${query}`);
    setQuery("");
  };

  return (
    <section className="newsletter_area section-padding">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-6 offset-lg-3 col-sm-12 col-xs-12">
            <div className="subs_form_custom">
              <h3>Subscribe to our newsletter, We don't make any spam.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <form
                action=""
                className="banner_subs_custom"
                onSubmit={handleSubmit}
              >
                <div className="input-with-icon-custom">
     
                  <input
                    type="text"
                    className="form-control-custom"
                    name="search_query"
                    placeholder=" "
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    required
                  />
                               <IoMdPaperPlane className="input-icon-custom" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
