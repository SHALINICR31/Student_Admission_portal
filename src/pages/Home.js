import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: '🎓',
    title: 'World-Class Programs',
    desc: 'Choose from 50+ undergraduate and postgraduate programs designed for the future of industry.',
  },
  {
    icon: '🏛️',
    title: 'Historic Campus',
    desc: 'Spread across 400 acres of green space, our campus blends heritage with modern infrastructure.',
  },
  {
    icon: '🔬',
    title: 'Research Excellence',
    desc: 'State-of-the-art labs and research centers driving innovation across science, tech, and humanities.',
  },
  {
    icon: '🌐',
    title: 'Global Network',
    desc: 'Join 85,000+ alumni working across 120 countries. Your network starts before graduation.',
  },
  {
    icon: '💼',
    title: '98% Placement Rate',
    desc: 'Our dedicated placement cell connects students with Fortune 500 companies and startups alike.',
  },
  {
    icon: '🏆',
    title: 'Ranked #1',
    desc: 'Consistently ranked among the top 10 universities in the country for academic excellence.',
  },
];

function Home() {
  return (
    <div className="page">
      {/* Hero */}
      <section className="home-hero">
        <div className="hero-badge">
          🎉 Admissions Open — 2025–26
        </div>
        <h1>
          Shape Your Future at<br />
          <span className="hero-gold">Mepco College</span>
        </h1>
        <p>
          Where brilliant minds meet world-class education. Begin your journey toward a career that matters.
        </p>
        <div className="hero-btns">
          <Link to="/register" className="btn-primary">
            Apply for Admission →
          </Link>
          <Link to="/about" className="btn-outline">
            Learn About Us
          </Link>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-strip">
        <div className="stat-item">
          <span className="stat-number">1964</span>
          <span className="stat-label">Est. Year</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">50+</span>
          <span className="stat-label">Programs</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">85K+</span>
          <span className="stat-label">Alumni</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">98%</span>
          <span className="stat-label">Placement</span>
        </div>
      </div>

      {/* Features */}
      <section className="home-features">
        <div className="section-header">
          <h2>Why Choose Mepco College?</h2>
          <p>Everything you need to thrive academically, professionally, and personally.</p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <span className="feature-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <div className="home-cta">
        <h2>Ready to Begin Your Journey?</h2>
        <p>Applications for the 2025–26 academic year are now open. Limited seats available.</p>
        <Link to="/register" className="btn-primary">
          Start Your Application →
        </Link>
      </div>

      <div style={{ height: '3rem' }} />
    </div>
  );
}

export default Home;
