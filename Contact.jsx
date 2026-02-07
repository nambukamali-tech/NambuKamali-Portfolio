import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Thank you for your message! I'll get back to you soon.")
    }

    return (
        <section id="contact" style={{ padding: '8rem 2rem', background: 'var(--bg-primary)' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '2.5rem' }}>
                    Get In <span className="text-gradient">Touch</span>
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Let's Talk</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            I'm currently open to new opportunities and collaborations.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    width: '3rem', height: '3rem', background: 'var(--bg-secondary)',
                                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--accent-primary)', fontSize: '1.2rem'
                                }}>
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem' }}>Email</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>nambukamali@gmail.com</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    width: '3rem', height: '3rem', background: 'var(--bg-secondary)',
                                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--accent-primary)', fontSize: '1.2rem'
                                }}>
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem' }}>Location</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>Coimbatore , TamilNadu</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="name" style={{ color: 'var(--text-secondary)' }}>Name</label>
                            <input type="text" id="name" required style={{
                                padding: '1rem', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)',
                                borderRadius: '10px', color: 'var(--text-primary)', outline: 'none'
                            }} />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="email" style={{ color: 'var(--text-secondary)' }}>Email</label>
                            <input type="email" id="email" required style={{
                                padding: '1rem', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)',
                                borderRadius: '10px', color: 'var(--text-primary)', outline: 'none'
                            }} />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="message" style={{ color: 'var(--text-secondary)' }}>Message</label>
                            <textarea id="message" rows="5" required style={{
                                padding: '1rem', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)',
                                borderRadius: '10px', color: 'var(--text-primary)', outline: 'none', resize: 'none', fontFamily: 'inherit'
                            }}></textarea>
                        </div>

                        <button type="submit" className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: 'fit-content' }}>
                            Send Message <FaPaperPlane />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    )
}

export default Contact
