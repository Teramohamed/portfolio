import './Contact.css';

export default function Contact() {

  const contactInfo = {
    phones: ['+225 01 43 75 66 52', '+225 07 12 04 25 77'],
    email: 'teramohamed0143@gmail.com',
    address: 'Port-Bouët, Abidjan',
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contact</h2>
          <div className="contact-underline"></div>
          <p className="contact-subtitle">
            Disponible pour opportunités et collaborations
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
          

            <div className="contact-item">
              <div className="contact-icon phone"></div>
              <div>
                <p className="label">Téléphone</p>
                {contactInfo.phones.map((phone, index) => (
                  <p key={index}>{phone}</p>
                ))}
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon email"></div>
              <div>
                <p className="label">E-mail</p>
                <a href={`mailto:${contactInfo.email}`} className="email-link">
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon location"></div>
              <div>
                <p className="label">Adresse</p>
                <p>{contactInfo.address}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}