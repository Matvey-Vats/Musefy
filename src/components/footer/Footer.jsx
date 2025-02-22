import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className='container'>
				<div className={styles.footerTop}>
					<div className={styles.logo}>
						<h1>
							<Link to='/'>Musefy</Link>
						</h1>
					</div>
					<ul className={styles.footerSocials}>
						<li>
							<a href='#!'>
								<BsInstagram size={25} />
							</a>
						</li>
						<li>
							<a href='#!'>
								<BsFacebook size={25} />
							</a>
						</li>
						<li>
							<a href='#!'>
								<BsTwitter size={25} />
							</a>
						</li>
					</ul>
				</div>
				<div className={styles.footerRow}>
					<ul>
						<li>
							<h3>Navigation</h3>
						</li>
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

					<ul>
						<li>
							<h3>Products</h3>
						</li>
						<li>
							<Link to={`/catalog?categoryId=1`}>Guitar</Link>
						</li>
						<li>
							<Link to={`/catalog?categoryId=5`}>Drums</Link>
						</li>
						<li>
							<Link to={`/catalog?categoryId=2`}>Bass guitars</Link>
						</li>
					</ul>

					<ul>
						<li>
							<h3>Contact Us</h3>
						</li>
						<li>
							<p>Email: support@example.com</p>
						</li>
						<li>
							<p>Phone: +1 (234) 567-89-00</p>
						</li>
						<li>
							<p>Address: 123 Music St, Los Angeles, CA</p>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.footerBottom}>
				<p>&Copy {new Date().getFullYear()}</p>
			</div>
		</footer>
	)
}

export default Footer
