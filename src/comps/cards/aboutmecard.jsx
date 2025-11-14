import React from 'react' 
import './aboutmecard.css'

const AboutMeCard = () => {
    return (
        <div className='about-me-card'>
            <div className="about-me-header">
                <h1 className='highlight'>About Me</h1>
                <div className="coding-icon">
                    <span>&lt;/&gt;</span>
                </div>
            </div>
            
            <div className="about-me-content">
                <div className="intro-section">
                    <p className="intro-text">
                        Self-taught developer with a passion for creating digital experiences. 
                        My journey began with curiosity and evolved into expertise.
                    </p>
                </div>

                <div className="journey-section">
                    <h3>My Learning Journey</h3>
                    <div className="tech-timeline">
                        <div className="tech-step">
                            <div className="tech-icon html">HTML</div>
                            <div className="tech-description">Started with the basics</div>
                        </div>
                        <div className="timeline-arrow">→</div>
                        <div className="tech-step">
                            <div className="tech-icon js">JS</div>
                            <div className="tech-description">Added interactivity</div>
                        </div>
                        <div className="timeline-arrow">→</div>
                        <div className="tech-step">
                            <div className="tech-icon react">React</div>
                            <div className="tech-description">Building modern apps</div>
                        </div>
                    </div>
                </div>

                <div className="skills-section">
                    <div className="skill-badge">Self-Motivated</div>
                    <div className="skill-badge">Problem Solver</div>
                    <div className="skill-badge">Continuous Learner</div>
                </div>
            </div>
        </div>
    )
}

export default AboutMeCard;
