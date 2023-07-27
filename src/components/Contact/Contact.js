import React from 'react'
import '../../index.css'
import css from './Contact.module.css'
import shoppingImage from '../../assets/Shopping 1.png'

const Contact = () => {
  return (
        <section className={`container ${css.contact}`}>
            <div className={css.contactTitle}>
                <h1>Contact</h1>
            </div>
            <div className={css.contactMain}>
                <div className={css.contactForm}>
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
                </div>
                <div className={css.contactIllusrator}>
                    <img src={shoppingImage} alt='shopping-img'/>
                </div>
            </div>
        </section>
    )
}

export default Contact