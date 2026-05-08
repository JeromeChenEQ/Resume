const projects = [
  {
    id: 1,
    title: 'WADE',
    date: 'Aug 2025 – Dec 2025',
    highlights: [
      'Built a heritage exploration webapp for Singapore, enabling users to discover cultural sites and engage with Singaporean history through interactive digital experiences.',
      'Implemented gamified activities including location-based easter egg hunts and photo challenges to drive user engagement with heritage landmarks.',
      'Developed the front end with Vue.js and JavaScript; handled user authentication and data persistence via Supabase.',
    ],
  },
  {
    id: 2,
    title: 'Spectrum',
    date: 'Mar 2026',
    highlights: [
      'Developed an AI-assisted triage tool for GovTech\'s Personal Alert Button operator workflow at Hackomania 2026.',
      'Leveraged OpenAI\'s LLM to automatically translate, transcribe, and classify the severity and urgency of incoming audio recordings.',
      'Built the front end with React.js; developed back-end services in Python and vanilla JavaScript.',
    ],
  },
  {
    id: 3,
    title: 'Enterprise Solution Management, ESMOS',
    date: 'Jan 2026 – Apr 2026',
    award: 'Longlisted — Dell Cloud Native Award',
    highlights: [
      'Resolved a simulated cyberattack on an Odoo production environment hosted on Azure IaaS, applying ITIL 4 incident and problem management frameworks.',
      'Architected a production environment scaled for 500 concurrent users and deployed a Moodle-based compliance training platform with strict access control.',
      'Implemented NGINX load balancing, Azure Monitor, Grafana, and Prometheus for internal observability; BetterStack for external monitoring.',
    ],
  },
  {
    id: 4,
    title: 'Grib Eats',
    date: 'Jan 2026 – Apr 2026',
    highlights: [
      'Built a food delivery application using a microservices architecture following Service-Oriented Architecture (SOA) principles, containerised with Docker.',
      'Designed independent services for ordering, notifications, and delivery coordination, communicating via RabbitMQ (AMQP) and Gmail (SMTP).',
      'Developed the front end in React.js with Python and Java powering the back-end microservices.',
    ],
  },
]

const ProjectsSection = () => (
  <>
    {projects.map(({ id, title, date, highlights, award }) => (
      <div key={id} className="project-item">
        <div className="project-header">
          <h3>{title}</h3>
          <span className="date">{date}</span>
        </div>
        {award && <div className="project-award">{award}</div>}
        <ul className="highlights">
          {highlights.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    ))}
  </>
)

export default ProjectsSection
