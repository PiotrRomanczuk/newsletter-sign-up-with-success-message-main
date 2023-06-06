import React from 'react';
import classes from './Button.module.css';

interface ButtonProps {
	title: string;
}

const Button: React.FC<ButtonProps> = (props) => {
	return (
		<button className={classes.button} role='button'>
			{props.title}
		</button>
	);
};

export default Button;
