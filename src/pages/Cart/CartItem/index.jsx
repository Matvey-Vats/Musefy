import React from 'react'
import { BiPlusMedical } from 'react-icons/bi'
import { FaMinus } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import {
	addProduct,
	minusProduct,
	removeProduct,
} from '../../../redux/slices/cartSlice'
import styles from './CartItem.module.scss'

const CartItem = ({ id, image, name, price, brand, categoryId, count }) => {
	const dispatch = useDispatch()

	const handleAddProductToCart = () => {
		dispatch(
			addProduct({
				id,
				name,
				categoryId,
				image,
				price,
				brand,
				count,
			})
		)
	}

	const handleRemoveItem = id => {
		dispatch(removeProduct(id))
	}

	const handleMinusProductFromCart = () => {
		dispatch(minusProduct(id))
	}
	return (
		<div className={styles.cartItem}>
			<div className={styles.cartItemTop}>
				<img src={image} alt={name} />
				<button
					onClick={() => handleRemoveItem(id)}
					style={{ display: 'inline-flex' }}
				>
					<MdDeleteForever size={25} className={styles.removeItem} />
				</button>
			</div>
			<div className={styles.cartItemContent}>
				<h4 className={styles.itemTitle}>{name}</h4>
				<p className={styles.itemPrice}>{price}$</p>
				<div className={styles.itemCount}>
					<button
						disabled={count === 1}
						onClick={handleMinusProductFromCart}
						className={styles.minusBtn}
					>
						<FaMinus size={20} />
					</button>
					<span>{count}</span>
					<button onClick={handleAddProductToCart} className={styles.plusBtn}>
						<BiPlusMedical size={20} />
					</button>
				</div>
			</div>
		</div>
	)
}

export default CartItem
