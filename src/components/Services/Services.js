import React from 'react'
import '../../index.css'
import css from './Services.module.css'
import shoppingImg from '../../assets/cart-big.png'
import orderImg from '../../assets/scooter.png'
import supportImg from '../../assets/env.png'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <section className={`container ${css.services}`}>
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{ duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, y:-50 },
            visible: { opacity: 1, y: 0 }
        }}
        className={css.servicesTitle}>
            <h1>services</h1>
        </motion.div>
        <div className={css.servicesMain}>
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x:-50 },
                visible: { opacity: 1, x: 0 }
            }}
            className={css.servicesCard}>
                <div className={css.cardImg}>
                    <img src={shoppingImg} alt="card-img" />
                </div>
                <div className={css.cardBriefing}>
                    <div className={css.cardTitle}>
                        <h2>Shopping</h2>
                    </div>
                    <div className={css.cardParagraph}>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <button className="btn">
                        Start
                    </button>
                </div>
            </motion.div>
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x:-80 },
                visible: { opacity: 1, x: 0 }
            }}
            className={css.servicesCard}>
                <div className={css.cardImg}>
                    <img src={orderImg} alt="card-img" />
                </div>
                <div className={css.cardBriefing}>
                    <div className={css.cardTitle}>
                        <h2>order</h2>
                    </div>
                    <div className={css.cardParagraph}>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <button className="btn">
                        Start
                    </button>
                </div>
            </motion.div>
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x:-110 },
                visible: { opacity: 1, x: 0 }
            }}
            className={css.servicesCard}>
                <div className={css.cardImg}>
                    <img src={supportImg} alt="card-img" />
                </div>
                <div className={css.cardBriefing}>
                    <div className={css.cardTitle}>
                        <h2>Support</h2>
                    </div>
                    <div className={css.cardParagraph}>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <button className="btn">
                        Start
                    </button>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default Services