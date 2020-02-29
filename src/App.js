import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {

	render() {
		return (
			<React.Fragment>
				<div className="page-container">
					<Header />
					<Body />
					<Footer />
				</div>
			</React.Fragment>
		);
	}

}

export default App;
