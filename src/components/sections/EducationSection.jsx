const education = [
  {
    id: 1,
    institution: 'Singapore Management University (SMU)',
    qualification: 'Bachelor of Science (Information Systems)',
    date: '2024 – 2028',
    details: [
      'GPA: 3.46 / 4.0 (current)',
      'Major: Product Development · Second Major: Cybersecurity',
    ],
  },
  {
    id: 2,
    institution: 'Catholic Junior College',
    qualification: 'GCE A-Levels',
    date: '2020 – 2021',
    details: [
      'H2 Physics · H2 Chemistry · H2 Mathematics · H1 Economics',
    ],
  },
  {
    id: 3,
    institution: "St. Patrick's School",
    qualification: 'GCE O-Levels',
    date: '2016 – 2019',
    details: [],
  },
]

// Add Coursera / other certifications here when ready:
// { name: 'Course Name', issuer: 'Coursera', date: 'Month Year' }
const certifications = [
  {name: "Play It Safe: Manage Security Risks", issuer: "Google", date: 'Jan 2026'},
  {name: "Foundations of Cybersecurity", issuer: "Google", date: 'Jan 2026'}
]

const EducationSection = () => (
  <>
    {education.map(({ id, institution, qualification, date, details }) => (
      <div key={id} className="education-item">
        <div className="education-header">
          <h3>{institution}</h3>
          <span className="date">{date}</span>
        </div>
        <p className="degree">{qualification}</p>
        {details.map((line, idx) => (
          <p key={idx} className="gpa">{line}</p>
        ))}
      </div>
    ))}

    {certifications.length > 0 && (
      <div className="certifications">
        <h4 className="cert-heading">Certifications</h4>
        {certifications.map(({ name, issuer, date }, idx) => (
          <div key={idx} className="cert-item">
            <span className="cert-name">{name}</span>
            <span className="cert-meta">{issuer} · {date}</span>
          </div>
        ))}
      </div>
    )}
  </>
)

export default EducationSection
