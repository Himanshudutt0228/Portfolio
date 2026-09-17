import './nav.css'
import { Link } from 'react-scroll'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >

      <h1>Himanshu</h1>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <ul className={menuOpen ? 'nav-menu open' : 'nav-menu'}>

        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </li>

      </ul>

    </motion.nav>
  )
}

export default Nav