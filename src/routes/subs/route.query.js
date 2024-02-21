import { useQuery } from '@tanstack/react-query';
import { API } from '@ultra-ui/api';
import { useSetRecoilState } from 'recoil';
import { userInfoAtom } from 'states/recoil';
import { useLogout } from 'utils/helper';

export const useQueryUserInfo = () => {
  const setUserInfo = useSetRecoilState(userInfoAtom);
  const logout = useLogout();

  const { data, isInitialLoading, error } = useQuery(['GET_USER_INFO'], () =>
    API.request({
      url: '/user-service/user/sale/profile',
    })
      .then(response => {
        setUserInfo(response);
        return response;
      })
      .catch(e => {
        if (e.status === 401) {
          logout();
        }
        return null;
      }),
  );

  return { data, isLoading: isInitialLoading, error };
};
