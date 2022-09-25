import { ShoppingCart } from '@mui/icons-material';
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { useAppSelector } from '../store/configureStore';
import SignedInMenu from './SignedInMenu';

interface IProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const midLinks = [
  { title: 'catalog', path: '/catalog' },
  { title: 'about', path: '/about' },
  { title: 'contact', path: '/contact' },
];

const rightLinks = [
  { title: 'login', path: '/login' },
  { title: 'register', path: '/register' },
];

const navStyles = {
  color: 'inherit',
  textDecoration: 'none',
  typography: 'h6',
  '&:hover': { color: 'grey.500' },
  '&.active': { color: 'text.secondary' },
};

export default function Header({ darkMode, setDarkMode }: IProps) {
  const { basket } = useAppSelector((state) => state.basket);
  const { user } = useAppSelector((state) => state.account);
  const basketCount = basket?.items.reduce(
    (count, item) => count + item.quantity,
    0
  );
  return (
    <AppBar position='static' sx={{ mb: 4, width: '100%' }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box display='flex' alignItems='center'>
          <Typography
            variant='h6'
            component={NavLink}
            to='/catalog'
            sx={navStyles}
          >
            SharpStore
          </Typography>
          <Typography sx={{ ml: 4 }}>{darkMode ? '🌞' : '🌕'}</Typography>
          <Switch onClick={() => setDarkMode(!darkMode)} />
        </Box>

        {/* element 2 start */}
        <List sx={{ display: 'flex' }}>
          {midLinks.map(({ title, path }) => (
            <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
              {title.toUpperCase()}
            </ListItem>
          ))}
          {user && user.roles?.includes('Admin') && (
            <ListItem component={NavLink} to='/inventory' sx={navStyles}>
              Inventory
            </ListItem>
          )}
        </List>
        {/* element 2 end */}

        <Box display='flex' alignItems='center'>
          {/* element 3 start */}
          <IconButton
            component={Link}
            to='/basket'
            size='large'
            sx={{ color: 'inherit' }}
          >
            <Badge badgeContent={basketCount} color='secondary'>
              <ShoppingCart />
            </Badge>
          </IconButton>
          {user ? (
            <SignedInMenu />
          ) : (
            <List sx={{ display: 'flex' }}>
              {rightLinks.map(({ title, path }) => (
                <ListItem
                  component={NavLink}
                  to={path}
                  key={path}
                  sx={navStyles}
                >
                  {title.toUpperCase()}
                </ListItem>
              ))}
            </List>
          )}

          {/* element 3 end */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
