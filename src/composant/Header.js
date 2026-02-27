import { useState } from 'react';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <nav  className={`nav ${isMenuOpen ? "active" : ""}`}>
        <div className="nav-container">
          <div className="logo">TERA MOHAMED</div>

          <div className="nav-links">
            <button onClick={() => scrollToSection('accueil')}>Accueil</button>
            <button onClick={() => scrollToSection('about')}>Profil</button>
            <button onClick={() => scrollToSection('skills')}>Compétences</button>
            <button onClick={() => scrollToSection('experience')}>Expérience</button>
            <button onClick={() => scrollToSection('education')}>Formation</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </div>

            <button className={`menu-toggle ${isMenuOpen ? "open" : ""}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <button onClick={() => scrollToSection('accueil')}>Accueil</button>
            <button onClick={() => scrollToSection('about')}>Profil</button>
            <button onClick={() => scrollToSection('skills')}>Compétences</button>
            <button onClick={() => scrollToSection('experience')}>Expérience</button>
            <button onClick={() => scrollToSection('education')}>Formation</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </div>
        )}
      </nav>
    </header>
  );
}