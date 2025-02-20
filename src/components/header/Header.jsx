import clsx from 'clsx'
import React from 'react'
import { BiCart, BiMenu } from 'react-icons/bi'
import { IoClose } from 'react-icons/io5'
import { shallowEqual, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
	const [open, setOpen] = React.useState(false)
	const products = useSelector(state => state.cart.products, shallowEqual)
	const totalCount = products.reduce((sum, item) => sum + item.count, 0)
	const menuRef = React.useRef(null)

	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.headerRow}>
					<div className={styles.logo}>
						<h1>
							<Link to='/'>Musefy</Link>
						</h1>
					</div>
					<nav
						ref={menuRef}
						className={clsx(styles.headerMenu, { [styles.menuOpen]: open })}
					>
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
					<div className={styles.actions}>
						<button
							onClick={() => setOpen(!open)}
							className={clsx(styles.menuBurger, {
								[styles.menuBtnOpen]: open,
							})}
						>
							{open ? <IoClose size={40} /> : <BiMenu size={40} />}
						</button>
						<Link to='cart' className={styles.cart}>
							<BiCart className={styles.cartIcon} color='#242424' size={40} />
							{totalCount > 0 && <i>{totalCount}</i>}
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
