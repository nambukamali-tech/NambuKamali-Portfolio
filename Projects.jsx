import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
    const [filter, setFilter] = useState('All')

    const projects = [
        {
            title: 'Students Portal Web Application',
            desc: 'A Students Portal Web App.',
            stack: ['Dot Net','MongoDB',],
            category: 'Full Stack',
            github: 'https://github.com/nambukamali-tech/Student_Portal_App',
            demo: '#'
        },
        {
            title: 'Online Ticket Booking System',
            desc: 'Real-time task manager with drag-and-drop functionality and team collaboration features.',
            stack: ['React', 'DotNet', 'Sql'],
            category: 'Full Stack',
            github: 'https://github.com/nambukamali-tech/OnlineTicketBookingSystem',
            demo: '#'
        },
        {
            title: 'Deepfake Face Detection using Machine Learning with LSTM',
            desc: 'Detailed weather forecast application using external APIs and geolocation.',
            stack: ['Python', 'Sql'],
            category: 'Full Stack',
            github: '#',
            demo: '#'
        },
        {
            title: 'Development of Web Application for Rural Guider',
            desc: 'Secure and scalable REST API for a social media application with JWT authentication.',
            stack: ['Dotnet',  'SQL'],
            category: 'Full Stack',
            github: '#',
            demo: '#'
        },
        {
            title: 'Development of Web Application for Students Portal App',
            desc: 'Secure and Scalable Web application for dynamic and interactive students portal app',
            stack: ['React' , 'Node.js' , 'Express.js' , 'MongoDB'],
            category: 'Full Stack',
            github: 'https://github.com/nambukamali-tech/Students-Portal-MERN',
            demo: '#'
        },
        {
            title: 'Portfolio Web Application',
            desc: 'Building a Modern and Clean Portfolio for my Informations',
            stack: ['React', 'Vanilla CSS', 'React Icons', 'Vite'],
            category: 'Frontend',
            github:'#',
            demo: '#'
        },
        {
            title: 'Inventory Management System',
            desc: 'Developing the Inventory Management System for Real World usage like productions, dispatches etc..',
            stack: ['React', 'DotNet', 'SQL'],
            category: 'Full Stack',
            github: 'https://github.com/nambukamali-tech/InventoryManagement',
            demo: '#'
        }
    ]

    const categories = ['All', 'Full Stack', 'Frontend', 'Backend']

    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter)

    return (
        <section id="projects" style={{ padding: '6rem 2rem', background: 'var(--bg-primary)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>
                    Featured <span className="text-gradient">Projects</span>
                </h2>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            style={{
                                padding: '0.5rem 1.5rem',
                                borderRadius: '20px',
                                background: filter === cat ? 'var(--accent-primary)' : 'transparent',
                                color: filter === cat ? 'var(--bg-primary)' : 'var(--text-primary)',
                                border: `1px solid ${filter === cat ? 'var(--accent-primary)' : 'var(--glass-border)'}`,
                                transition: 'all 0.3s'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div
                    layout
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                style={{
                                    background: 'var(--glass-bg)',
                                    borderRadius: '15px',
                                    border: '1px solid var(--glass-border)',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ marginBottom: '1rem', color: 'var(--accent-secondary)', fontSize: '0.9rem' }}>{project.category}</div>
                                    <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{project.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>{project.desc}</p>

                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                                        {project.stack.map(tech => (
                                            <span key={tech} style={{
                                                fontSize: '0.8rem',
                                                padding: '0.2rem 0.8rem',
                                                background: 'var(--bg-secondary)',
                                                borderRadius: '10px',
                                                color: 'var(--accent-primary)'
                                            }}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <a href={project.github} className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '10px' }}>
                                            <FaGithub /> Code
                                        </a>
                                        <a href={project.demo} className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '10px' }}>
                                            <FaExternalLinkAlt /> Demo
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects
