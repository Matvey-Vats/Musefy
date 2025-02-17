import React from 'react'
import { BiPlusMedical } from 'react-icons/bi'
import { FaMinus } from 'react-icons/fa'
import styles from './Cart.module.scss'
import cartImg from '/guitar.jpg'

const Cart = () => {
	return (
		<div className={styles.cartBlock}>
			<div className='container'>
				<div className={styles.wrapper}>
					<div className={styles.cartRow}>
						<div className={styles.cartItem}>
							<img src={cartImg} alt='' />
							<div className={styles.cartItemContent}>
								<h4 className={styles.itemTitle}>Fender</h4>
								<p className={styles.itemPrice}>400$</p>
								<div className={styles.itemCount}>
									<button className={styles.minusBtn}>
										<FaMinus size={20} />
									</button>
									<span>0</span>
									<button className={styles.plusBtn}>
										<BiPlusMedical size={20} />
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.sidebar}>
						<h3>TOTAL PRICE</h3>
						<p>TOTAL COUNT</p>
						<button>BUY NOW</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart
