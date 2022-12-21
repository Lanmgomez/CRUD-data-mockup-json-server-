import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={styles.header}>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/projects">Projetos</Link>
        </ul>
    </div>
  )
}

export default Navbar