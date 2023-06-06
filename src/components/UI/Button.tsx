import React, { MouseEventHandler } from 'react';
import classes from './Button.module.css';

interface ButtonProps {
	title: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = (props) => {
	return (
		<button className={classes.button} role='button' onClick={props.onClick}>
			{props.title}
		</button>
	);
};

export default Button;
