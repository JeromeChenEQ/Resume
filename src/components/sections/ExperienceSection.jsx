const experiences = [
  {
    id: 1,
    title: 'Teaching Assistant',
    company: 'School of Computing and Information Systems',
    date: 'Aug 2025 – Dec 2025',
    highlights: [
      'Assisted in teaching Python programming to over 40 first-year students.',
      'Provided feedback emphasising code optimisation, logic structuring, and readability, improving students\' code quality and debugging efficiency.',
      'Strengthened communication and technical explanation skills by simplifying complex programming concepts for diverse learners.',
    ],
  },
  {
    id: 2,
    title: 'Deputy Director',
    company: 'SMU Broadcast & Entertainment, Campus Events & Backstage',
    date: 'Jan 2025 – Dec 2025',
    highlights: [
      'Oversaw a team of 20 and led execution of campus-wide events including SMU Open House, Academic Year Opening, and various camps.',
      'Coordinated backstage operations, ensuring smooth transitions between setup and live execution.',
      'Liaised between event organisers, performers, and technical crew to align on schedules, requirements, and contingency plans.',
      'Introduced process improvements to equipment usage and task allocation workflows, enhancing event readiness and efficiency.',
      'Developed leadership and stakeholder management skills through hands-on coordination in high-pressure, time-sensitive environments.',
    ],
  },
]

const ExperienceSection = () => (
  <>
    {experiences.map(({ id, title, company, date, highlights }) => (
      <div key={id} className="experience-item">
        <div className="exp-header">
          <h3>{title}</h3>
          <span className="company">{company}</span>
          <span className="date">{date}</span>
        </div>
        <ul className="highlights">
          {highlights.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    ))}
  </>
)

export default ExperienceSection
