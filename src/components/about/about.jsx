import './about.css'
import { motion } from 'motion/react'

function About() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const item = {
    hidden: {
      opacity: 0,
      y: 35
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <div id="about">

      <motion.div
        className="about-content"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
      >

        <motion.h1 variants={item}>
          About Me
        </motion.h1>

        <motion.p variants={item}>
          I'm a Computer Science student at Memorial University with
          hands-on experience building software and web projects.
        </motion.p>

        <motion.p variants={item}>
          I enjoy learning new technologies, solving problems, and
          turning ideas into practical applications.
        </motion.p>

        <motion.h2
          className="skills-title"
          variants={item}
        >
          Skills
        </motion.h2>

        <motion.div
          className="skills"
          variants={container}
        >
          <motion.span variants={item}>JavaScript</motion.span>
          <motion.span variants={item}>Python</motion.span>
          <motion.span variants={item}>Java</motion.span>
          <motion.span variants={item}>React</motion.span>
          <motion.span variants={item}>Node.js</motion.span>
          <motion.span variants={item}>Express.js</motion.span>
          <motion.span variants={item}>MongoDB</motion.span>
          <motion.span variants={item}>SQL</motion.span>
        </motion.div>

        <motion.h2
          className="education-title"
          variants={item}
        >
          Education
        </motion.h2>

        <motion.div
          className="education-card"
          variants={item}
        >
          <h3>Bachelor of Science — Computer Science</h3>
          <p>Memorial University of Newfoundland</p>
          <span>2023 — Present</span>
        </motion.div>

      </motion.div>

    </div>
  )
}

export default About