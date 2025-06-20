import { SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiNodedotjs, SiGit, SiGithub, SiVercel, SiFigma } from 'react-icons/si'
import './skills.css'

const Skills = () => {
  return (

<div className='skills-section'>
    <h2 className='skills-main-title'>My Secret <span className='sauce'>Sauce</span></h2>
        <div className='tech-grid'>
            <div className='tech-item'>
                <span className='tech-icon react'><SiReact /></span>
                <span className='tech-name'>React</span>
            </div>
            <div className='tech-item'>
                <span className='tech-icon typescript'><SiTypescript /></span>
                <span className='tech-name'>Typescript</span>
            </div>
            <div className='tech-item'>
                <span className='tech-icon javascript'><SiJavascript /></span>
                <span className='tech-name'>Javascript</span>
            </div>
            <div className='tech-item'>
                <span className='tech-icon tailwind'><SiTailwindcss /></span>
                <span className='tech-name'>Tailwind</span>
            </div>
            <div className='tech-item'>
                <span className='tech-icon nodejs'><SiNodedotjs /></span>
                <span className='tech-name'>Node.js</span>
            </div>
            <div className='tech-item'>
                <span className='tech-icon git'><SiGit /></span>
                <span className='tech-name'>Git</span>
            </div>
            <div className='tech-item'>
                <span className='tech-icon github'><SiGithub /></span>
                <span className='tech-name'>Github</span>
            </div>
            <div className='tech-item'>
                <span className='tech-icon vercel'><SiVercel /></span>
                <span className='tech-name'>Vercel</span>
            </div>
            <div className='tech-item'>
                <span className='tech-icon figma'><SiFigma /></span>
                <span className='tech-name'>Figma</span>
            </div>
        </div>
</div>
  )
}

export default Skills