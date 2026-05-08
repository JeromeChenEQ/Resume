const SkillCategory = ({ title, skills }) => (
  <div className="skill-category">
    <h4>{title}</h4>
    <div className="skill-tags">
      {skills.map(skill => (
        <span key={skill} className="skill-tag">{skill}</span>
      ))}
    </div>
  </div>
)

export default SkillCategory
