import { memo } from 'react';
import { TouchableHighlight as RNTouchableHighlight } from 'react-native';

const TouchableHighlight = props => {
  const {
    children,
    activeOpacity = 0.8,
    style = {},
    m,
    p,
    mx,
    my,
    px,
    py,
    mt,
    mr,
    ml,
    mb,
    pt,
    pb,
    pr,
    pl,
    borderRadius,
    boxShadow,
    w,
    h,
    align,
    justify,
    direction,
    bgColor,
    gap,
    borderWidth,
    borderColor,
    underlayColor = '#F0F0F5',
    position,
    top,
    bottom,
    left,
    right,
    ...rest
  } = props;
  const { shadowColor, shadowOffset, shadowOpacity, shadowRadius, elevation } =
    boxShadow || {};
  return (
    <RNTouchableHighlight
      activeOpacity={activeOpacity}
      underlayColor={underlayColor}
      style={{
        borderRadius,
        shadowColor,
        shadowOffset,
        shadowOpacity,
        shadowRadius,
        elevation,
        padding: p,
        margin: m,
        paddingHorizontal: px,
        paddingVertical: py,
        paddingBottom: pb,
        paddingTop: pt,
        marginHorizontal: mx,
        marginVertical: my,
        marginTop: mt,
        marginBottom: mb,
        paddingLeft: pl,
        paddingRight: pr,
        marginLeft: ml,
        marginRight: mr,
        width: w,
        height: h,
        backgroundColor: bgColor,
        alignItems: align,
        justifyContent: justify,
        flexDirection: direction,
        borderWidth,
        borderColor,
        gap,
        position,
        top,
        bottom,
        left,
        right,
        ...style,
      }}
      {...rest}>
      {children}
    </RNTouchableHighlight>
  );
};
export default memo(TouchableHighlight);
