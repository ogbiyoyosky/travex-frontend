import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAuthToken, storeCurrentRoute } from 'utils/auth';

const ProtectedRoute = ({ children }) => {
  const token = getAuthToken();
  const location = useLocation();
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  if (pageLoaded) {
    if (!token) {
      storeCurrentRoute(location.pathname); //save current route
      window.location.replace('/login');

      return;
    } else {
      return children;
    }
  }
};

export default ProtectedRoute;
