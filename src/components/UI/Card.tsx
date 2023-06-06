import React, { ReactNode } from 'react';
import classes from './Card.module.css';

interface CardProps {
	children: ReactNode;
	width?: string;
	height?: string;
}

const Card = (props: CardProps) => {
	const { width, height } = props;
	const cardStyle = {
		width,
		height,
	};

	return (
		<div className={classes.card} style={cardStyle}>
			{props.children}
		</div>
	);
};

export default Card;
