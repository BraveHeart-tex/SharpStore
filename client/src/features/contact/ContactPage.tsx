import { Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';

export default function ContactPage() {
  const dispatch = useAppDispatch();
  // const {} = useAppSelector();

  return <Typography variant='h2'>Contact page</Typography>;
}
