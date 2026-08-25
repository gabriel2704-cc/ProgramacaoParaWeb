import { Navigate } from 'react-router';

const withAuth = (Component) => {
  const AuthRoute = () => {
    const isAuth = Boolean(localStorage.getItem('usuario'));
    return isAuth ? <Component /> : <Navigate to="/login" replace />;
  };

  return AuthRoute;
};

export default withAuth;
