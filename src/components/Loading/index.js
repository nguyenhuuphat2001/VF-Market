import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import {COLORS} from 'constants/colors';

import Text from '../Text';

const Loading = ({isLoading, isEmptyData, text, isLoadingRefreshControl}) => {
  const firstLoad = React.useRef(false);

  React.useEffect(() => {
    firstLoad.current = true;
  }, []);

  if (isLoadingRefreshControl) {
    return null;
  }

  return isLoading ? (
    <View
      style={{
        flexGrow: 1,
        justifyContent: !isEmptyData ? 'flex-start' : 'center',
        marginBottom: 20,
      }}>
      <ActivityIndicator size="large" color="black" />
    </View>
  ) : isEmptyData && firstLoad.current ? (
    <View
      style={{
        flexGrow: 1,
        justifyContent: 'center',
      }}>
      {typeof text === 'string' ? (
        <Text
        // style={{ color: COLORS.neutral8, textAlign: 'center' }}
        // variant="body2Bold"
        >
          {text}
        </Text>
      ) : (
        text
      )}
    </View>
  ) : null;
};

export default Loading;
