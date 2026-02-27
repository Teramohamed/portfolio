import './Competence.css';


export default function Competence() {
  
const skillCategories = [
    {
      title: 'Langages de programmation',
      skills: ['HTML/CSS', 'JavaScript', 'Langage C', 'PHP', 'Java']
    },
    {
      title: 'Frameworks / Bibliothèques',
      skills: ['React', 'Laravel', 'Blade', 'TailwindCSS','Bootstrap']
    },
    {
      title: 'Base de données',
      skills: ['MySQL', 'PostgreSQL']
    },
    {
      title: 'Modélisation',
      skills: ['MERISE', 'UML']
    },
    {
      title: 'Outils',
      skills: ['Git', 'GitHub', 'VS Code', 'Eclipse', 'XAMPP', 'phpMyAdmin', 'pgAdmin','Draw.io', 'Netlify']
    },
    {
      title: 'Autres compétences',
      skills: [ 'Maintenance informatique', 'Installation et configuration de systèmes', 'Bureautique', 'Travail en équipe', 'Résolution de problèmes', 'Rédaction de documentation technique']
    }
  ];

  return (
    <section id="skills" className="competence">
      <div className="competence-container">
        <h2>Compétences</h2>
        <div className="formation-underline"></div>
        <p>Technologies et outils que je maîtrise</p>

        <div className="competence-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="competence-card">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
   
