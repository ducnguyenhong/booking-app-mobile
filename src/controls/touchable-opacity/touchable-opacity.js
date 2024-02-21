import { memo } from 'react';
import { TouchableOpacity as RNTouchableOpacity } from 'react-native';

const TouchableOpacity = props => {
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
    borderWidth,
    borderTopWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderRightWidth,
    borderColor,
    w,
    h,
    align,
    justify,
    direction,
    bgColor,
    gap,
    disabled,
    opacity = 1,
    borderStyle,
    flexWrap,
    position,
    flex,
    top,
    bottom,
    left,
    right,
    ...rest
  } = props;
  const { shadowColor, shadowOffset, shadowOpacity, shadowRadius, elevation } =
    boxShadow || {};

  return (
    <RNTouchableOpacity
      disabled={disabled}
      activeOpacity={activeOpacity}
      style={{
        borderRadius,
        borderWidth,
        borderTopWidth,
        borderBottomWidth,
        borderRightWidth,
        borderLeftWidth,
        borderColor,
        borderStyle,
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
        gap,
        opacity,
        flexWrap,
        flex,
        position,
        top,
        bottom,
        left,
        right,
        ...style,
      }}
      {...rest}>
      {children}
    </RNTouchableOpacity>
  );
};

export default memo(TouchableOpacity);
