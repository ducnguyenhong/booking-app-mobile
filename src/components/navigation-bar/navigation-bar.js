import { useNavigation } from '@react-navigation/native';
// import IconBack from 'assets/images/arrow-back.png';
import { Image, Text, TouchableOpacity, View } from 'controls';
import { memo } from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import IconSearch from './images/search.png';

const NavigationBar = props => {
  const {
    title = '',
    NavigationCenter,
    NavigationLeft,
    NavigationRight,
    onPressMore,
    onPressSearch,
    onPressGoBack,
    showBack = true,
    showNoti,
    showSearch,
    bgColor = '#F0EEEA',
    goHome,
  } = props;

  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const goBack = () => {
    if (goHome) {
      navigation.navigate('HomeTab');
      return;
    }
    navigation.goBack();
  };

  return (
    <>
      <StatusBar backgroundColor={bgColor} barStyle="dark-content" />
      <View direction="row" h={50} bgColor={bgColor} w={width}>
        <View direction="row" flex={1} align="center">
          <View justify="center">
            {showBack && (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goBack}
                style={{ paddingLeft: 15, paddingRight: 5 }}>
                {/* <Image source={IconBack} w={24} h={24} /> */}
              </TouchableOpacity>
            )}
          </View>
          <View align="center" pl={showBack ? 0 : 16}>
            {!!NavigationCenter && NavigationCenter}
            {!!title && (
              <Text fontSize={18} fontFamily="Roboto-Bold" color="#312412">
                {title}
              </Text>
            )}
          </View>
        </View>
        <View justify="flex-end" align="center" direction="row" pr={16}>
          {!!NavigationRight && NavigationRight}
          {!!showSearch && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                if (onPressSearch) {
                  onPressSearch();
                  return;
                }
                navigation.navigate('Search');
              }}>
              <Image source={IconSearch} w={24} h={24} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};

export default memo(NavigationBar);
