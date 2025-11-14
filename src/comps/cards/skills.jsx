import { SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiNodedotjs, SiGit, SiGithub, SiVercel, SiFigma, SiHtml5, SiCss3, SiFramer } from 'react-icons/si'
import './skills.css'

const Skills = () => {
  return (

<div className='skills-section'>
    <h2 className='skills-main-title'>My Secret <span className='sauce'>Sauce</span></h2>
        <div className='tech-grid'>
            <div className='tech-item react-tooltip'>
                <span className='tech-icon react'><SiReact /></span>
                <span className='tooltip'>React</span>
            </div>
            <div className='tech-item typescript-tooltip'>
                <span className='tech-icon typescript'><SiTypescript /></span>
                <span className='tooltip'>TypeScript</span>
            </div>
            <div className='tech-item javascript-tooltip'>
                <span className='tech-icon javascript'><SiJavascript /></span>
                <span className='tooltip'>JavaScript</span>
            </div>
            <div className='tech-item tailwind-tooltip'>
                <span className='tech-icon tailwind'><SiTailwindcss /></span>
                <span className='tooltip'>Tailwind CSS</span>
            </div>
            <div className='tech-item nodejs-tooltip'>
                <span className='tech-icon nodejs'><SiNodedotjs /></span>
                <span className='tooltip'>Node.js</span>
            </div>
            <div className='tech-item git-tooltip'>
                <span className='tech-icon git'><SiGit /></span>
                <span className='tooltip'>Git</span>
            </div>
            <div className='tech-item github-tooltip'>
                <span className='tech-icon github'><SiGithub /></span>
                <span className='tooltip'>GitHub</span>
            </div>
            <div className='tech-item vercel-tooltip'>
                <span className='tech-icon vercel'><SiVercel /></span>
                <span className='tooltip'>Vercel</span>
            </div>
            <div className='tech-item figma-tooltip'>
                <span className='tech-icon figma'><SiFigma /></span>
                <span className='tooltip'>Figma</span>
            </div>
            <div className='tech-item framer-tooltip'>
                <span className='tech-icon framer'><SiFramer /></span>
                <span className='tooltip'>Framer</span>
            </div>
        </div>
        <div className='gradient-line-2'></div>
</div>
  )
}

export default Skills