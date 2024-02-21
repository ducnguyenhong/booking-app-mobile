import { memo } from 'react';
import { View as RNView } from 'react-native';

const View = props => {
  const {
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
    children,
    bgColor,
    borderRadius,
    borderWidth,
    borderColor,
    boxShadow,
    align,
    justify,
    direction,
    flex,
    h,
    w,
    gap,
    columnGap,
    rowGap,
    borderTopWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderRightWidth,
    overflow = 'hidden',
    position,
    top,
    bottom,
    left,
    right,
    flexWrap = 'no-wrap',
    minH,
    borderTopLeftRadius,
    borderTopRightRadius,
    style,
    ...rest
  } = props;

  const { shadowColor, shadowOffset, shadowOpacity, shadowRadius, elevation } =
    boxShadow || {};

  return (
    <RNView
      style={{
        height: h,
        width: w,
        backgroundColor: bgColor,
        borderRadius,
        borderWidth,
        borderColor,
        shadowColor,
        shadowOffset,
        shadowOpacity,
        shadowRadius,
        elevation,
        alignItems: align,
        justifyContent: justify,
        flexDirection: direction,
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
        gap,
        flex,
        borderTopWidth,
        borderBottomWidth,
        borderLeftWidth,
        borderRightWidth,
        overflow: overflow,
        columnGap,
        rowGap,
        position,
        top,
        bottom,
        left,
        right,
        flexWrap,
        minHeight: minH,
        borderTopLeftRadius,
        borderTopRightRadius,
        ...style,
      }}
      {...rest}>
      {children}
    </RNView>
  );
};

export default memo(View);
