import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../../../../assets/img/hero-img.jpg'
import styles from './HeroSection.module.scss'

const HeroSection = () => {
	return (
		<section className={styles.section}>
			<div className={styles.content}>
				<h2>Welcome to Musefy – Your Ultimate Music Store!</h2>
				<p>
					Discover a world of musical instruments and accessories tailored for
					beginners and professionals alike. Whether you're looking for a new
					guitar, drum set, or keyboard, we have everything to fuel your passion
					for music. Start your journey with Musefy today!
				</p>
				<Link className={styles.link} to='catalog'>
					Catalog <span>&rarr;</span>
				</Link>
			</div>
			<img src={heroImg} alt='hero' style={{}} />
		</section>
	)
}

export default HeroSection
