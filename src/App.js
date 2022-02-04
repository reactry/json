import Formatter from './Formatter';
import Visualizer from './Visualizer';
import Footer from './Footer';

import React from 'react';

import settings from './settings.json';



function App () {
	let formatterProps = {settings};
	let visualizerProps = {settings};

	return (
		<div className="App">
			<Formatter {...formatterProps} />
			<Visualizer {...visualizerProps} />
			<Footer />
		</div>
	);
}

export default App;
