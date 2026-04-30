import React from 'react';
import { Link } from 'react-router-dom';

const departments = [
  { icon: '💻', name: 'Computer Science' },
  { icon: '⚙️', name: 'Engineering' },
  { icon: '📊', name: 'Business & MBA' },
  { icon: '🔬', name: 'Sciences' },
  { icon: '📚', name: 'Arts & Humanities' },
  { icon: '⚖️', name: 'Law' },
  { icon: '🏥', name: 'Medical Sciences' },
  { icon: '🎨', name: 'Fine Arts & Design' },
];

function About() {
  return (
    <div className="page">
      {/* Hero */}
      <section className="about-hero">
        <div className="hero-badge" style={{ color: '#d4a843', background: 'rgba(212,168,67,0.12)', border: '1px solid rgba(212,168,67,0.3)', marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.4rem 1rem', borderRadius: '50px' }}>
          🏛️ Est. 1964
        </div>
        <h1>About Mepco College</h1>
        <p>Six decades of academic excellence, innovation, and impact.</p>
      </section>

      <div className="about-content">

        {/* Intro Section */}
        <div className="about-intro">
          <div className="about-intro-text">
            <h2>A Legacy of <span className="about-highlight">Excellence</span></h2>
            <p>
              Founded in 1964, Mepco College has grown from a small regional college into one of India's most respected institutions of higher learning. Our commitment to academic rigor, research, and holistic development sets us apart.
            </p>
            <p>
              With over <span className="about-highlight">85,000 alumni</span> across the globe and partnerships with leading universities in the USA, UK, Germany, and Singapore, Greenwood offers a truly international education experience on Indian soil.
            </p>
            <p>
              We believe education is more than a degree — it's a transformation. Our interdisciplinary curriculum, world-class faculty, and vibrant campus life prepare students not just for careers, but for life.
            </p>
            <br />
            <Link to="/register" className="btn-primary" style={{ display: 'inline-flex' }}>
              Apply Now →
            </Link>
          </div>

          <div className="about-visual">
            <span className="big-year">60</span>
            <p>Years of Excellence</p>
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                ['400+', 'Faculty Members'],
                ['15,000+', 'Current Students'],
                ['120+', 'Countries Represented'],
                ['50+', 'Academic Programs'],
              ].map(([val, label]) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>{label}</span>
                  <span style={{ color: '#d4a843', fontWeight: 700 }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Departments */}
        <div className="departments-section">
          <h2>Our Departments</h2>
          <div className="dept-grid">
            {departments.map((d) => (
              <div className="dept-card" key={d.name}>
                <span className="dept-icon">{d.icon}</span>
                <h4>{d.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Info Cards */}
        <div className="info-cards">
          <div className="info-card">
            <h3>📍 Campus Location</h3>
            <p>
              Greenwood University Main Campus<br />
              42, University Avenue, Sector 14<br />
              Greenwood Nagar, Tamil Nadu – 600 001<br />
              India<br /><br />
              📞 +91 44 2345 6789<br />
              ✉️ admissions@greenwood.edu.in
            </p>
          </div>

          <div className="info-card">
            <h3>🏆 Accreditations</h3>
            <ul>
              <li>NAAC Grade 'A++' Accredited</li>
              <li>UGC Recognized Institution</li>
              <li>NBA Accredited Programs</li>
              <li>ISO 9001:2015 Certified</li>
              <li>NIRF Top 50 Ranked</li>
              <li>QS Asia Rankings Top 200</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>📅 Admission Process</h3>
            <ul>
              <li>Online Application Submission</li>
              <li>Document Verification</li>
              <li>Entrance Test / Merit Review</li>
              <li>Personal Interview Round</li>
              <li>Offer Letter & Fee Payment</li>
              <li>Enrollment & Orientation</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>🎯 Campus Facilities</h3>
            <ul>
              <li>Central Library with 2L+ Books</li>
              <li>24/7 High-Speed Wi-Fi Campus</li>
              <li>Sports Complex & Swimming Pool</li>
              <li>On-Campus Hostel Facilities</li>
              <li>Innovation & Startup Hub</li>
              <li>Medical Centre & Counselling</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
