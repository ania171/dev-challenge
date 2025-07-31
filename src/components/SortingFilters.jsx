import CustomSelect from './CustomSelect.jsx';

function SortingFilters({
  sortOption,
  setSortOption,
  countryFilter,
  setCountryFilter,
  industryFilter,
  setIndustryFilter,
  uniqueCountries,
  uniqueIndustries,
}) {
  const sortingOptions = [
    { value: 'name_ascending', label: 'Name Ascending' },
    { value: 'name_descending', label: 'Name Descending' },
    { value: 'numberOfEmployees_ascending', label: 'Employees Ascending' },
    { value: 'numberOfEmployees_descending', label: 'Employees Descending' },
  ];

  return (
    <>
      <h3 className="mb-4 text-lg font-bold text-gray-800">Filters & Sorting</h3>

      <CustomSelect
        label="Sort by:"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        options={sortingOptions}
      />

      <CustomSelect
        label="Country:"
        value={countryFilter}
        onChange={(e) => setCountryFilter(e.target.value)}
        options={uniqueCountries}
      />

      <CustomSelect
        label="Industry:"
        value={industryFilter}
        onChange={(e) => setIndustryFilter(e.target.value)}
        options={uniqueIndustries}
      />

      <button
        onClick={() => {
          setSortOption('name_ascending');
          setCountryFilter('All');
          setIndustryFilter('All');
        }}
        className="mt-4 w-full cursor-pointer bg-gray-600 p-2 text-sm text-white hover:bg-gray-700"
      >
        Reset Filters
      </button>
    </>
  );
}

export default SortingFilters;
