import React from 'react'
import Link from 'next/Link'
import styles from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <>
    <div className={styles.navbarmenu}>
        <ul className={styles.navlist}>

          <Link href='/'>
            <a><li>Home</li></a>
          </Link>
          <Link href='/about'>
          <a> <li>About</li></a>
          </Link>
          <Link href='/Contact'>
          <a> <li>Contact</li></a>
          </Link>
          <Link href='/Login'>          
          <a> <li>Login</li></a>
          </Link>
          <Link href='/blog/Blog'>          
          <a> <li>Blogs</li></a>
          </Link>
        </ul>
      </div>
    </>
  )
}

export default Navbar