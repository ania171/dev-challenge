function Select({ label, value, onChange, options }) {
	const selectId = label.toLowerCase().replace(/[^a-z0-9]/g, '-');

	return (
		<div className="mb-5">
			<label className="mb-2 block text-sm font-bold text-gray-700" htmlFor={selectId}>
				{label}
			</label>
			<select
				value={value}
				name={selectId}
				onChange={onChange}
				className="w-full rounded-md border border-gray-300 bg-white p-2 text-sm"
			>
				{options.map((option) =>
					typeof option === 'object' ? (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					) : (
						<option key={option} value={option}>
							{option}
						</option>
					)
				)}
			</select>
		</div>
	);
}

export default Select;
