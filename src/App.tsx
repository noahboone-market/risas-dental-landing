
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/800.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar animate-fade-in">
        <div className="nav-brand">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" fill="var(--color-primary)" stroke="none" />
            <path d="M12 3a9 9 0 0 1 9 9H3a9 9 0 0 1 9-9Z" fill="var(--color-secondary)" stroke="none" />
            <path d="M12 3v18" stroke="white" strokeWidth="3" />
            <path d="M3 12h18" stroke="white" strokeWidth="3" />
          </svg>
          Risas <span>Dental</span>
        </div>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#braces">Braces</a></li>
          <li><a href="#locations">Locations</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>
        <button className="btn-primary">Book Appointment</button>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content animate-slide-in">
          <span className="hero-tagline">Quality Care. Affordable Prices.</span>
          <h1>Beautiful Smiles <span>For Everyone.</span></h1>
          <p>We believe everyone deserves a healthy, confident smile. Experience premium dental care and orthodontics without the premium price tag.</p>
          <div className="hero-btns">
            <button className="btn-primary">Book Now</button>
            <button className="btn-outline">Find a Location</button>
          </div>
        </div>

        <div className="hero-image-container animate-fade-in delay-200">
          <div className="hero-blob"></div>
          <img src="/hero.png" alt="Happy patient with a beautiful smile" className="hero-image animate-float" />

          <div className="floating-badge delay-300 animate-slide-in" style={{ animationDelay: '600ms' }}>
            <div className="badge-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22a9.7 9.7 0 0 1-7.1-3A9.7 9.7 0 0 1 2 12a9.7 9.7 0 0 1 2.9-7.1A9.7 9.7 0 0 1 12 2a9.7 9.7 0 0 1 7.1 2.9A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-2.9 7.1A9.7 9.7 0 0 1 12 22z" />
                <path d="m9 12 2 2 4-4" stroke="var(--color-secondary)" strokeWidth="3" />
              </svg>
            </div>
            <div className="badge-text">
              <strong>1M+</strong>
              <span>Smiles Transformed</span>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="services">
        <h2 className="section-title">Comprehensive Care</h2>
        <p className="section-subtitle">From routine cleanings to complete smile makeovers, we provide everything your family needs under one roof.</p>

        <div className="services-grid">
          {/* Card 1 */}
          <div className="service-card">
            <div className="service-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 4v16M7 4v16M2 8h20M2 16h20" />
              </svg>
            </div>
            <h3>Free Braces Consult</h3>
            <p>Get a completely free consultation for braces. Flexible payment plans starting at low monthly rates.</p>
            <a href="#braces" className="service-link">Learn More <span>→</span></a>
          </div>

          {/* Card 2 */}
          <div className="service-card">
            <div className="service-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3>Same Day Treatment</h3>
            <p>Don't wait in pain! We offer same-day treatment for emergencies and walk-ins.</p>
            <a href="#book" className="service-link">Book Now <span>→</span></a>
          </div>

          {/* Card 3 */}
          <div className="service-card">
            <div className="service-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                <line x1="7" y1="7" x2="7.01" y2="7" />
              </svg>
            </div>
            <h3>Transparent Pricing</h3>
            <p>No hidden fees, no surprises. We believe in clear, upfront pricing for all dental procedures.</p>
            <a href="#pricing" className="service-link">View Pricing <span>→</span></a>
          </div>
        </div>
      </section>

      {/* Clinic Showcase */}
      <section className="clinic-showcase">
        <div className="clinic-content">
          <h2>Experience the Difference</h2>
          <p>Our state-of-the-art clinics are designed with your comfort in mind. Enjoy a relaxing environment, modern technology, and a bilingual staff ready to serve you.</p>

          <div className="stats-grid">
            <div className="stat-item">
              <h4>100+</h4>
              <p>Bilingual Doctors</p>
            </div>
            <div className="stat-item">
              <h4>12hr</h4>
              <p>Operating Hours</p>
            </div>
            <div className="stat-item">
              <h4>10+</h4>
              <p>Years of Service</p>
            </div>
            <div className="stat-item">
              <h4>5★</h4>
              <p>Patient Satisfaction</p>
            </div>
          </div>
          <button className="btn-primary">Find a Clinic Near You</button>
        </div>

        <div className="clinic-image-container">
          <img src="/clinic.png" alt="Modern dental clinic interior" className="clinic-image" />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div>
            <div className="footer-brand">
              Risas <span>Dental</span>
            </div>
            <p className="footer-text">Providing high-quality, affordable dental care and braces across multiple locations. Hablamos Español.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#braces">Braces & Orthodontics</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Patient Resources</h4>
            <ul>
              <li><a href="#patient-forms">Patient Forms</a></li>
              <li><a href="#pricing">Pricing & Insurance</a></li>
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Connect</h4>
            <ul>
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#tiktok">TikTok</a></li>
              <li><a href="#youtube">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Risas Dental and Braces. All rights reserved. Designed by Antigravity.
        </div>
      </footer>
    </div>
  );
}

export default App;
