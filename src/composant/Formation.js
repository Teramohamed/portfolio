import './Formation.css';

export default function Formation() {
  
const education = [
  {
    degree: 'Licence professionnelle',
    school: 'Université Tertiaire Technologique Loko',
    period: '2023 - 2025',
    description: 'Formation en informatique'
  },
  {
    degree: 'Baccalauréat Série D',
    school: 'Groupe scolaire les roitelets Port-Bouët',
    period: '2021 - 2022',
    description: 'Obtention du baccalauréat scientifique'
  }
];


  return (
    <section id="education" className="formation-section">
      <div className="formation-container">
        <div className="formation-header">
          <h2>Formation</h2>
          <div className="formation-underline"></div>
        </div>

        <div className="formation-grid">
          {education.map((edu, index) => (
            <div key={index} className="formation-card">
              <div className="formation-degree">
                
                <h3>{edu.degree}</h3>
              </div>

              <p className="school-name">{edu.school}</p>

              <div className="formation-period">
                <span className="calendar-icon"></span>
                <span>{edu.period}</span>
              </div>

              <p className="school-description">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
