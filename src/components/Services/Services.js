import React from 'react'
import '../../index.css'
import css from './Services.module.css'
import shoppingImg from '../../assets/cart-big.png'
import orderImg from '../../assets/scooter.png'
import supportImg from '../../assets/env.png'

const Services = () => {
  return (
    <section className={`container ${css.services}`}>
        <div className={css.servicesTitle}>
            <h1>services</h1>
        </div>
        <div className={css.servicesMain}>
            <div className={css.servicesCard}>
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
            </div>
            <div className={css.servicesCard}>
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
            </div>
            <div className={css.servicesCard}>
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
            </div>
        </div>
    </section>
  )
}

export default Services