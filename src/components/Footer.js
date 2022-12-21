import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
        <ul>
            <li>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-whatsapp"></i>
                <i className="bi bi-youtube"></i>
                <i className="bi bi-linkedin"></i>
                <i className="bi bi-github"></i>
            </li>
        </ul>
      </div> 
        <div className={styles.p}>
          <p>&copy;Islan Gomes, all rights reserved&reg;</p>
        </div>
    </div>
  )
}

export default Footer