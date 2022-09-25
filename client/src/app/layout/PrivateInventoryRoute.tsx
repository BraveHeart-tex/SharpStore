import { useAppSelector } from '../store/configureStore';
import { Navigate } from 'react-router-dom';

export default function PrivateInventoryRoute({ children }: any) {
  const roles = ['Admin'];
  const { user } = useAppSelector((state) => state.account);

  if (!user) return <Navigate to={'/login'} />;

  if (roles && !roles?.some((r: any) => user.roles?.includes(r))) {
    return <Navigate to='/catalog' />;
  }

  return children;
}
