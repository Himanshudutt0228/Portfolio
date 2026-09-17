import './contact.css'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import { motion } from 'motion/react'

function Contact() {
  const form = useRef()
  const [status, setStatus] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_220e14s',
      'template_2bfk14l',
      form.current,
      {
        publicKey: 't4vYzPmxf8ra4eBVr',
      }
    )
    .then(
      () => {
        setStatus('Message sent successfully! ✓')
        form.current.reset()
      },
      (error) => {
        console.log('FAILED...', error)
        setStatus('Something went wrong. Please try again.')
      }
    )
  }

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
    <div id="contact">

      <motion.div
        className="contact-content"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >

        <motion.h1 variants={item}>
          Contact Me
        </motion.h1>

        <motion.p variants={item}>
          Feel free to reach out if you'd like to connect or work together.
        </motion.p>

        <form
          ref={form}
          className="contact-form"
          onSubmit={sendEmail}
        >

          <motion.input
            variants={item}
            type="text"
            name="name"
            placeholder="Your Name"
          />

          <motion.input
            variants={item}
            type="email"
            name="email"
            placeholder="Your Email"
          />

          <motion.textarea
            variants={item}
            name="message"
            placeholder="Your Message"
            rows="6"
          />

          <motion.button
            variants={item}
            type="submit"
          >
            Send Message
          </motion.button>

          {status && (
            <motion.p
              className="form-status"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {status}
            </motion.p>
          )}

        </form>

      </motion.div>

    </div>
  )
}

export default Contact