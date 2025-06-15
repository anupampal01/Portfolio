import '../index.css';
import { FaEnvelope, FaPhone, FaLinkedin, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>📞 Contact Me</h2>
      <ul className="contact-list">
        <li>
          <FaEnvelope className="icon" />
          <a href="mailto:anupam@example.com" className="contact-link">anupampal1307@gmail.com</a>
        </li>
        <li>
          <FaPhone className="icon" />
          <a href="tel:+9198276271" className="contact-link">+91 9198276 271</a>
        </li>
        <li>
          <FaLinkedin className="icon" />
          <a href="https://linkedin.com/in/anupam-pal-58246025a" target="_blank" rel="noreferrer" className="contact-link">
            linkedin.com/in/anupam
          </a>
        </li>
        <li>
          <FaFacebook className="icon" />
          <a href="https://facebook.com/anupam.pal.1806253" target="_blank" rel="noreferrer" className="contact-link">
            facebook.com/anupam
          </a>
        </li>
        <li>
          <FaInstagram className="icon" />
          <a href="https://instagram.com/anupam_pal01" target="_blank" rel="noreferrer" className="contact-link">
            instagram.com/anupam
          </a>
        </li>
        <li>
          <FaGithub className="icon" />
          <a href="https://github.com/anupampal01" target="_blank" rel="noreferrer" className="contact-link">
            github.com/anupam
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;