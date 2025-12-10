import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // X (Twitter) icon

export default function Footer() {
  return (
    <footer className="footer">
      <p>© Developed by Rahul</p>
      <p className="city">Dehradun, Uttarakhand</p>

      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/rahul-shastri-b690ba2b8/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon linkedin"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/Rahul-shastri67"
          target="_blank"
          rel="noopener noreferrer"
          className="icon github"
        >
          <FaGithub />
        </a>

        <a
          href="https://x.com/i_am_Rahul_786"
          target="_blank"
          rel="noopener noreferrer"
          className="icon x"
        >
          <FaXTwitter />
        </a>

        <a
          href="https://www.instagram.com/https._.cypher?igsh=MXI4ZnI3YXB5Ymxvdw=="
          target="_blank"
          rel="noopener noreferrer"
          className="icon instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}
