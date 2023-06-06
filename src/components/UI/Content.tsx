import React from 'react';
import classes from './Content.module.css';

const Content = () => {
	return (
		<div className={classes.content}>
			<h1>Stay updated!</h1>
			<p>Join 60,000+ product managers receiving monthly updates on:</p>
			<div>
				<ul className={classes.listings}>
					<li>Product discovery and building what matters</li>
					<li>Measuring to ensure updates are a success</li>
					<li>And much more!</li>
				</ul>
			</div>
			{/* <p>Email address email@company.com</p>
			<p>Subscribe to monthly newsletter</p>
			<p>Thanks for subscribing!</p>
			<p>
				A confirmation email has been sent to ash@loremcompany.com. Please open
				it and click the button inside to confirm your subscription.
			</p> */}
		</div>
	);
};

export default Content;
