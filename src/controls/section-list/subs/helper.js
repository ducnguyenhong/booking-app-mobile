import { isEmpty } from 'lodash';

export const getInfiniteData = (infiniteData, responseField) => {
  if (isEmpty(infiniteData?.pages)) {
    return [];
  }

  return infiniteData.pages
    .map(i => {
      if (responseField) {
        return i[responseField];
      }
      return i;
    })
    .flat()
    .filter(item => !!item);
};
