/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../../index.css'
import footerLogo from '../../assets/footer-logo.png'
import navigator from '../../assets/navigator.png'
import css from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={css.footer}>
        <div className={`container ${css.footerMain}`}>
            <div className={css.footerLinkMain}>
                <div className={css.footerLogo}>
                    <img src={footerLogo} alt="logo" />
                </div>
                <div className={css.footerBriefing}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias vitae ipsum quaerat explicabo quod voluptates ea consequuntur architecto nemo odio?</p>
                </div>
                <div className={css.footerLocation}>
                    <div className={css.footerLocationImg}>
                        <img src={navigator} alt="navigator" />
                    </div>
                    <div className={css.footerLocationBriefing}>
                        <p>Minia-Egypt</p>
                    </div>
                </div>
            </div>
            <div className={css.footerLink}>
                <h4>Contact</h4>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twiter</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Github</a></li>
            </div>
            <div className={css.footerLink}>
                <h4>Services</h4>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Others</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">More</a></li>
            </div>
        </div>
    </footer>
  )
}

export default Footer