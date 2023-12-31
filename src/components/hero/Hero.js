import React from 'react'
import css from './Hero.module.css'
import '../../index.css'
import HeroImg from  '../../assets/main-avatar.png'
import { motion } from 'framer-motion';

const Hero = () => {
  return (
        <div className={`container ${css.heroContainer}`}>
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x:-50 },
                visible: { opacity: 1, x: 0 }
            }}
            className={css.heroContent}>
                <h1>we provide <br /> delivery within <br /> <span className={css.colored}>30 min</span></h1>
                <p>home delivery and online resevation for <br /> restaurant, cafe, medicine, food</p>
                <div className={css.heroList}>
                    <li>Supports All Products</li>
                    <li>The Highest Quality</li>
                    <li>Fast Delivery</li>
                </div>
                <div className={css.heroBtnContainer}>
                    <button className='btn'>Create Order</button>
                    <button className='btn btn-trasp'>Shop Now</button>
                </div>
            </motion.div>
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x:50 },
                visible: { opacity: 1, x: 0 }
            }}
            className={css.heroImage}>
                <img src={HeroImg} alt="hero-img" />
            </motion.div>
        </div>
    )
}

export default Hero