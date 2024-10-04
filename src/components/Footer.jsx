import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SectionWrapper } from "../hoc";

// Footer Component
const Footer = () => {
  return (
    <footer className=" text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Contact Information */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-semibold">Contact Me</h4>
          <p className="mt-4">
            <FontAwesomeIcon icon={faPhone} className="mr-2" /> +91 8006213786
          </p>
          <p className="mt-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />{" "}
            guptagovind516@gmail.com
          </p>
        </div>

        {/* Social Media Links */}
        <div>
          <h4 className="text-xl font-semibold">Follow Me</h4>
          <div className="flex space-x-6 mt-4">
            <a
              href="https://www.linkedin.com/in/govindgupta1012/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://github.com/Govind516"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://x.com/gGupta_516"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://leetcode.com/u/govind516/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              aria-label="Leetcode"
            >
              <FontAwesomeIcon icon={faCode} size="2x" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} Govind Gupta. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default SectionWrapper(Footer, "follow");
