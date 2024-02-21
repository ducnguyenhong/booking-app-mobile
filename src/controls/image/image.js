import React, { memo, useCallback, useEffect, useState } from 'react';
import { Image as RNImage } from 'react-native';
import FastImage from 'react-native-fast-image';

const Image = props => {
  const {
    source,
    style,
    fallback,
    resizeMode = 'cover',
    url,
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
    zIndex,
    w = 24,
    h = 24,
    borderWidth,
    borderColor,
    position,
    top,
    bottom,
    left,
    right,
  } = props;
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    if (source || url) {
      setShowFallback(false);
    }
  }, [source, url]);

  const onError = useCallback(() => {
    setShowFallback(true);
  }, []);

  const imageStyle = {
    borderRadius,
    borderWidth,
    borderColor,
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
    position,
    top,
    left,
    right,
    bottom,
    zIndex,
    ...style,
  };

  if ((!source && !url) || showFallback) {
    return (
      <RNImage style={imageStyle} source={fallback} resizeMode={resizeMode} />
    );
  }

  if (url) {
    return (
      <FastImage
        style={imageStyle}
        source={{
          uri: url,
        }}
        onError={onError}
        resizeMode={resizeMode}
      />
    );
  }

  return (
    <RNImage
      style={imageStyle}
      source={source}
      onError={onError}
      resizeMode={resizeMode}
    />
  );
};

export default memo(Image);
