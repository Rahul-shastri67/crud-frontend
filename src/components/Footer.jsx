import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div style={{ fontWeight: 600 }}>© Developed by Rahul</div>
      <div style={{ marginTop: 4, fontSize: 14 }}>Dehradun, Uttarakhand</div>

      <div className="social-icons">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin className="icon" /></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub className="icon" /></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter className="icon" /></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram className="icon" /></a>
      </div>
    </footer>
  );
}
