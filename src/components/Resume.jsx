import { useState, useRef, useCallback } from 'react'
import './Resume.css'
import Header from './Header'
import Footer from './Footer'
import IntroColumn from './IntroColumn'
import SectionWrapper from './SectionWrapper'
import EducationSection from './sections/EducationSection'
import ExperienceSection from './sections/ExperienceSection'
import ProjectsSection from './sections/ProjectsSection'
import TheatreSection from './sections/TheatreSection'
import SkillsSection from './sections/SkillsSection'

const Resume = () => {
    const [expandedSections, setExpandedSections] = useState({
        education: true,
        experience: true,
        projects: true,
        theatre: true,
        skills: true,
    })
    const [headerCollapsed, setHeaderCollapsed] = useState(false)
    const containerRef = useRef(null)

    const toggleSection = (section) => {
        setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }))
    }

    const handleScroll = useCallback(() => {
        setHeaderCollapsed((containerRef.current?.scrollTop ?? 0) > 40)
    }, [])

    return (
        <div className="resume-container" ref={containerRef} onScroll={handleScroll}>
            <Header collapsed={headerCollapsed} />
            <main className="resume-content">
                <IntroColumn />
                <div className="resume-column">
                    <SectionWrapper title="Projects" sectionKey="projects" expanded={expandedSections.projects} onToggle={toggleSection}>
                        <ProjectsSection />
                    </SectionWrapper>
                    <SectionWrapper title="Education" sectionKey="education" expanded={expandedSections.education} onToggle={toggleSection}>
                        <EducationSection />
                    </SectionWrapper>
                    <SectionWrapper title="Theatre & Production" sectionKey="theatre" expanded={expandedSections.theatre} onToggle={toggleSection}>
                        <TheatreSection />
                    </SectionWrapper>
                    <SectionWrapper title="Experience" sectionKey="experience" expanded={expandedSections.experience} onToggle={toggleSection}>
                        <ExperienceSection />
                    </SectionWrapper>
                    <SectionWrapper title="Skills & Interests" sectionKey="skills" expanded={expandedSections.skills} onToggle={toggleSection}>
                        <SkillsSection />
                    </SectionWrapper>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Resume
