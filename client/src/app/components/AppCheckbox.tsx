import { Checkbox, FormControlLabel } from '@mui/material';
import { useController, UseControllerProps } from 'react-hook-form';

interface IProps extends UseControllerProps {
  label: string;
  disabled: boolean;
}

export default function AppCheckbox(props: IProps) {
  const { field } = useController({ ...props, defaultValue: false });

  return (
    <FormControlLabel
      control={
        <Checkbox
          {...field}
          checked={field.value}
          color='secondary'
          disabled={props.disabled}
        />
      }
      label={props.label}
    />
  );
}
