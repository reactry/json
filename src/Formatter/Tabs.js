


export default function Tabs ({
	showOutput, setShowOutput
}) {
	let tabHeadingClass = "px-8 py-4";
	let activeTabClass = tabHeadingClass + " cursor-pointer hover:bg-slate-300";
	let passiveTabClass = tabHeadingClass + " bg-slate-100";

	if (showOutput) {
		return <div className="grow text-lg flex">
			<h1 className={activeTabClass} onClick={() => setShowOutput(!showOutput)}>Input</h1>
			<h1 className={passiveTabClass}>Output</h1>
		</div>
	} else {
		return <div className="grow text-lg flex">
			<h1 className={passiveTabClass}>Input</h1>
			<h1 className={activeTabClass} onClick={() => setShowOutput(!showOutput)}>Output</h1>
		</div>
	}
}
