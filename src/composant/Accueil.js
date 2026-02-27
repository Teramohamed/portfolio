
import './Accueil.css';


export default function Accueil() {
  

  return (
    
       <section id="accueil" className="hero">
      <div className="hero-container">
        <div className="hero-text">
         
          <h1>TERA MOHAMED</h1>
          <h2>Développeur Web Junior</h2>

          <p>
         Passionné par la création d'applications web et la gestion de bases de données, je mets mes compétences au service de projets innovants et concrets.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Me contacter
            </a>

         <a href="/CV MOHAMED TERA.pdf" download="CV_MOHAMED_TERA.pdf" className="btn-secondary">
            Télécharger CV
          </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="circle">
            <img src="image/Photo.jpeg" alt="Photo de profil" />
          </div>
        </div>
      </div>
    </section>
    
      );
  }
   
