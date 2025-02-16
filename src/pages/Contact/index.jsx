import React from 'react'
import styles from './Contact.module.scss'

const Contact = () => {
	return (
		<div className={styles.block}>
			<div className='container'>
				<h3 className={styles.title}>Contact Us</h3>
				<p>Email: support@example.com</p>
				<p>Phone: +1 (234) 567-89-00</p>
				<p>Address: 123 Music St, Los Angeles, CA</p>
				<div>
					<h2>Send us a message</h2>
					<form>
						<input type='text' placeholder='Your Name' required />
						<input type='email' placeholder='Your Email' required />
						<textarea placeholder='Your Message' required />
						<button className={styles.button} type='submit'>
							Send
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Contact
