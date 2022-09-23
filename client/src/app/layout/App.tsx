import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import Header from './Header';
import Catalog from '../../features/catalog/Catalog';
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../../features/about/AboutPage';
import ProductDetails from '../../features/catalog/ProductDetails';
import ContactPage from '../../features/contact/ContactPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ServerError from '../errors/ServerError';
import NotFound from '../errors/NotFound';
import BasketPage from '../../features/basket/BasketPage';
import LoadingComponent from './LoadingComponent';
import { useAppDispatch } from '../store/configureStore';
import { fetchBasketAsync } from '../../features/basket/basketSlice';
import Login from '../../features/account/Login';
import Register from '../../features/account/Register';
import { fetchCurrentUser } from '../../features/account/accountSlice';
import PrivateRoute from './PrivateRoute';
import OrderComponent from '../../features/orders/OrderComponent';
import CheckoutWrapper from '../../features/checkout/CheckoutWrapper';

function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const initApp = useCallback(async () => {
    try {
      await dispatch(fetchCurrentUser());
      await dispatch(fetchBasketAsync());
    } catch (error: any) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    initApp().then(() => setLoading(false));
  }, [initApp]);

  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212',
      },
    },
  });

  if (loading) return <LoadingComponent message='Initializing app...' />;
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer theme='colored' position='bottom-right' hideProgressBar />
      <CssBaseline />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Container>
        <Routes>
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/catalog/:id' element={<ProductDetails />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/server-error' element={<ServerError />} />
          <Route path='*' element={<NotFound />} />
          <Route
            path='/checkout'
            element={
              <PrivateRoute>
                <CheckoutWrapper />
              </PrivateRoute>
            }
          />
          <Route path='/basket' element={<BasketPage />} />
          <Route
            path='/orders'
            element={
              <PrivateRoute>
                <OrderComponent />
              </PrivateRoute>
            }
          />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
