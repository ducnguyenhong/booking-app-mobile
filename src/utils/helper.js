import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast, { BaseToast } from 'react-native-toast-message';
import { useSetRecoilState } from 'recoil';
import { tokenState } from 'states/recoil';

export const showToast = config => {
  const {status = 'success', description, content, position, duration} = config;

  // See props: https://github.com/calintamas/react-native-toast-message/blob/945189fec9746b79d8b5b450e298ef391f8022fb/docs/api.md

  Toast.show({
    type: status,
    text1: content,
    text2: description,
    position,
    visibilityTime: duration,
  });
};

export const toastConfig = {
  error: ({...rest}) => (
    <BaseToast
      {...rest}
      style={{borderLeftColor: 'red'}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1NumberOfLines={2}
      text2NumberOfLines={2}
    />
  ),

  success: ({...rest}) => (
    <BaseToast
      {...rest}
      style={{borderLeftColor: 'green'}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1NumberOfLines={2}
      text2NumberOfLines={2}
    />
  ),

  info: ({...rest}) => (
    <BaseToast
      {...rest}
      style={{borderLeftColor: '#87CEFA'}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1NumberOfLines={2}
      text2NumberOfLines={2}
    />
  ),
};

export const useLogout = () => {
  const setToken = useSetRecoilState(tokenState);

  return () => {
    setToken();
  };
};

export const setAsyncStorage = async (key, value) => {
  try {
    if (!value) {
      await AsyncStorage.removeItem(key);
    } else {
      const stringValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, stringValue);
    }
  } catch (e) {
    console.error('setAsyncStorage error:', e);
  }
};

export const getAsyncStorage = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value);
  } catch (e) {
    console.error('getAsyncStorage error:', e);
  }
};

export const formatCurrency = price =>
  new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(
    price,
  );

export const asyncStorageEffect =
  key =>
  ({setSelf, onSet, trigger}) => {
    const loadPersisted = async () => {
      const savedValue = await getAsyncStorage(key);
      if (savedValue) {
        setSelf(savedValue);
      }
    };
    if (trigger === 'get') {
      loadPersisted();
    }
    onSet((newValue, _, isReset) =>
      setAsyncStorage(key, isReset ? null : newValue),
    );
  };
