import { atom, selector } from 'recoil';
import { getAsyncStorage, setAsyncStorage } from 'utils/helper';

const tokenAtom = atom({
  key: 'ACCESS_TOKEN_ATOM',
  default: new Promise(resolve => {
    const accessToken = getAsyncStorage('access-token') || null;
    resolve(accessToken);
  }),
});

export const tokenState = selector({
  key: 'ACCESS_TOKEN_STATE',

  get: ({ get }) => get(tokenAtom),

  set: ({ set }, newData) => {
    setAsyncStorage('access-token', newData);
    set(tokenAtom, newData);
  },
});

export const userInfoAtom = atom({
  key: 'USER_INFO_ATOM',
  default: null,
});

export const cartAtom = atom({
  key: 'CART_ATOM',
  default: [],
});

export const totalCartPriceState = selector({
  key: 'TOTAL_CART_PRICE_SELECTOR',
  get: ({ get }) =>
    get(cartAtom)
      .filter(i => !i.noCheck)
      .reduce((prev, curr) => {
        const { price, quantity } = curr;
        return prev + price * quantity;
      }, 0),
});

// const cartCodeAtom = atom({
//   // Mấ đơn hàng atom
//   key: 'CART_CODE_ATOM',
//   default: new Promise(resolve => {
//     const accessToken = getAsyncStorage('cart-code') || null;
//     resolve(accessToken);
//   }),
// });

// export const cartCodeState = selector({
//   //Mã đơn hàng selector
//   key: 'CART_CODE_STATE',

//   get: ({ get }) => get(cartCodeAtom),

//   set: ({ set }, newData) => {
//     // tương đương với hàm reset
//     if (newData instanceof DefaultValue) {
//       console.log('ducnh123');
//       setAsyncStorage('cart-code', null);
//       set(cartCodeAtom, null);
//       return;
//     }
//     setAsyncStorage('cart-code', newData);
//     set(cartCodeAtom, newData);
//   },
// });

export const cartCodeState = atom({
  key: 'CART_CODE_STATE',
  default: null,
});

export const newCustomerAtom = atom({
  key: 'NEW_CUSTOMER_ATOM',
  default: null,
});

export const storeIdAtom = atom({
  key: 'STORE_ID_ATOM',
  default: null,
});

export const categoryIdAtom = atom({
  key: 'CATEGORY_ID_ATOM',
  default: null,
});

export const filterCategoryIdAtom = atom({
  key: 'FILTER_CATEGORY_ID_ATOM',
  default: [],
});

export const sortProductAtom = atom({
  key: 'SORT_PRODUCT_ATOM',
  default: null,
});
