import {
  forwardRef,
  memo,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { TextInput } from 'react-native';

const TextInputComponent = forwardRef((props, ref) => {
  const [focus, setFocus] = useState(false);
  const {
    w,
    h,
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
    borderRadius = 8,
    multiline,
    borderWidth = multiline ? 0 : 1,
    borderColor = '#DFDBD6',
    boxShadow,
    placeholderTextColor,
    children,
    style,
    showBorderFocus = true,
    textAlignVertical,
    onFocus,
    onBlur,
    secureTextEntry,
    editable,
    ...rest
  } = props;
  const styleFocus =
    focus && showBorderFocus
      ? {
          borderColor: '#E08127',
        }
      : {};
  const inputRef = useRef();

  const primaryStyle = useMemo(() => {
    if (Array.isArray(style) && !!style.length) {
      return style.reduce((prev, curr) => ({ ...prev, ...curr }));
    }
    return style;
  }, [style]);

  const { shadowColor, shadowOffset, shadowOpacity, shadowRadius, elevation } =
    boxShadow || {};

  const defaultStyle = {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#382915',
    backgroundColor: bgColor,
    borderRadius,
    borderWidth,
    borderColor,
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
    textAlignVertical,
    ...styleFocus,
  };

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current?.focus();
    },
  }));

  const onFocusTextInput = e => {
    setFocus(true);
    onFocus && onFocus(e);
  };

  const onBlurTextInput = e => {
    setFocus(false);
    onBlur && onBlur(e);
  };

  return (
    <TextInput
      ref={inputRef}
      style={primaryStyle ? [defaultStyle, { ...primaryStyle }] : defaultStyle}
      placeholderTextColor={
        placeholderTextColor ? placeholderTextColor : '#828282'
      }
      editable={editable}
      multiline={multiline}
      secureTextEntry={secureTextEntry}
      onFocus={onFocusTextInput}
      onBlur={onBlurTextInput}
      {...rest}
    />
  );
});

export default memo(TextInputComponent);
