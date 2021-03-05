import React from "react";
import "../main.scss";
import "./Footer.scss";

class Footer extends React.Component {
  render() {
    {
      /*
        TO DO:
          Add download link for CV
          Make links hoverable
          Add LinkedIn page
          Swap out 100vh
      */
    }
    return (
      <div className="footer">
        <div className="wrapper">
          <div className="footer__container">
            <div className="footer__container__contact">
              <p className="footer__container__contact__p">Want to talk?</p>
              <a href="mailto:hello@camgreen.works">
                <p className="footer__container__contact__p underline">
                  Get in touch.
                </p>
              </a>
            </div>
            {
              // ADD A TAGS HERE AND CV DOWNLOAD LINK
            }
            <ul className="footer__container__links">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", display: "inline" }}
              >
                <li>LinkedIn</li>
              </a>
              {
                // add download link for CV
              }
              <li>CV</li>
            </ul>
            <a href="mailto:hello@camgreen.works">
              <h4 className="footer__container__email">hello@camgreen.works</h4>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
