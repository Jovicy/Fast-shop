import React from 'react'
import '../../index.css'
import css from './Contact.module.css'
import shoppingImage from '../../assets/Shopping 1.png'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
        <section className={`container ${css.contact}`}>
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y:-50 },
                visible: { opacity: 1, y: 0 }
            }}
            className={css.contactTitle}>
                <h1>Contact</h1>
            </motion.div>
            <div className={css.contactMain}>
                <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x:-50 },
                    visible: { opacity: 1, x: 0 }
                }}
                className={css.contactForm}>
                    <div className={css.contactFormTitle}>
                        <h2>Log In</h2>
                    </div>
                    <div className={css.contactFormInput}>
                        <input type="text" placeholder='Name'/>
                        <input type="email" placeholder='email'/>
                        <textarea name="message"cols="30" rows="10" placeholder='Write Order'></textarea>
                    </div>
                    <div className={css.contactFormBtn}>
                        <button className="btn">
                            Send
                        </button>
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
                className={css.contactIllusrator}>
                    <img src={shoppingImage} alt='shopping-img'/>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact