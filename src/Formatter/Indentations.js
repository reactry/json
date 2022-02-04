


export default function Indentations ({
	settings, currentIndentation, setCurrentIndentation
}) {

	let selectedItemClass = "bg-slate-700 text-white";
	let otherItemClass = "bg-white text-black cursor-pointer hover:bg-slate-700 hover:text-white"

	let indentationItems = settings.indentations.map((v, i) => {
		let itemClass = "text-sm font-bold px-2 py-1 mr-1 duration-300 ";
		itemClass += (i === currentIndentation) ? selectedItemClass : otherItemClass;
		return (
			<div className={itemClass} key={i} onClick={() => setCurrentIndentation(i)}>
				{v.name}
			</div>
		);
	});

	return (
		<div className="flex px-4 py-4">
			{indentationItems}
		</div>
	);
}
