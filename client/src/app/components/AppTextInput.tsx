import { TextField } from '@mui/material';
import { useController, UseControllerProps } from 'react-hook-form';

interface IProps extends UseControllerProps {
  label: string;
  multiline?: boolean;
  rows?: number;
  type?: string;
}

export default function AppTextInput(props: IProps) {
  const { fieldState, field } = useController({ ...props, defaultValue: '' });
  return (
    <TextField
      {...props}
      {...field}
      fullWidth
      multiline={props.multiline}
      rows={props.rows}
      type={props.type}
      variant='outlined'
      error={!!fieldState.error}
      helperText={fieldState?.error?.message}
    />
  );
}
