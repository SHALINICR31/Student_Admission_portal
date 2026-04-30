import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} <span>Mepco College</span> — Student Admission Portal. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
