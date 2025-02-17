import React from 'react'
import { Link } from 'react-router-dom'
import emptyCart from '../../../assets/img/empty-cart.png'
import styles from './CartEmpty.module.scss'

const CartEmpty = () => {
	return (
		<div className={styles.block}>
			<div className='container'>
				<div className={styles.content}>
					<h1 className={styles.title}>Cart is empty</h1>
					<img src={emptyCart} alt='' />
					<Link to='/catalog'>Catalog</Link>
				</div>
			</div>
		</div>
	)
}

export default CartEmpty
