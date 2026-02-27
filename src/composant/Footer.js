import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} TERA MOHAMED - Développeur Web Junior
        </p>
        <p className="footer-subtext">
          Tous droits réservés
        </p>
      </div>
    </footer>
  );
}