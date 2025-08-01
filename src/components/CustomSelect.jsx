import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function CustomSelect({ label, value, onChange, options }) {
  const selectId = label.toLowerCase().replace(/[^a-z0-9]/g, '');

  return (
    <div className="mb-5">
      <FormControl fullWidth className="mb-4" variant="standard">
        <InputLabel id={`select-${selectId}`} htmlFor={selectId}>
          {label}
        </InputLabel>
        <Select
          labelId={`select-${selectId}`}
          id={selectId}
          name={selectId}
          value={value}
          label={label}
          onChange={onChange}
          sx={{ fontSize: 14 }}
        >
          {options.map((option) =>
            typeof option === 'object' ? (
              <MenuItem key={option.value} value={option.value} sx={{ fontSize: 14 }}>
                {option.label}
              </MenuItem>
            ) : (
              <MenuItem key={option} value={option} sx={{ fontSize: 14 }}>
                {option}
              </MenuItem>
            )
          )}
        </Select>
      </FormControl>
    </div>
  );
}

export default CustomSelect;
