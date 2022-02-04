import Formatter from './Formatter';
import Visualizer from './Visualizer';
import Footer from './Footer';

import React from 'react';



function App () {
	let formatterProps = {};
	let visualizerProps = {};

	return (
		<div className="App">
			<Formatter {...formatterProps} />
			<Visualizer {...visualizerProps} />
			<Footer />
		</div>
	);
}

export default App;
