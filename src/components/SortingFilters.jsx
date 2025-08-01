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
    { value: 'name_ascending', label: 'Name ascending' },
    { value: 'name_descending', label: 'Name descending' },
    { value: 'numberOfEmployees_ascending', label: 'Number of employees ascending' },
    { value: 'numberOfEmployees_descending', label: 'Number of employees descending' },
  ];

  return (
    <>
      <h3 className="mb-4 text-lg font-bold text-gray-800">Filters & Sorting</h3>

      <CustomSelect
        label="Country"
        value={countryFilter}
        onChange={(e) => setCountryFilter(e.target.value)}
        options={uniqueCountries}
      />

      <CustomSelect
        label="Industry"
        value={industryFilter}
        onChange={(e) => setIndustryFilter(e.target.value)}
        options={uniqueIndustries}
      />

      <CustomSelect
        label="Sort by"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        options={sortingOptions}
      />

      <button
        onClick={() => {
          setSortOption('name_ascending');
          setCountryFilter('All');
          setIndustryFilter('All');
        }}
        className="mt-4 w-full cursor-pointer bg-gray-600 p-2 text-sm text-white hover:bg-gray-700"
      >
        Reset filters
      </button>
    </>
  );
}

export default SortingFilters;
