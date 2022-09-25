import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material';
import { useController, UseControllerProps } from 'react-hook-form';

interface IProps extends UseControllerProps {
  label: string;
  items: string[];
}

export default function AppSelectList(props: IProps) {
  const { fieldState, field } = useController({ ...props, defaultValue: '' });
  return (
    <FormControl fullWidth error={!!fieldState.error}>
      <InputLabel id='demo-simple-select-label'>Age</InputLabel>
      <Select value={field.value} label={props.label} onChange={field.onChange}>
        {props.items.map((item, index) => (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>
        {fieldState.error ? fieldState.error.message : null}
      </FormHelperText>
    </FormControl>
  );
}
