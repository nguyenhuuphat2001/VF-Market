import React from 'react';
import {
  View,
  useWindowDimensions,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Text from '@/components/Text';
// import RateTab from './RateTab';
// import ServiceTab from './ServiceTab'
import TermTab from './TermTab';
import ContentTab from './ContentTab';
import {
  COLORS,
  SPACING,
  MONT_BOLD,
  FONT_SIZE,
  MONT_REGULAR,
  MONT_MEDIUM,
} from '@/theme/index';

const renderScene = SceneMap({
  // service: ServiceTab,
  // rate: RateTab,
  term: TermTab,
  content: ContentTab,
});

const DetailTabs = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'service', title: 'Dịch vụ'},
    {key: 'rate', title: 'Đánh giá'},
    {key: 'term', title: 'Điều khoản'},
    {key: 'content', title: 'Nội dung'},
  ]);

  const renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <TabBar
        {...props}
        indicatorStyle={styles.indicator}
        style={[styles.tabbar]}
        labelStyle={styles.label}
        tabStyle={styles.tabStyle}
        contentContainerStyle={styles.innerContent}
      />
    );
  };

  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border_color,
        minHeight: 500,
        padding: SPACING.innerContainer,
      }}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        initialLayout={{
          width: layout.width,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: COLORS.background,
  },
  indicator: {
    backgroundColor: COLORS.orange,
    height: 4,
  },
  label: {
    color: COLORS.primary,
    textTransform: 'none',
    fontSize: FONT_SIZE.small,
  },
  tabStyle: {
    width: 'auto',
  },
  innerContent: {
    width: 50,
  },
});

export default DetailTabs;
