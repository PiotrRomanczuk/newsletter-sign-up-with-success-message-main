import React from 'react';
import classes from './Input.module.css'; // Assuming a CSS module is imported for styling

interface InputProps {
	interface: string;
}

const Input: React.FC<InputProps> = (props) => {
	return (
		<div>
			<div className={classes.email}>Email Address</div>
			{/* <div></div> */}
			<input
				className={classes.inpt}
				placeholder={props.interface} // Using props.interface as the placeholder text
			/>
		</div>
	);
};

export default Input;
