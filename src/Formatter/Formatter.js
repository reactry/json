


export default function Formatter ({
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
		<div className="Formatter px-4 py-16 bg-slate-300">
			<div className="max-w-4xl mx-auto shadow">
				<div className="bg-slate-200 px-6 py-4 flex">
					<div className="grow">
						<h1 className="text-xl">Input</h1>
					</div>
					<div className="flex">
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
