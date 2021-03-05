import React from "react";
import "../main.scss";
import "./Footer.scss";

class Footer extends React.Component {
  render() {
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
              <li>LinkedIn</li>
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
