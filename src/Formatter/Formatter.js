import React from 'react';



export default function Formatter ({
	settings
}) {

	let [showOutput, setShowOutput] = React.useState(false);

	let indentationItems = settings.indentations.map((v, i) => {
		return (
			<div className="bg-white text-black text-sm cursor-pointer font-bold px-2 py-1 mr-1 duration-300 hover:bg-slate-700 hover:text-white">
				{v.name}
			</div>
		);
	});

	let tabHeadingClass = "px-8 py-4";
	let activeTabClass = tabHeadingClass + " cursor-pointer hover:bg-slate-300";
	let passiveTabClass = tabHeadingClass + " bg-slate-100";

	let tabs = null;
	if (showOutput) {
		tabs = <div className="grow text-lg flex">
			<h1 className={activeTabClass} onClick={() => setShowOutput(!showOutput)}>Input</h1>
			<h1 className={passiveTabClass}>Output</h1>
		</div>
	} else {
		tabs = <div className="grow text-lg flex">
			<h1 className={passiveTabClass}>Input</h1>
			<h1 className={activeTabClass} onClick={() => setShowOutput(!showOutput)}>Output</h1>
		</div>
	}

	return (
		<div className="Formatter px-4 py-16 bg-slate-300">
			<div className="max-w-4xl mx-auto shadow">
				<div className="bg-slate-200 flex">
					{tabs}
					<div className="flex px-4 py-4">
						{indentationItems}
					</div>
				</div>
				<div className="bg-slate-100 px-4 py-4">
					<textarea name="" id="" cols="30" rows="10" className="w-full border-2 border-slate-500"></textarea>
				</div>
			</div>
		</div>
	);
}
