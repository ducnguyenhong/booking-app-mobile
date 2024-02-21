import ImgNoData from 'assets/images/no-data.png';
import { NavigationBar } from 'components';
import { Image, SafeAreaView, Text, View } from 'controls';

export const NoData = props => {
  const {
    message = 'Vui lòng thử lại sau!',
    bgColor = '#F4F3F1',
    navBarBgColor,
    isScreen = true,
  } = props;

  const emptyComponent = (
    <View
      flex={1}
      align="center"
      justify={isScreen ? 'center' : ''}
      pt={isScreen ? 0 : 64}
      gap={30}>
      <View gap={8}>
        <Image source={ImgNoData} w={120} h={120} />
        <Text fontFamily="Roboto-Bold" fontSize={18} color="#615038">
          Chưa có dữ liệu
        </Text>
        <Text fontSize={14} color="#615038" textAlign="center" lineHeight={22}>
          {message}
        </Text>
      </View>
    </View>
  );

  if (!isScreen) {
    return emptyComponent;
  }

  return (
    <SafeAreaView bgColor={bgColor}>
      <NavigationBar bgColor={navBarBgColor} />
      {emptyComponent}
    </SafeAreaView>
  );
};
