import { Link } from 'react-scroll'
import { motion } from 'motion/react'
import './home.css'

function Home() {
  return (
    <div id="home">

      <motion.div
        className="home-left"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
              >

        <p className="intro">Hi, I'm</p>

        <h1>Himanshu Dutt</h1>

        <h2>Computer Science Student</h2>

        <p className="description">
          I enjoy building practical software projects, solving problems, and expanding my skills across different areas of computer science.
        </p>

        <div className="home-buttons">

          <Link to="projects" smooth={true} duration={500}>
            <button className="home-btn">
              View Projects
            </button>
          </Link>

          <a href="/Himanshu_Dutt_Resume.pdf" download>
            <button className="resume-btn">
              Download Resume
            </button>
          </a>

        </div>

      </motion.div>

      <motion.div
        className="home-right"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >

        <div className="code-window">

          <div className="code-header">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="code-content">

            <p>
              <span className="code-purple">const</span> developer = {'{'}
            </p>

            <p className="code-indent">
              name: <span className="code-pink">"Himanshu Dutt"</span>,
            </p>

            <p className="code-indent">
              role: <span className="code-pink">"CS Student"</span>,
            </p>

            <p className="code-indent">
              focus: <span className="code-pink">"Building & Learning"</span>
            </p>

            <p>{'}'}</p>

          </div>

        </div>

      </motion.div>

    </div>
  )
}

export default Home