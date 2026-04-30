import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const COURSES = [
  'Select a Course',
  'B.Sc Computer Science',
  'B.Sc Information Technology',
  'B.E. Electronics & Communication',
  'B.E. Mechanical Engineering',
  'B.E. Civil Engineering',
  'BBA Business Administration',
  'B.Com Commerce',
  'B.Sc Mathematics',
  'B.Sc Physics',
  'B.A. English Literature',
  'M.Sc Computer Science',
  'MBA Business Administration',
  'M.Tech Software Engineering',
];

const SKILLS_LIST = [
  'Programming',
  'Communication',
  'Leadership',
  'Problem Solving',
  'Teamwork',
  'Research',
  'Design',
  'Analytics',
];

const INITIAL_FORM = {
  name: '',
  email: '',
  age: '',
  course: '',
  gender: '',
  skills: [],
  address: '',
};

const INITIAL_ERRORS = {
  name: '',
  email: '',
  age: '',
  course: '',
  gender: '',
  skills: '',
  address: '',
};

function Registration() {
  const navigate = useNavigate();
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState(INITIAL_ERRORS);

  const validate = () => {
    const errs = { ...INITIAL_ERRORS };
    let valid = true;

    if (!form.name.trim()) {
      errs.name = 'Student name is required.';
      valid = false;
    } else if (form.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      errs.email = 'Email address is required.';
      valid = false;
    } else if (!emailRegex.test(form.email)) {
      errs.email = 'Please enter a valid email address.';
      valid = false;
    }

    if (!form.age) {
      errs.age = 'Age is required.';
      valid = false;
    } else if (isNaN(form.age) || Number(form.age) < 15 || Number(form.age) > 60) {
      errs.age = 'Age must be between 15 and 60.';
      valid = false;
    }

    if (!form.course || form.course === 'Select a Course') {
      errs.course = 'Please select a course.';
      valid = false;
    }

    if (!form.gender) {
      errs.gender = 'Please select your gender.';
      valid = false;
    }

    if (form.skills.length === 0) {
      errs.skills = 'Please select at least one skill.';
      valid = false;
    }

    if (!form.address.trim()) {
      errs.address = 'Address is required.';
      valid = false;
    } else if (form.address.trim().length < 10) {
      errs.address = 'Please enter a complete address (min 10 characters).';
      valid = false;
    }

    setErrors(errs);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleCheckbox = (skill) => {
    setForm((prev) => {
      const skills = prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill];
      return { ...prev, skills };
    });
    if (errors.skills) setErrors((prev) => ({ ...prev, skills: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Store data in sessionStorage for the Success page
    sessionStorage.setItem('admissionData', JSON.stringify(form));
    navigate('/success');
  };

  return (
    <div className="page reg-page">
      <div className="reg-header">
        <span className="page-label">📋 Admissions 2025–26</span>
        <h1>Student Registration</h1>
        <p>Fill in your details carefully. All fields marked with * are required.</p>
      </div>

      <div className="reg-card">
        <div className="reg-card-header">
          <div className="reg-step-circle">1</div>
          <div>
            <h2>Personal & Academic Information</h2>
            <p>Provide accurate details for your admission record</p>
          </div>
        </div>

        <form className="reg-form" onSubmit={handleSubmit} noValidate>
          <div className="form-grid">

            {/* Student Name */}
            <div className="form-group">
              <label htmlFor="name" className="label-required">Student Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="e.g. Arjun Kumar"
                value={form.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                autoComplete="off"
              />
              {errors.name && <span className="error-msg">⚠ {errors.name}</span>}
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email" className="label-required">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="e.g. arjun@email.com"
                value={form.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                autoComplete="off"
              />
              {errors.email && <span className="error-msg">⚠ {errors.email}</span>}
            </div>

            {/* Age */}
            <div className="form-group">
              <label htmlFor="age" className="label-required">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                placeholder="e.g. 20"
                value={form.age}
                onChange={handleChange}
                className={errors.age ? 'error' : ''}
                min="15"
                max="60"
              />
              {errors.age && <span className="error-msg">⚠ {errors.age}</span>}
            </div>

            {/* Course */}
            <div className="form-group">
              <label htmlFor="course" className="label-required">Course</label>
              <select
                id="course"
                name="course"
                value={form.course}
                onChange={handleChange}
                className={errors.course ? 'error' : ''}
              >
                {COURSES.map((c) => (
                  <option
                    key={c}
                    value={c === 'Select a Course' ? '' : c}
                    disabled={c === 'Select a Course'}
                  >
                    {c}
                  </option>
                ))}
              </select>
              {errors.course && <span className="error-msg">⚠ {errors.course}</span>}
            </div>

            {/* Gender */}
            <div className="form-group">
              <label className="label-required">Gender</label>
              <div className="radio-group">
                {['Male', 'Female', 'Other', 'Prefer not to say'].map((g) => (
                  <label className="radio-option" key={g}>
                    <input
                      type="radio"
                      name="gender"
                      value={g}
                      checked={form.gender === g}
                      onChange={handleChange}
                    />
                    <span>{g}</span>
                  </label>
                ))}
              </div>
              {errors.gender && <span className="error-msg">⚠ {errors.gender}</span>}
            </div>

            {/* Skills */}
            <div className="form-group">
              <label className="label-required">Skills</label>
              <div className="checkbox-group">
                {SKILLS_LIST.map((skill) => (
                  <label className="checkbox-option" key={skill}>
                    <input
                      type="checkbox"
                      checked={form.skills.includes(skill)}
                      onChange={() => handleCheckbox(skill)}
                    />
                    <span>{skill}</span>
                  </label>
                ))}
              </div>
              {errors.skills && <span className="error-msg">⚠ {errors.skills}</span>}
            </div>

            {/* Address */}
            <div className="form-group full-width">
              <label htmlFor="address" className="label-required">Address</label>
              <textarea
                id="address"
                name="address"
                placeholder="Enter your full residential address..."
                value={form.address}
                onChange={handleChange}
                className={errors.address ? 'error' : ''}
                rows={4}
              />
              {errors.address && <span className="error-msg">⚠ {errors.address}</span>}
            </div>
          </div>

          <div className="divider" />

          <button type="submit" className="submit-btn">
            ✦ Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
