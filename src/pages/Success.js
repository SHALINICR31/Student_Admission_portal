import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Success() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [refNo] = useState(() => 'GWU-' + Math.random().toString(36).substring(2, 8).toUpperCase());

  useEffect(() => {
    const stored = sessionStorage.getItem('admissionData');
    if (!stored) {
      navigate('/register');
      return;
    }
    setData(JSON.parse(stored));
    // Clean up after reading
    sessionStorage.removeItem('admissionData');
  }, [navigate]);

  if (!data) return null;

  return (
    <div className="page success-page">
      <div className="success-card">
        <div className="success-icon-wrap">✅</div>

        <h1>
          Registration <span className="green">Successful!</span>
        </h1>

        <p>
          Congratulations, <strong>{data.name}</strong>! Your application has been received.
          Our admissions team will reach out to you at <strong>{data.email}</strong> within 3–5 working days.
        </p>

        <div className="success-detail-box">
          <h4>Application Summary</h4>

          <div className="detail-row">
            <span>Reference No.</span>
            <span className="ref-number">{refNo}</span>
          </div>
          <div className="detail-row">
            <span>Student Name</span>
            <span>{data.name}</span>
          </div>
          <div className="detail-row">
            <span>Course Applied</span>
            <span>{data.course}</span>
          </div>
          <div className="detail-row">
            <span>Gender</span>
            <span>{data.gender}</span>
          </div>
          <div className="detail-row">
            <span>Age</span>
            <span>{data.age} years</span>
          </div>
          <div className="detail-row">
            <span>Skills</span>
            <span>{data.skills.join(', ')}</span>
          </div>
          <div className="detail-row">
            <span>Status</span>
            <span style={{ color: 'var(--success)', fontWeight: 700 }}>Under Review</span>
          </div>
        </div>

        <div className="success-actions">
          <Link to="/" className="btn-success-home">
            ← Back to Home
          </Link>
          <Link to="/register" className="btn-success-outline">
            New Application
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Success;
