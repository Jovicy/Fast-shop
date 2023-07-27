/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import css from './Nav.module.css'
import Logo from '../../assets/logo.png'
import '../../index.css'

const Nav = () => {
  return (
    <nav>
      <div className={`container ${css.navMain}`}>
        <div className={css.logo}>
          <img src={Logo} alt="logo" />
        </div>

        <div className={css.navCont}>
          <ul className={css.navList}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div className={css.navBtn}>
            <button className='btn'>Sign In</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav