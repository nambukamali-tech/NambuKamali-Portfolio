import { motion } from 'framer-motion'

const About = () => {
    return (
        <section id="about" style={{ padding: '8rem 2rem', background: 'var(--bg-primary)' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                        About <span className="text-gradient">Me</span>
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '4rem',
                        alignItems: 'center'
                    }}>
                        <div style={{
                            padding: '2rem',
                            background: 'var(--glass-bg)',
                            borderRadius: '20px',
                            border: '1px solid var(--glass-border)',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>
                                Who Am I?
                            </h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                                I am a passionate Full Stack Developer with a knack for crafting robust and scalable web applications.
                                My journey in tech started with a curiosity for how things work on the internet, which quickly turned into a career.
                            </p>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                I specialize in building applications that are not only functional but also aesthetically pleasing and easy to use.
                                I am constantly learning new technologies to stay ahead in this fast-paced industry.
                            </p>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '2rem'
                        }}>
                            {[
                                { count: '5 months', label: 'Experience' },
                                { count: '6+', label: 'Projects Completed' },
                                { count: '24/7', label: 'Support' }
                            ].map((stat, index) => (
                                <div key={index} style={{
                                    textAlign: 'center',
                                    padding: '1.5rem',
                                    background: 'var(--bg-secondary)',
                                    borderRadius: '15px',
                                    border: '1px solid var(--glass-border)'
                                }}>
                                    <h4 style={{ fontSize: '2rem', color: 'var(--accent-secondary)', fontWeight: 'bold' }}>
                                        {stat.count}
                                    </h4>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
