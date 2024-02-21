import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'controls';
import Home from 'modules/home';
import { memo } from 'react';
import { Platform } from 'react-native';
import { getIconTab } from './tab-bar.data';

const TabBar = () => {
  const BottomTab = createBottomTabNavigator();

  const STACK_DATA = [
    {
      component: Home,
      label: 'Home',
      name: 'HomeTab',
    },
    // {
    //   component: Sale,
    //   label: 'Sale',
    //   name: 'SaleTab',
    // },
    // {
    //   component: Dashboard,
    //   label: 'Dashboard',
    //   name: 'DashboardTab',
    // },
    // {
    //   component: Customer,
    //   label: 'Customer',
    //   name: 'CustomerTab',
    // },
    // {
    //   component: Menu,
    //   label: 'Menu',
    //   name: 'MenuTab',
    // },
  ];

  return (
    <BottomTab.Navigator
      initialRouteName="Discovery"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => (
          <Image
            w={24}
            h={24}
            source={getIconTab(route.name, focused, color)}
          />
        ),
        tabBarActiveTintColor: '#E08127',
        tabBarInactiveTintColor: '#382915',
        tabBarStyle: {
          height: Platform.OS === 'android' ? 60 : 90,
          paddingTop: 5,
          overflow: 'hidden',
        },
        headerTitleStyle: { color: '#FFF' },
        tabBarLabelStyle: {
          marginBottom: 8,
          fontSize: 14,
          // fontFamily: 'SVN-Gilroy Medium',
        },
        headerShown: false,
        tabBarShowLabel: true,
      })}>
      {STACK_DATA.map(item => (
        <BottomTab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            headerShown: false,
            tabBarLabel: item.label,
          }}
        />
      ))}
    </BottomTab.Navigator>
  );
};

export default memo(TabBar);
