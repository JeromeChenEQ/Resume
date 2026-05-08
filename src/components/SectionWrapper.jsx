const SectionWrapper = ({ title, sectionKey, expanded, onToggle, children }) => (
  <section className="resume-section">
    <div className="section-header" onClick={() => onToggle(sectionKey)}>
      <h2>{title}</h2>
      <span className={`toggle-arrow ${expanded ? 'open' : ''}`}>▼</span>
    </div>
    {expanded && (
      <div className="section-content fade-in">
        {children}
      </div>
    )}
  </section>
)

export default SectionWrapper
