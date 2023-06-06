import './App.css';
// import Card from './components/UI/Card';
import Content from './components/UI/Content';
import DesktopImg from './assets/images/illustration-sign-up-desktop.svg';
import Button from './components/UI/Button';
import Input from './components/UI/Input';

function App() {
	return (
		<div className='App'>
			<div className='content-container'>
				<Content />
				<Input placeholder={'Email'} />
				<Button title={'Login!'} />
			</div>
			<img src={DesktopImg} alt='Desktop' />
		</div>
	);
}

export default App;
