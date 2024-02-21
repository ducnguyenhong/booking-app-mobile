import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Error, LoadingStart } from 'components';
import { memo } from 'react';
import TabBar from '../tab-bar';
import { PRIVATE_ROUTE } from './route.data';
import { useQueryUserInfo } from './route.query';

const PrivateRoute = () => {
  const Stack = createNativeStackNavigator();

  const { isLoading: loadingUserInfo, error } = useQueryUserInfo();

  if (loadingUserInfo) {
    return <LoadingStart />;
  }

  if (error) {
    return (
      <Error message={`Lấy thông tin cá nhân thất bại. ${error.message}`} />
    );
  }

  return (
    <Stack.Navigator
      initialRouteName="TabBar"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabBar" component={TabBar} />

      {PRIVATE_ROUTE.map(item => (
        <Stack.Screen
          key={item.name}
          name={item.name}
          component={item.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default memo(PrivateRoute);
