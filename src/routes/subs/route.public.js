import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { memo, useMemo } from 'react';

const PublicRoute = () => {
  const Stack = createNativeStackNavigator();

  const ROUTE_DATA = useMemo(
    () => [
      // {
      //   name: 'Onboarding',
      //   component: Onboarding,
      // },
    ],
    [],
  );

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}>
      {ROUTE_DATA.map(item => (
        <Stack.Screen
          key={item.name}
          name={item.name}
          component={item.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default memo(PublicRoute);
