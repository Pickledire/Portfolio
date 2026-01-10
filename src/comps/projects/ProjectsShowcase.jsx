import React, { useState, useEffect } from 'react'
import './ProjectsShowcase.css'

const ProjectsShowcase = ({ id }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [showText, setShowText] = useState(false)
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeProjectForModal, setActiveProjectForModal] = useState(null)

  // Ordered list of projects (this order will match the visual display)
  // Staada and Vader replaced with RPG and SW Battle Sim
  // swbattlesim and sidious swapped to adjust visual order
  const projectsOrder = ['partiva', 'swbattlesim', 'folio', 'rpg', 'sidious']
  
  const projectsConfig = {
    partiva: {
      image: 'partivasite.png',
      colorTheme: '#ff94e6'
    },
    rpg: {
      image: 'rpggame.png',
      colorTheme: '#22d3ee' // cyan/blue to match RPG artwork
    },
    sidious: {
      image: 'sidiouspage.png', 
      colorTheme: '#880000'
    },
    folio: {
      image: 'folio.png',
      colorTheme: '#9203ff'
    },
    staada: {
      image: 'staadasite.png',
      colorTheme: '#4caf50'
    },
    swbattlesim: {
      image: 'swbattlesim.png',
      colorTheme: '#facc15' // warm yellow accent for battle sim
    }
  }

  // Load projects dynamically in the correct order
  useEffect(() => {
    const loadAllProjects = async () => {
      const projectData = []
      
      // Load projects in the specified order
      for (const projectFolder of projectsOrder) {
        const config = projectsConfig[projectFolder]
        if (!config) continue
        
        try {
          const infoResponse = await fetch(`/projects/${projectFolder}/project-info.json`)
          
          if (infoResponse.ok) {
            const projectDetails = await infoResponse.json()
            const imagePath = `/projects/${projectFolder}/${config.image}`
            
            projectData.push({
              ...projectDetails,
              folder: projectFolder,
              image: imagePath,
              colorTheme: config.colorTheme
            })
          }
        } catch (error) {
          console.error(`Failed to load project ${projectFolder}:`, error)
        }
      }
      
      setProjects(projectData)
      setLoading(false)
    }

    loadAllProjects()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.querySelector('.projects-showcase')
      if (!projectsSection) return

      const rect = projectsSection.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // More restrictive thresholds - show later, hide earlier
      const isInSection = rect.top < windowHeight * 0.5 && rect.bottom > windowHeight * 0.6
      setShowText(isInSection)

      // Handle fade in/out for all images
      const projectElements = document.querySelectorAll('.project-item')
      
      projectElements.forEach((element, index) => {
        const elementRect = element.getBoundingClientRect()
        const projectImage = element.querySelector('.project-image')
        
        // Fade in when coming into view
        if (elementRect.top < windowHeight * 0.8 && elementRect.bottom > windowHeight * 0.2) {
          projectImage?.classList.add('fade-in')
        } else {
          projectImage?.classList.remove('fade-in')
        }
      })

      // Update current project based on scroll position within the section
      if (isInSection) {
        projectElements.forEach((element, index) => {
          const elementRect = element.getBoundingClientRect()
          
          // Check if project is in viewport (center of screen)
          if (elementRect.top <= windowHeight / 2 && elementRect.bottom >= windowHeight / 2) {
            setCurrentProjectIndex(index)
          }
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Call once to set initial state
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [projects])

  const currentProject = projects[currentProjectIndex] || {}

  if (loading) {
    return (
      <div className="projects-showcase">
        <div className="loading-container">
          <p>Loading projects...</p>
        </div>
      </div>
    )
  }

  if (projects.length === 0) {
    return (
      <div className="projects-showcase">
        <div className="no-projects-container">
          <p>No projects found. Check console for errors.</p>
        </div>
      </div>
    )
  }

  return (
    <div className='projects-showcase' id={id}>



      
      {/* Projects images in column */}
        {projects.map((project, index) => (
          <div 
            key={project.folder} 
            className='project-item'
            onClick={() => setActiveProjectForModal(project)}
          >
            <img 
              src={project.image} 
              alt={project.title}
              className='project-image'
              style={{ 
                borderColor: project.colorTheme,
                boxShadow: `0 8px 32px ${project.colorTheme}40`
              }}
              onError={(e) => {
                e.target.style.border = '2px solid red'
                e.target.alt = `Missing: ${project.title}`
              }}
            />
          </div>
        ))}







      {/* Sticky text */}
      <div 
        className={`project-text-sticky ${showText ? 'show' : 'hide'}`}
        style={{ '--theme-color': currentProject?.colorTheme }}
      >
        <div className='project-text-content'>
          <h2 className='project-title'>
            My Curated <span className='highlight-text'>work</span>
          </h2>
          
          <div className='current-project-info'>
            <h3 className='current-project-title'>{currentProject?.title}</h3>
            <p className='current-project-description'>{currentProject?.description}</p>
            
            <div className='project-features'>
              {currentProject?.features?.map((feature, index) => (
                <div key={index} className='feature-item'>
                  <span className='feature-bullet'>+</span>
                  <span className='feature-text'>{feature}</span>
                </div>
              ))}
            </div>

            <div className='tech-stack'>
              {currentProject?.techStack?.map((tech, index) => (
                <span key={index} className='tech-badge'>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {activeProjectForModal && (
        <div 
          className='project-modal-backdrop'
          onClick={() => setActiveProjectForModal(null)}
        >
          <div 
            className='project-modal'
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{activeProjectForModal.title}</h3>
            <p>More details about this project are coming soon.</p>
            <button 
              className='project-modal-close'
              onClick={() => setActiveProjectForModal(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectsShowcase 