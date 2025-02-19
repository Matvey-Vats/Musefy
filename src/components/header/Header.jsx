import React from 'react'
import { BiCart } from 'react-icons/bi'
import { shallowEqual, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
	const products = useSelector(state => state.cart.products, shallowEqual)
	const totalCount = products.reduce((sum, item) => sum + item.count, 0)

	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.headerRow}>
					<div className={styles.logo}>
						<h1>
							<Link to='/'>Musefy</Link>
						</h1>
					</div>
					<nav className={styles.headerMenu}>
						<ul>
							<li>
								<Link to='catalog'>Catalog</Link>
							</li>
							<li>
								<Link to='about'>About Us</Link>
							</li>
							<li>
								<Link to='contact'>Contact Us</Link>
							</li>
						</ul>
					</nav>
					<Link to='cart' className={styles.cart}>
						<BiCart className={styles.cartIcon} color='#242424' size={40} />
						{totalCount > 0 && <i>{totalCount}</i>}
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
