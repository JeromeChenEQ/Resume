import { useState } from 'react'
import './Resume.css'

const Resume = () => {
  const [expandedSections, setExpandedSections] = useState({
    education: true,
    experience: true,
    projects: true,
    theatre: true,
    skills: true
  })

  const [selectedImage, setSelectedImage] = useState(null)

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const theatreProductions = [
    { id: 1, title: 'Arts Camp 2025 - Glam Night', roles: ['Lighting Designer', 'Sound System Designer'], placeholder: 'arts-camp-2025' },
    { id: 2, title: 'Un Paso 2025', subtitle: 'Ardiente Annual Production', role: 'Lighting Designer', placeholder: 'un-paso-2025' }
  ]

  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1>Jerome Chen En Quan</h1>
        <div className="contact-info">
          <p>Jerome.chen.2024@smu.edu.sg • +65 9889 4552</p>
          <p>
            <a href="https://linkedin.com/in/jeromecheneq" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            {' • '}
            <a href="https://github.com/JeromeChenEQ" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </div>
      </header>

      <main className="resume-content">
        {/* EDUCATION SECTION */}
        <section className="resume-section">
          <div 
            className="section-header"
            onClick={() => toggleSection('education')}
          >
            <h2>📚 Education</h2>
            <span className={`toggle-arrow ${expandedSections.education ? 'open' : ''}`}>
              ▼
            </span>
          </div>
          
          {expandedSections.education && (
            <div className="section-content fade-in">
              <div className="education-item">
                <div className="education-header">
                  <h3>Singapore Management University (SMU)</h3>
                  <span className="date">Aug 2024 – Aug 2028</span>
                </div>
                <p className="degree">Bachelor of Science (Information Systems)</p>
                <p className="gpa">GPA: 3.46/4.0 (expected)</p>
              </div>
            </div>
          )}
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="resume-section">
          <div 
            className="section-header"
            onClick={() => toggleSection('experience')}
          >
            <h2>💼 Experience</h2>
            <span className={`toggle-arrow ${expandedSections.experience ? 'open' : ''}`}>
              ▼
            </span>
          </div>
          
          {expandedSections.experience && (
            <div className="section-content fade-in">
              <div className="experience-item">
                <div className="exp-header">
                  <h3>Teaching Assistant</h3>
                  <span className="company">School of Computing and Information Systems</span>
                  <span className="date">Aug 2025 – Dec 2025</span>
                </div>
                <ul className="highlights">
                  <li>Assist the teaching team in teaching over 40 first-year students Python programming.</li>
                  <li>Provided feedback emphasizing code optimization, logic structuring, and readability, overall improving students' code quality and debugging efficiency.</li>
                  <li>Strengthen communication and technical explanation skills by simplifying complex programming concepts for diverse learners.</li>
                </ul>
              </div>

              <div className="experience-item">
                <div className="exp-header">
                  <h3>Deputy Director</h3>
                  <span className="company">SMU Broadcast & Entertainment, Campus Events & Backstage</span>
                  <span className="date">Jan 2025 – Dec 2025</span>
                </div>
                <ul className="highlights">
                  <li>Oversee a department of 20 people and executing events throughout campus, including SMU Open House, Academic Year Opening and various camps</li>
                  <li>Coordinating backstage operations, ensuring smooth transitions between setup and execution</li>
                  <li>Liaised between event organizers, performers, and technical crew to align on schedules, requirements, and contingency plans.</li>
                  <li>Introduced process improvements to equipment usage and task allocation workflows, enhancing event readiness and efficiency.</li>
                  <li>Developed leadership and stakeholder management skills through hands-on coordination in high-pressure, time-sensitive environments.</li>
                </ul>
              </div>
            </div>
          )}
        </section>

        {/* PROJECTS SECTION */}
        <section className="resume-section">
          <div 
            className="section-header"
            onClick={() => toggleSection('projects')}
          >
            <h2>🚀 Projects</h2>
            <span className={`toggle-arrow ${expandedSections.projects ? 'open' : ''}`}>
              ▼
            </span>
          </div>
          
          {expandedSections.projects && (
            <div className="section-content fade-in">
              <div className="project-item">
                <div className="project-header">
                  <h3>WADE</h3>
                  <span className="date">Aug 2025 – Dec 2025</span>
                </div>
                <ul className="highlights">
                  <li>WADE was a project that involved the creation of a webapp, allowing users to explore various heritage sites throughout Singapore, and experience Singaporean culture, a melting pot of various other cultures.</li>
                  <li>Through WADE, users could visit these heritage sites and learn more about them through various interactive activities, such as searching for easter eggs around the site and taking photos of specific areas.</li>
                  <li>The project made use of Vue and JavaScript for the front-end, with authentication done on the back-end with Supabase.</li>
                </ul>
              </div>

              <div className="project-item">
                <div className="project-header">
                  <h3>Spectrum</h3>
                  <span className="date">Mar 2026 – Mar 2026</span>
                </div>
                <ul className="highlights">
                  <li>Spectrum was a project that involved the ethical use of AI to supplement the operator's workflow of GovTech's Personal Alert Button as part of Hackomania 2026.</li>
                  <li>We used OpenAI and its LLM to translate, transcribe and determine, with the help of an algorithm, the severity and urgency of each audio recording received.</li>
                  <li>The project made use of React.js for the front-end, with Python and vanilla JavaScript for the back-end.</li>
                </ul>
              </div>
            </div>
          )}
        </section>

        {/* THEATRE & PRODUCTION SECTION */}
        <section className="resume-section">
          <div 
            className="section-header"
            onClick={() => toggleSection('theatre')}
          >
            <h2>🎭 Theatre & Production</h2>
            <span className={`toggle-arrow ${expandedSections.theatre ? 'open' : ''}`}>
              ▼
            </span>
          </div>
          
          {expandedSections.theatre && (
            <div className="section-content fade-in">
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Theatre Lighting</h4>
                  <div className="skill-tags">
                    {['Stage Lighting Design', 'Lighting Console', 'Fixture Operation', 'Lighting Theory'].map(skill => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="skill-category">
                  <h4>Live Sound Support</h4>
                  <div className="skill-tags">
                    {['Sound Design', 'Audio Mixing', 'Microphone Setup', 'Speaker Management'].map(skill => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="skill-category">
                  <h4>Stage Management</h4>
                  <div className="skill-tags">
                    {['Production Coordination', 'Stage Ops', 'Crew Management', 'Event Planning'].map(skill => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="production-gallery">
                <h3>Productions & Events</h3>
                <div className="gallery-grid">
                  {theatreProductions.map(production => (
                    <div key={production.id} className="gallery-item">
                      <div className="image-placeholder">
                        <div className="placeholder-icon">📷</div>
                        <p>Click to add photo</p>
                      </div>
                      <div className="production-info">
                        <h4>{production.title}</h4>
                        {production.subtitle && <p className="subtitle">{production.subtitle}</p>}
                        {Array.isArray(production.roles) ? (
                          <div className="role-list">
                            {production.roles.map((role, idx) => (
                              <p key={idx} className="role">• {role}</p>
                            ))}
                          </div>
                        ) : (
                          <p className="role">{production.role}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="gallery-hint">💡 Tip: You can add production photos by replacing the image placeholders with actual images</p>
              </div>
            </div>
          )}
        </section>

        {/* SKILLS SECTION */}
        <section className="resume-section">
          <div 
            className="section-header"
            onClick={() => toggleSection('skills')}
          >
            <h2>🛠️ Skills & Interests</h2>
            <span className={`toggle-arrow ${expandedSections.skills ? 'open' : ''}`}>
              ▼
            </span>
          </div>
          
          {expandedSections.skills && (
            <div className="section-content fade-in">
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Technical Skills</h4>
                  <div className="skill-tags">
                    {['Python', 'Java', 'JavaScript', 'CSS', 'HTML', 'PHP', 'SQL', 'Vue', 'React'].map(skill => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="skill-category">
                  <h4>Soft Skills</h4>
                  <div className="skill-tags">
                    {['Leadership', 'Communication', 'Problem Solving', 'Project Coordination'].map(skill => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="skill-category">
                  <h4>Languages</h4>
                  <div className="skill-tags">
                    {['English (Fluent)', 'Mandarin Chinese (Fluent)', 'Japanese (Pre-advanced)'].map(lang => (
                      <span key={lang} className="skill-tag">{lang}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>

      <footer className="resume-footer">
        <p>Last updated: April 2026</p>
      </footer>
    </div>
  )
}

export default Resume
