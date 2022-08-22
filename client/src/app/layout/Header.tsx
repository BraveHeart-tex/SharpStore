import { AppBar, Switch, Toolbar, Typography } from '@mui/material';

interface IProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export default function Header({ darkMode, setDarkMode }: IProps) {
  return (
    <AppBar position='static' sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant='h6'>SharpStore</Typography>
        <Typography sx={{ ml: 4 }}>{darkMode ? '🌞' : '🌕'} </Typography>
        <Switch onClick={() => setDarkMode(!darkMode)} />
      </Toolbar>
    </AppBar>
  );
}
