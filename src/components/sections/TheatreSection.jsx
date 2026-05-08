import SkillCategory from '../SkillCategory'
import Carousel from '../Carousel'

// Vite auto-discovers all images inside src/assets/productions/**/
// To add photos for a production, drop image files into:
//   src/assets/productions/<folder-key>/
const imageModules = import.meta.glob(
  '../../assets/productions/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true }
)

function getImages(folder) {
  return Object.entries(imageModules)
    .filter(([path]) => path.includes(`/${folder}/`))
    .map(([, mod]) => mod.default)
    .sort()
}

const theatreSkills = [
  {
    title: 'Theatre Lighting',
    skills: ["Arts Camp Glam Night 2025", "SoundFoundry Cypher 2025", "Ardiente Un Paso 2025"],
  },
  {
    title: 'Live Sound Support',
    skills: ["Freelance", "Arts Camp Glam Night '25", "SMU Broadcast & Entertainment"],
  },
  {
    title: 'Stage Management',
    skills: ["SMU Open House 2025", "SMU Academic Year Opening 2025"],
  },
]

// folder: matches a subfolder name inside src/assets/productions/
const productions = [
  {
    id: 1,
    title: 'Arts Camp 2025 - Glam Night',
    subtitle: 'Finale night of ACF Arts Camp',
    folder: 'glam-night',
    roles: ['Lighting Designer', 'Sound System Designer'],
  },
  {
    id: 2,
    title: 'Un Paso 2025',
    subtitle: 'Ardiente Annual Production',
    folder: 'un-paso-2025',
    roles: ['Lighting Designer'],
  },
]

const TheatreSection = () => (
  <>
    <div className="skills-grid">
      {theatreSkills.map(({ title, skills }) => (
        <SkillCategory key={title} title={title} skills={skills} />
      ))}
    </div>

    <div className="production-gallery">
      <h3>Productions & Events</h3>
      <div className="gallery-grid">
        {productions.map(({ id, title, subtitle, roles, folder }) => {
          const images = getImages(folder)
          return (
            <div key={id} className="gallery-item">
              {images.length > 0 ? (
                <Carousel images={images} alt={title} />
              ) : (
                <div className="image-placeholder">
                  <div className="placeholder-icon">📷</div>
                  <p>Photos coming soon</p>
                </div>
              )}
              <div className="production-info">
                <h4>{title}</h4>
                {subtitle && <p className="subtitle">{subtitle}</p>}
                <div className="role-list">
                  {roles.map((role, idx) => (
                    <p key={idx} className="role">• {role}</p>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </>
)

export default TheatreSection
