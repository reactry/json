


export default function Indentations ({
	settings
}) {
	let indentationItems = settings.indentations.map((v, i) => {
		return (
			<div className="bg-white text-black text-sm cursor-pointer font-bold px-2 py-1 mr-1 duration-300 hover:bg-slate-700 hover:text-white">
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
