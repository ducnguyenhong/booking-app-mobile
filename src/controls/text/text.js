import { memo, useMemo } from 'react';
import { Text } from 'react-native';

const TextComponent = props => {
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
    bgColor,
    borderRadius,
    boxShadow,
    children,
    fontSize = 14,
    fontFamily = 'Roboto-Regular',
    color = '#382915',
    w,
    h,
    textAlign,
    style,
    textDecorationLine,
    lineHeight,
    textTransform,
    flex,
    borderColor,
    fontStyle,
    ...rest
  } = props;

  const primaryStyle = useMemo(() => {
    if (Array.isArray(style) && !!style.length) {
      return style.reduce((prev, curr) => ({ ...prev, ...curr }));
    }
    return style;
  }, [style]);

  const { shadowColor, shadowOffset, shadowOpacity, shadowRadius, elevation } =
    boxShadow || {};

  const defaultStyle = {
    fontFamily,
    fontSize,
    color,
    backgroundColor: bgColor,
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
    textAlign,
    textDecorationLine,
    lineHeight,
    textTransform,
    flex,
    borderColor,
    fontStyle,
  };

  return (
    <Text
      style={primaryStyle ? [defaultStyle, { ...primaryStyle }] : defaultStyle}
      {...rest}>
      {children}
    </Text>
  );
};

export default memo(TextComponent);
