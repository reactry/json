import InputComponent from './InputComponent';
import OutputComponent from './OutputComponent';
import Footer from './Footer';

import React from 'react';



function App () {
	let inputProps = {};
	let outputProps = {};

	return (
		<div className="App">
			<InputComponent {...inputProps} />
			<OutputComponent {...outputProps} />
			<Footer />
		</div>
	);
}

export default App;
