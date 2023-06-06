import React from 'react';
import classes from './Input.module.css'; // Assuming a CSS module is imported for styling

type InputProps = {
	placeholder: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = (props) => {
	return (
		<div>
			<div className={classes.email}>Email Address</div>
			{/* <div></div> */}
			<input
				className={classes.inpt}
				placeholder={props.placeholder} // Using props.interface as the placeholder text
			/>
		</div>
	);
};

export default Input;
