import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';

interface IProps {
  options: any[];
  onChange: (value: any) => void;
  selectedValue: string;
}

function RadioButtonGroup({ options, onChange, selectedValue }: IProps) {
  return (
    <FormControl component='fieldset'>
      <RadioGroup onChange={onChange} value={selectedValue}>
        {options.map(({ value, label }) => (
          <FormControlLabel
            value={value}
            control={<Radio />}
            label={label}
            key={value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtonGroup;
