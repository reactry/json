import InputComponent from './InputComponent';
import OutputComponent from './OutputComponent';

import React from 'react';



function App () {
	let inputProps = {};
	let outputProps = {};

	return (
		<div className="App">
			<InputComponent {...inputProps} />
			<OutputComponent {...outputProps} />
		</div>
	);
}

export default App;
