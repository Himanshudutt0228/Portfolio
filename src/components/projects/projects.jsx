import Card from '../card/card'
import './projects.css'
import { motion } from 'motion/react'

function Projects() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardAnimation = {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div id="projects">

      <div className="projects-content">

        <h1>Projects</h1>

        <p>
          A selection of projects I've built while learning and
          developing my programming skills.
        </p>

        <motion.div
          className="projects-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >

          <motion.div variants={cardAnimation}>
            <Card
              title="Wanderlust"
              description="A web application for creating and exploring property listings."
              technologies={['Node.js', 'Express.js', 'MongoDB', 'EJS']}
              link="https://github.com/Himanshudutt0228/Wanderlust"
            />
          </motion.div>

          <motion.div variants={cardAnimation}>
            <Card
              title="HOOOP Board Game"
              description="An interactive board game developed as a team project with a graphical user interface."
              technologies={['Java', 'Swing']}
              link="https://github.com/Himanshudutt0228/HOOOP-Java-Game"
            />
          </motion.div>

          <motion.div variants={cardAnimation}>
            <Card
              title="Campus Navigation System"
              description="A navigation system that finds efficient routes across campus using Dijkstra's algorithm."
              technologies={['Python', 'Dijkstra Algorithm']}
              link="https://github.com/Abdullah-Codespace/Campus-Navigation-System"
            />
          </motion.div>

          <motion.div variants={cardAnimation}>
            <Card
              title="Weather App"
              description="A web application that displays weather information using real-time API data."
              technologies={['HTML', 'CSS', 'JavaScript', 'API']}
              link="https://github.com/Himanshudutt0228/weather-app"
            />
          </motion.div>

          <motion.div variants={cardAnimation}>
            <Card
              title="Snake Game"
              description="A browser-based version of the classic Snake game."
              technologies={['HTML', 'CSS', 'JavaScript']}
              link="https://github.com/Himanshudutt0228/snake-game"
            />
          </motion.div>

          <motion.div variants={cardAnimation}>
            <Card
              title="Connect Four"
              description="An interactive browser-based version of the classic Connect Four game."
              technologies={['HTML', 'CSS', 'JavaScript']}
              link="https://github.com/Himanshudutt0228/connect4"
            />
          </motion.div>

        </motion.div>

      </div>

    </div>
  )
}

export default Projects