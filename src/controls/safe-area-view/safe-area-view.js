import { memo } from 'react';
import { SafeAreaView as RNSafeAreaView } from 'react-native';

const SafeAreaView = props => {
  const {
    children,
    flex = 1,
    bgColor = '#F0EEEA',
    p,
    style = {},
    ...rest
  } = props;

  return (
    <RNSafeAreaView
      style={{ backgroundColor: bgColor, flex, padding: p, ...style }}
      {...rest}>
      {children}
    </RNSafeAreaView>
  );
};

export default memo(SafeAreaView);
