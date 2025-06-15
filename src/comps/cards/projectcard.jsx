import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './projectcard.css'

const ProjectCard = ({ projects = [], currentProjectIndex = 0, onProjectChange }) => {
    // Default projects using the actual project folders and correct filenames
    const defaultProjects = [
        {
            images: ['/projects/partiva/partivasite.png'],
            title: 'Partiva',
            folder: 'partiva'
        },
        {
            images: ['/projects/rpg/rpggame.png'],
            title: 'RPG Game',
            folder: 'rpg'
        },
        {
            images: ['/projects/sidious/sidiouspage.png'],
            title: 'Sidious Project',
            folder: 'sidious'
        },
        {
            images: ['/projects/folio/folio.png'],
            title: 'Portfolio',
            folder: 'folio'
        },
        {
            images: ['/projects/staada/staadasite.png'],
            title: 'Staada Project',
            folder: 'staada'
        },
        {
            images: ['/projects/vader/vadersite.png'],
            title: 'Vader Project',
            folder: 'vader'
        }
    ]

    const projectsToShow = projects.length > 0 ? projects : defaultProjects
    const currentProject = projectsToShow[currentProjectIndex]

    const nextProject = () => {
        const newIndex = currentProjectIndex < projectsToShow.length - 1 ? currentProjectIndex + 1 : 0
        if (onProjectChange) {
            onProjectChange(newIndex)
        }
    }

    const prevProject = () => {
        const newIndex = currentProjectIndex > 0 ? currentProjectIndex - 1 : projectsToShow.length - 1
        if (onProjectChange) {
            onProjectChange(newIndex)
        }
    }

    // Animation variants
    const imageVariants = {
        initial: { opacity: 0, scale: 0.3, y: 50 },
        animate: { 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: {
                type: "spring",
                damping: 10,
                stiffness: 200,
                bounce: 0.5,
                duration: 0.1
            }
        },
        exit: { 
            opacity: 0, 
            scale: 0.1, 
            y: -50,
            transition: {
                type: "spring",
                damping: 30,
                stiffness: 200,
                duration: 0.1
            }
        }
    }

    const buttonVariants = {
        hover: { 
            scale: 1.05,
            transition: { duration: 0.2 }
        },
        tap: { 
            scale: 0.95,
            transition: { duration: 0.1 }
        }
    }

    return (
        <motion.div 
            className='project-card'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
        >
            <AnimatePresence mode="wait">
                <motion.div 
                    key={`image-${currentProjectIndex}`}
                    className="project-card-img"
                    variants={imageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <img 
                        src={currentProject.images ? currentProject.images[0] : currentProject.img} 
                        alt={currentProject.title} 
                    />
                </motion.div>
            </AnimatePresence>

            <div className="pojbuttons">
                <div className="bcontainer">
                    <motion.button 
                        className="button"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        onClick={prevProject}
                    >
                        Back
                    </motion.button>
                </div>
                <div className="bcontainer">
                    <motion.button 
                        className="button"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        onClick={nextProject}
                    >
                        Next
                    </motion.button>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard