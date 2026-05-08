import SkillCategory from '../SkillCategory'

const skillGroups = [
  {
    title: 'Technical Skills',
    skills: ['Python', 'Java', 'JavaScript', 'CSS', 'HTML', 'PHP', 'SQL', 'Vue', 'React'],
  },
  {
    title: 'Soft Skills',
    skills: ['Leadership', 'Communication', 'Problem Solving', 'Project Coordination'],
  },
  {
    title: 'Languages',
    skills: ['English (Fluent)', 'Mandarin Chinese (Fluent)', 'Japanese (Pre-advanced)'],
  },
]

const SkillsSection = () => (
  <div className="skills-grid">
    {skillGroups.map(({ title, skills }) => (
      <SkillCategory key={title} title={title} skills={skills} />
    ))}
  </div>
)

export default SkillsSection
