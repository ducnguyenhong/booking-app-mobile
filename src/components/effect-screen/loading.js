import Logo from 'assets/images/logo.png';
import { NavigationBar } from 'components';
import { Image, SafeAreaView, Text, View } from 'controls';
import { ActivityIndicator } from 'react-native';

export const Loading = props => {
  const {
    navBarBgColor,
    bgColor = '#F4F3F1',
    showNavigationBar = true,
  } = props;
  return (
    <SafeAreaView bgColor={bgColor}>
      {showNavigationBar && <NavigationBar bgColor={navBarBgColor} />}
      <View flex={1} align="center" justify="center" gap={30}>
        <Text
          textAlign="center"
          fontFamily="Roboto-Medium"
          fontSize={18}
          color="#615038">
          Đang tải dữ liệu
        </Text>
        <ActivityIndicator color="#8FA63C" size={40} />
      </View>
    </SafeAreaView>
  );
};

export const LoadingStart = () => {
  return (
    <View flex={1} align="center" justify="center" gap={30}>
      <Image source={Logo} w={114} h={40} />
      <ActivityIndicator color="#8FA63C" size={40} />
    </View>
  );
};
