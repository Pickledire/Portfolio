import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import './infocard.css'

const InfoCard = ({ currentProject }) => {
    const [markdownContent, setMarkdownContent] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!currentProject || !currentProject.readmePath) {
            setMarkdownContent('')
            return
        }

        const fetchMarkdown = async () => {
            setIsLoading(true)
            setError(null)
            
            try {
                const response = await fetch(currentProject.readmePath)
                if (!response.ok) {
                    throw new Error(`Failed to fetch README: ${response.status}`)
                }
                const content = await response.text()
                setMarkdownContent(content)
            } catch (err) {
                console.error('Error fetching markdown:', err)
                setError(err.message)
                setMarkdownContent(`# ${currentProject.title}\n\n*README.md file not found or could not be loaded.*\n\nThis project is still in development. Check back later for detailed documentation!`)
            } finally {
                setIsLoading(false)
            }
        }

        fetchMarkdown()
    }, [currentProject])

    const contentVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6,
                type: "spring",
                damping: 20,
                stiffness: 100
            }
        },
        exit: { 
            opacity: 0, 
            y: -20,
            transition: {
                duration: 0.3
            }
        }
    }

    if (!currentProject) {
        return (
            <div className='info-card'>
                <div className="github-markdown-body">
                    <h2>Select a project to view documentation</h2>
                </div>
            </div>
        )
    }

    return (
        <div className='info-card'>
            <AnimatePresence mode="wait">
                <motion.div 
                    key={currentProject.title}
                    variants={contentVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="markdown-container"
                >
                    {isLoading ? (
                        <div className="loading-spinner">
                            <div className="spinner"></div>
                            <p>Loading documentation...</p>
                        </div>
                    ) : (
                        <div className="github-markdown-body">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeRaw]}
                                components={{
                                    code({ node, inline, className, children, ...props }) {
                                        const match = /language-(\w+)/.exec(className || '')
                                        return !inline && match ? (
                                            <SyntaxHighlighter
                                                style={vscDarkPlus}
                                                language={match[1]}
                                                PreTag="div"
                                                customStyle={{
                                                    background: '#1e1e1e',
                                                    border: '1px solid #333',
                                                    borderRadius: '6px',
                                                    fontSize: '14px'
                                                }}
                                                {...props}
                                            >
                                                {String(children).replace(/\n$/, '')}
                                            </SyntaxHighlighter>
                                        ) : (
                                            <code className={className} {...props}>
                                                {children}
                                            </code>
                                        )
                                    },
                                    img({ src, alt, ...props }) {
                                        // Allow shield badges and typing SVG images but block other images
                                        if (src?.includes('img.shields.io') || src?.includes('readme-typing-svg.herokuapp.com')) {
                                            return (
                                                <img 
                                                    src={src} 
                                                    alt={alt} 
                                                    loading="lazy"
                                                    style={{ 
                                                        maxWidth: '100%', 
                                                        height: 'auto',
                                                        display: 'inline-block',
                                                        margin: '2px 4px'
                                                    }}
                                                    {...props} 
                                                />
                                            )
                                        }
                                        // Block all other images (like project screenshots)
                                        return null
                                    }
                                }}
                            >
                                {markdownContent}
                            </ReactMarkdown>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default InfoCard