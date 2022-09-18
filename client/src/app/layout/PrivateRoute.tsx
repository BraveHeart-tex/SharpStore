import { useAppSelector } from '../store/configureStore';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }: any) {
  const { user } = useAppSelector((state) => state.account);
  return user ? children : <Navigate to={'/login'} />;
}
