import { FaLinkedin, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© Developed by Rahul</p>
      <p className="city">Dehradun, Uttarakhand</p>

      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/rahul-shastri-b690ba2b8/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
        </a>

        <a
          href="https://github.com/Rahul-shastri67"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>

        <a
          href="https://x.com/i_am_Rahul_786"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter className="icon" />
        </a>

        <a
          href="https://www.instagram.com/https._.cypher?igsh=MXI4ZnI3YXB5Ymxvdw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon" />
        </a>
      </div>
    </footer>
  );
}
