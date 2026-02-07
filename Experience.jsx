import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa'

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'DotNet Developer Intern',
            company: 'Eminent Technology Solutions , Madurai.',
            period: '1 Month',
            desc: 'Working with Experienced peoples and learn about the fundamentals , Building the Rural Guider Web Application for Rural side Students.',
            type: 'Internship'
        },
        {
            id: 2,
            role: 'Backend Developer Intern',
            company: 'PrimeMover Solutions , Coimbatore',
            period: '2025 Dec - Present',
            desc: 'Developing and Working with modern technologies for building a Scalable Applications',
            type: 'Internship'
        },
        {
            id: 3,
            role: 'Computer Science Degree',
            company: 'Alagappa University',
            period: '2020 - 2025',
            desc: 'Masters in Computer Science. Graduated with Honors.',
            type: 'Education'
        }
    ]

    return (
        <section id="experience" style={{ padding: '8rem 2rem', background: 'var(--bg-secondary)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '2.5rem' }}>
                    Experience & <span className="text-gradient">Education</span>
                </h2>

                <div style={{ position: 'relative', borderLeft: '2px solid var(--accent-secondary)', paddingLeft: '2rem' }}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            style={{ marginBottom: '3rem', position: 'relative' }}
                        >
                            <div style={{
                                position: 'absolute',
                                left: '-2.6rem',
                                top: '0',
                                width: '3rem',
                                height: '3rem',
                                background: 'var(--bg-primary)',
                                border: '2px solid var(--accent-secondary)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--accent-primary)',
                                fontSize: '1.2rem'
                            }}>
                                {exp.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
                            </div>

                            <div style={{
                                background: 'var(--glass-bg)',
                                padding: '2rem',
                                borderRadius: '15px',
                                border: '1px solid var(--glass-border)'
                            }}>
                                <span style={{
                                    display: 'inline-block',
                                    padding: '0.2rem 0.8rem',
                                    background: 'var(--accent-primary)',
                                    color: 'var(--bg-primary)',
                                    borderRadius: '10px',
                                    fontSize: '0.8rem',
                                    marginBottom: '0.5rem',
                                    fontWeight: 'bold'
                                }}>
                                    {exp.period}
                                </span>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>{exp.role}</h3>
                                <h4 style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontStyle: 'italic' }}>{exp.company}</h4>
                                <p style={{ color: 'var(--text-secondary)' }}>{exp.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
