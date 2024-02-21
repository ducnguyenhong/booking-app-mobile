import { NavigationContainer } from '@react-navigation/native';
import { useRecoilValue } from 'recoil';
import { tokenState } from 'states/recoil';
import PrivateRoute from './subs/route.private';
import PublicRoute from './subs/route.public';

const AppRoute = () => {
  const token = useRecoilValue(tokenState);

  return (
    <NavigationContainer>
      {token ? <PrivateRoute /> : <PublicRoute />}
    </NavigationContainer>
  );
};

export default AppRoute;
