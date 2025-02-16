import React from 'react'
import styles from './About.module.scss'

const About = () => {
	return (
		<div className={styles.block}>
			<div className='container'>
				<h3 className={styles.mainTitle}>About Us</h3>
				<p>
					Welcome to MusicShop! We offer the best guitars, microphones, and
					music accessories from top brands like Fender, Yamaha, and Shure.
				</p>
				<p>
					Our mission is to help musicians find the perfect instrument at the
					best price. We have been working since 2010 and have thousands of
					happy customers.
				</p>
				<h2 className={styles.secondTitle}>Why choose us?</h2>
				<ul>
					<li>✅ Wide range of musical instruments</li>
					<li>✅ Fast and secure shipping</li>
					<li>✅ Expert customer support</li>
				</ul>
			</div>
		</div>
	)
}

export default About
