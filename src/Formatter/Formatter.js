import React from 'react';

import Tabs from './Tabs';
import Indentations from './Indentations';



export default function Formatter ({
	settings
}) {

	let [showOutput, setShowOutput] = React.useState(false);
	let [currentIndentation, setCurrentIndentation] = React.useState(0);

	let tabsProps = {
		showOutput, setShowOutput
	};
	let indentationsProps = {
		settings, currentIndentation, setCurrentIndentation
	};

	return (
		<div className="Formatter px-4 py-16 bg-slate-300">
			<div className="max-w-4xl mx-auto shadow">
				<div className="bg-slate-200 flex">
					<Tabs {...tabsProps} />
					<Indentations {...indentationsProps} />
				</div>
				<div className="bg-slate-100 px-4 py-4">
					<textarea name="" id="" cols="30" rows="10" className="w-full border-2 border-slate-500"></textarea>
				</div>
			</div>
		</div>
	);
}
