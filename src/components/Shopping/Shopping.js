import React from 'react';
import '../../index.css';
import css from './Shopping.module.css';
import ShoppingImage from '../../assets/iphone.png';
import headphone from '../../assets/headphone.png';
import watch from '../../assets/watch.png';
import toyCar from '../../assets/toy-car.png';
import aloeVera from '../../assets/aloe-vera.png';
import crocs from '../../assets/crocs.png';
import glasses from '../../assets/glasses.png';
import lipStick from '../../assets/lipstick.png';
import bookmark from '../../assets/bookmark.png';
import viewMore from '../../assets/view-more.svg';
import fullStars from '../../assets/golden-star.svg';
import blankStar from '../../assets/blank-star.svg';
import { motion } from 'framer-motion';


const Shopping = () => {
  return (
    <section className={`container ${css.shopping}`}>
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{ duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, y:-50 },
            visible: { opacity: 1, y: 0 }
        }}
        className={css.shoppingTitle}>
            <h1>Shopping</h1>
        </motion.div>
        <div className={css.shoppingMain}>
            <div className={css.shoppingCartCont}>
                <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x:-50 },
                    visible: { opacity: 1, x: 0 }
                }}
                className={css.shoppingCartTitle}>
                    <h2>Best Product</h2>
                </motion.div>
                <div className={css.shoppingCartMain}>
                    <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x:-50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    className={css.shoppingCart}>
                        <div className={css.shoppingCartImg}>
                            <img src={ShoppingImage} alt="cart-img" />
                        </div>
                        <div className={css.shoppingBriefing}>
                            <div className={css.shoppingCartTitle}>
                                <div className={css.shoppingCartTitleHead}>
                                    <h3>iphone pro max</h3>
                                </div>
                                <div>
                                    <img src={bookmark} alt="badge"/>
                                </div>
                            </div>
                            <div className={css.shoppingCartParagraph}>
                                <p>Free for personal and commercial purpose with attribution</p>
                            </div>
                            <div className={css.shoppingCartRating}>
                                <div className={css.stars}>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={blankStar} alt="rating-stars"/>
                                </div>
                                <div className={css.rating}>
                                    <h3>5.5</h3>
                                </div>
                            </div>
                            <div className={css.shoppingCartPrice}>
                                <div className={css.priceTag}>
                                    <h3>18.2$</h3>
                                </div>
                                <div className={css.seeMore}>
                                    <img src={viewMore} alt="drop-down" />
                                </div>
                            </div>
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
                    className={css.shoppingCart}>
                        <div className={css.shoppingCartImg}>
                            <img src={headphone} alt="cart-img" />
                        </div>
                        <div className={css.shoppingBriefing}>
                            <div className={css.shoppingCartTitle}>
                                <div className={css.shoppingCartTitleHead}>
                                    <h3>Headphones</h3>
                                </div>
                                <div>
                                    <img src={bookmark} alt="badge"/>
                                </div>
                            </div>
                            <div className={css.shoppingCartParagraph}>
                                <p>Free for personal and commercial purpose with attribution</p>
                            </div>
                            <div className={css.shoppingCartRating}>
                                <div className={css.stars}>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={blankStar} alt="rating-stars"/>
                                </div>
                                <div className={css.rating}>
                                    <h3>5.5</h3>
                                </div>
                            </div>
                            <div className={css.shoppingCartPrice}>
                                <div className={css.priceTag}>
                                    <h3>18.2$</h3>
                                </div>
                                <div className={css.seeMore}>
                                    <img src={viewMore} alt="drop-down" />
                                </div>
                            </div>
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
                    className={css.shoppingCart}>
                        <div className={css.shoppingCartImg}>
                            <img src={watch} alt="cart-img" />
                        </div>
                        <div className={css.shoppingBriefing}>
                            <div className={css.shoppingCartTitle}>
                                <div className={css.shoppingCartTitleHead}>
                                    <h3>Watch</h3>
                                </div>
                                <div>
                                    <img src={bookmark} alt="badge"/>
                                </div>
                            </div>
                            <div className={css.shoppingCartParagraph}>
                                <p>Free for personal and commercial purpose with attribution</p>
                            </div>
                            <div className={css.shoppingCartRating}>
                                <div className={css.stars}>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={blankStar} alt="rating-stars"/>
                                </div>
                                <div className={css.rating}>
                                    <h3>5.5</h3>
                                </div>
                            </div>
                            <div className={css.shoppingCartPrice}>
                                <div className={css.priceTag}>
                                    <h3>18.2$</h3>
                                </div>
                                <div className={css.seeMore}>
                                    <img src={viewMore} alt="drop-down" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x:-140 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    className={css.shoppingCart}>
                        <div className={css.shoppingCartImg}>
                            <img src={toyCar} alt="cart-img" />
                        </div>
                        <div className={css.shoppingBriefing}>
                            <div className={css.shoppingCartTitle}>
                                <div className={css.shoppingCartTitleHead}>
                                    <h3>Toy Car</h3>
                                </div>
                                <div>
                                    <img src={bookmark} alt="badge"/>
                                </div>
                            </div>
                            <div className={css.shoppingCartParagraph}>
                                <p>Free for personal and commercial purpose with attribution</p>
                            </div>
                            <div className={css.shoppingCartRating}>
                                <div className={css.stars}>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={blankStar} alt="rating-stars"/>
                                </div>
                                <div className={css.rating}>
                                    <h3>5.5</h3>
                                </div>
                            </div>
                            <div className={css.shoppingCartPrice}>
                                <div className={css.priceTag}>
                                    <h3>18.2$</h3>
                                </div>
                                <div className={css.seeMore}>
                                    <img src={viewMore} alt="drop-down" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className={css.shoppingCartCont}>
                <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x:-50 },
                    visible: { opacity: 1, x: 0 }
                }}
                className={css.shoppingCartTitle}>
                    <h2>Best Product</h2>
                </motion.div>
                <div className={css.shoppingCartMain}>
                    <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x:140 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    className={css.shoppingCart}>
                        <div className={css.shoppingCartImg}>
                            <img src={aloeVera} alt="cart-img" />
                        </div>
                        <div className={css.shoppingBriefing}>
                            <div className={css.shoppingCartTitle}>
                                <div className={css.shoppingCartTitleHead}>
                                    <h3>Aloe Vera</h3>
                                </div>
                                <div>
                                    <img src={bookmark} alt="badge"/>
                                </div>
                            </div>
                            <div className={css.shoppingCartParagraph}>
                                <p>Free for personal and commercial purpose with attribution</p>
                            </div>
                            <div className={css.shoppingCartRating}>
                                <div className={css.stars}>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={blankStar} alt="rating-stars"/>
                                </div>
                                <div className={css.rating}>
                                    <h3>5.5</h3>
                                </div>
                            </div>
                            <div className={css.shoppingCartPrice}>
                                <div className={css.priceTag}>
                                    <h3>18.2$</h3>
                                </div>
                                <div className={css.seeMore}>
                                    <img src={viewMore} alt="drop-down" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x:110 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    className={css.shoppingCart}>
                        <div className={css.shoppingCartImg}>
                            <img src={lipStick} alt="cart-img" />
                        </div>
                        <div className={css.shoppingBriefing}>
                            <div className={css.shoppingCartTitle}>
                                <div className={css.shoppingCartTitleHead}>
                                    <h3>Lip Sticks</h3>
                                </div>
                                <div>
                                    <img src={bookmark} alt="badge"/>
                                </div>
                            </div>
                            <div className={css.shoppingCartParagraph}>
                                <p>Free for personal and commercial purpose with attribution</p>
                            </div>
                            <div className={css.shoppingCartRating}>
                                <div className={css.stars}>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={blankStar} alt="rating-stars"/>
                                </div>
                                <div className={css.rating}>
                                    <h3>5.5</h3>
                                </div>
                            </div>
                            <div className={css.shoppingCartPrice}>
                                <div className={css.priceTag}>
                                    <h3>18.2$</h3>
                                </div>
                                <div className={css.seeMore}>
                                    <img src={viewMore} alt="drop-down" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x:80 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    className={css.shoppingCart}>
                        <div className={css.shoppingCartImg}>
                            <img src={crocs} alt="cart-img" />
                        </div>
                        <div className={css.shoppingBriefing}>
                            <div className={css.shoppingCartTitle}>
                                <div className={css.shoppingCartTitleHead}>
                                    <h3>Crocs</h3>
                                </div>
                                <div>
                                    <img src={bookmark} alt="badge"/>
                                </div>
                            </div>
                            <div className={css.shoppingCartParagraph}>
                                <p>Free for personal and commercial purpose with attribution</p>
                            </div>
                            <div className={css.shoppingCartRating}>
                                <div className={css.stars}>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={blankStar} alt="rating-stars"/>
                                </div>
                                <div className={css.rating}>
                                    <h3>5.5</h3>
                                </div>
                            </div>
                            <div className={css.shoppingCartPrice}>
                                <div className={css.priceTag}>
                                    <h3>18.2$</h3>
                                </div>
                                <div className={css.seeMore}>
                                    <img src={viewMore} alt="drop-down" />
                                </div>
                            </div>
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
                    className={css.shoppingCart}>
                        <div className={css.shoppingCartImg}>
                            <img src={glasses} alt="cart-img" />
                        </div>
                        <div className={css.shoppingBriefing}>
                            <div className={css.shoppingCartTitle}>
                                <div className={css.shoppingCartTitleHead}>
                                    <h3>Glasses</h3>
                                </div>
                                <div>
                                    <img src={bookmark} alt="badge"/>
                                </div>
                            </div>
                            <div className={css.shoppingCartParagraph}>
                                <p>Free for personal and commercial purpose with attribution</p>
                            </div>
                            <div className={css.shoppingCartRating}>
                                <div className={css.stars}>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={fullStars} alt="rating-stars"/>
                                    <img src={blankStar} alt="rating-stars"/>
                                </div>
                                <div className={css.rating}>
                                    <h3>5.5</h3>
                                </div>
                            </div>
                            <div className={css.shoppingCartPrice}>
                                <div className={css.priceTag}>
                                    <h3>18.2$</h3>
                                </div>
                                <div className={css.seeMore}>
                                    <img src={viewMore} alt="drop-down" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Shopping