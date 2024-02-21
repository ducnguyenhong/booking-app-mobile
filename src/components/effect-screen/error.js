// import ImgError from 'assets/images/error.png';
import { NavigationBar } from 'components';
import { SafeAreaView, Text, View } from 'controls';

export const Error = props => {
  const {
    message = 'Vui lòng thử lại sau!',
    navBarBgColor,
    bgColor = '#F4F3F1',
  } = props;
  return (
    <SafeAreaView bgColor={bgColor}>
      <NavigationBar bgColor={navBarBgColor} />
      <View
        flex={1}
        align="center"
        justify="center"
        gap={30}
        bgColor={bgColor}
        px={20}>
        {/* <Image source={ImgError} w={120} h={120} /> */}
        <Text fontFamily="Roboto-Bold" fontSize={18} color="#615038">
          Thao tác chưa được xử lý
        </Text>
        <Text fontSize={15} color="#615038" textAlign="center" lineHeight={22}>
          {message}
        </Text>
      </View>
    </SafeAreaView>
  );
};
