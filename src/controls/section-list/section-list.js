import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { API } from '@ultra-ui/api';
import { View } from 'controls';
import get from 'lodash/get';
import {
    Fragment,
    forwardRef,
    memo,
    useCallback,
    useImperativeHandle,
    useState,
} from 'react';
import {
    ActivityIndicator,
    Dimensions,
    SectionList as RNSectionList,
    RefreshControl,
} from 'react-native';
import { getInfiniteData } from './subs/helper';

const SectionList = forwardRef((props, ref) => {
  const {
    queryKey, // required
    renderItem, // required
    requestConfig, // required
    keyExtractor, // required
    HeaderComponent,
    EmptyComponent,
    responseConfig,
    loadingConfig,
    getNextPageParam,
    onRefresh,
    enableQuery,
    ...rest
  } = props;

  const [refresh, setRefresh] = useState(false);
  const queryClient = useQueryClient();
  const { field: responseField } = responseConfig || {};
  const { defaultPage = 0, defaultSize = 10 } = requestConfig;
  const {
    component: LoadingComponent,
    numOfDefault = 10,
    numOfNext = 2,
  } = loadingConfig || {};

  useImperativeHandle(
    ref,
    () => ({
      refresh() {
        queryClient.refetchQueries(queryKey);
      },
      reset() {
        queryClient.resetQueries(queryKey);
      },
    }),
    [queryClient, queryKey],
  );

  const { data, fetchNextPage, hasNextPage, isLoading, isInitialLoading } =
    useInfiniteQuery(
      queryKey,
      ({ pageParam = defaultPage }) => {
        const {
          pageField = 'page',
          sizeField = 'size',
          url,
          params,
          baseURL,
        } = requestConfig;
        const newParams = {
          ...params,
          [pageField]: pageParam || defaultPage,
          [sizeField]: defaultSize,
        };

        return API.request({
          url,
          baseURL,
          params: newParams,
        });
      },
      {
        enabled: enableQuery,
        onSuccess: response => {
          return response;
        },
        getNextPageParam: (lastPage, allPages) => {
          const value = responseField ? get(lastPage, responseField) : lastPage;

          if (value.length < defaultSize) {
            return undefined;
          }

          if (getNextPageParam) {
            return getNextPageParam(lastPage, allPages);
          }

          return allPages.length + defaultPage;
        },
      },
    );

  const onRefreshData = useCallback(() => {
    onRefresh && onRefresh();
    setRefresh(true);
    queryClient.resetQueries(queryKey).finally(() => {
      setRefresh(false);
    });
  }, [onRefresh, queryKey, queryClient]);

  const renderFooter = useCallback(() => {
    if (!hasNextPage) {
      return null;
    }

    if (LoadingComponent) {
      return (
        <>
          {Array.from(Array(numOfNext).keys()).map(i => (
            <Fragment key={i}>{LoadingComponent}</Fragment>
          ))}
        </>
      );
    }

    return (
      <View
        style={{
          alignItems: 'center',
          width: Dimensions.get('window').width,
        }}>
        <ActivityIndicator
          style={{
            color: '#000',
          }}
        />
      </View>
    );
  }, [LoadingComponent, hasNextPage, numOfNext]);

  const onLoadMore = useCallback(() => {
    if (isInitialLoading || !hasNextPage) {
      return;
    }
    fetchNextPage();
  }, [fetchNextPage, hasNextPage, isInitialLoading]);

  const finalData = getInfiniteData(data, responseField);

  if (isLoading || isInitialLoading) {
    return (
      <View>
        {HeaderComponent}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {Array.from(Array(numOfDefault).keys()).map((_, index) => (
            <Fragment key={index}>{LoadingComponent}</Fragment>
          ))}
        </View>
      </View>
    );
  }

  return (
    <RNSectionList
      sections={finalData.length ? [{ title: '', data: finalData }] : []}
      ListHeaderComponent={HeaderComponent}
      renderItem={renderItem}
      ListFooterComponent={renderFooter}
      ListEmptyComponent={EmptyComponent}
      initialNumToRender={10}
      refreshControl={
        <RefreshControl refresh={refresh} onRefresh={onRefreshData} />
      }
      onEndReachedThreshold={0.3}
      onEndReached={onLoadMore}
      {...rest}
    />
  );
});

export default memo(SectionList);
