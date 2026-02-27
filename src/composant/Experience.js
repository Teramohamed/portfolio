import { useState } from "react";
import "./Experience.css";

export default function Experience() {
const experiences = [
  {
    company: "UNIVERSITÉ TERTIAIRE TECHNOLOGIQUE LOKO",
    position: "Développement Web (Projet Académique)",
    period: "2024 – 2025",
    location: "Abidjan, Côte d'Ivoire",
    description: [
      "Conception et développement d’un site éducatif sur la mycologie officinale.",
      "Analyse des besoins pédagogiques.",
      "Modélisation du système et conception de la base de données.",
      "Développement frontend et backend.",
      "Tests fonctionnels et validation du projet."
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    images: [
     "/image/MycoGame/Connexion.png",
      "/image/MycoGame/TB.png",
       "/image/MycoGame/Cours.png",
      "/image/MycoGame/Quiz.png"
    ]
  },
  {
    company: "YA CONSULTING",
    position: "Stagiaire Développeur Full Stack",
    period: "Septembre 2025 – Novembre 2025",
    location: "Abidjan, Côte d'Ivoire",
    description: [
      "Développement complet et autonome d’un CRM interne.",
      "Analyse des besoins commerciaux et modélisation.",
      "Conception de la base de données.",
      "Développement backend frontend et backend.",
      "Maintenance corrective et amélioration continue.",
    ],
    tech: ["Laravel", "PHP", "MySQL", "Blade", "TailwindCSS", "UML"],
    images: [
      "/image/CRM/Connexion.png",
      "/image/CRM/A_TB.png",
      "/image/CRM/C_TB.png"
    ]
  },
  {
    company: "ARMÉE DE L'AIR DE CÔTE D'IVOIRE",
    position: "Stagiaire Développeur Full Stack / Support IT",
    period: "Novembre 2025 – Février 2026",
    location: "Abidjan, Côte d'Ivoire",
    description: [
      "Participation à la digitalisation de la gestion du matériel SIC.",
      "Analyse des besoins internes et modélisation.",
      "Développement d’un système de gestion des équipements et affectations.",
      "Maintenance préventive et corrective du matériel informatique.",
      "Assistance technique aux utilisateurs, installation et configuration de logiciels.",
      "Diagnostic et résolution de pannes."
    ],
    tech: ["Laravel", "PHP", "MySQL", "Blade", "CSS", "Merise", "Maintenance IT", "Support Technique"],
    images: [
       "/image/Gestion_Materiel/Connexion.png",
      "/image/Gestion_Materiel/Chef.png",
      "/image/Gestion_Materiel/Technicien.png"
    ]
  }
];


  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2>Parcours Professionnel</h2>
        <div className="contact-underline"></div>
        <p>Projets et expériences réalisés</p>

        {experiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} />
        ))}
      </div>
    </section>
  );
}

// Composant pour chaque expérience avec carrousel
function ExperienceCard({ exp }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % exp.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? exp.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="experience-card">
      <div className="experience-images">
        <img src={exp.images[currentImage]} alt={exp.company} />
        {exp.images.length > 1 && (
          <>
            <button className="prev-btn" onClick={prevImage}>
              ‹
            </button>
            <div className="dots">
              {exp.images.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === currentImage ? "active" : ""}`}
                  onClick={() => setCurrentImage(i)}
                ></span>
              ))}
            </div>
            <button className="next-btn" onClick={nextImage}>
              ›
            </button>
          </>
        )}
      </div>

     <div className="experience-info">
  <h3>{exp.position}</h3>
  <p className="company">{exp.company}</p>
  <p className="period">{exp.period}</p>
 
  
  <ul className="description-list">
    {exp.description.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>

<br/>
  <div className="tech-list">
    {exp.tech.map((t, i) => (
      <span key={i} className="tech-item">{t}</span>
    ))}
  </div>
</div>
    </div>
  );
}