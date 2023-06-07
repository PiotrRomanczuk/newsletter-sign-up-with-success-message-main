import React, { useState } from 'react';
import './App.css';
import Content from './components/UI/Content';
import DesktopImg from './assets/images/illustration-sign-up-desktop.svg';
import Button from './components/UI/Button';
import Input from './components/UI/Input';
import FormValidations from './components/logic/FormValidations';

function App() {
	const [email, setEmail] = useState('');

	const validationHandler = () => {
		// Use the email value for further validation or processing if needed
		console.log('Email:', email);
	};

	return (
		<div className='App'>
			<div className='content-container'>
				<Content />
				<Input
					placeholder={'example@gmail.com'}
					value={email}
					onChange={(e) => {
						e.preventDefault();
						setEmail(e.target.value);
						console.log(e.target.value);
					}}
				/>
				<Button
					title={'Login!'}
					onClick={() => {
						FormValidations(email);
						console.log(FormValidations(email));
					}}
				/>
			</div>
			<img src={DesktopImg} alt='Desktop' />
		</div>
	);
}

export default App;
