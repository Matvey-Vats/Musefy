import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearProducts } from '../../redux/slices/cartSlice'
import styles from './Cart.module.scss'
import CartEmpty from './CartEmpty'
import CartItem from './CartItem'

const Cart = () => {
	const dispatch = useDispatch()
	const { totalPrice, products } = useSelector(state => state.cart)
	const totalCount = products.reduce((sum, item) => sum + item.count, 0)

	React.useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	if (!totalCount) {
		return <CartEmpty />
	}
	return (
		<div className={styles.cartBlock}>
			<div className='container'>
				<div className={styles.wrapper}>
					<div className={styles.cartRow}>
						{products.map(obj => (
							<CartItem key={obj.id} {...obj} />
						))}
					</div>
					<div className={styles.sidebar}>
						<h3>{totalPrice}$</h3>
						<p>Count: {totalCount}</p>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<button
								onClick={() => dispatch(clearProducts())}
								style={{
									backgroundColor: 'transparent',
									color: '#242424',
									border: '1px solid #242424',
								}}
							>
								Clear cart
							</button>
							<button>Buy now</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart
