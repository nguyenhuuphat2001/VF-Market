import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import styles from './styles';
import Text from '@/components/Text';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {COLORS, SPACING} from '@/theme/index';

import {ARROW_RIGHT} from '@/assets/images/profile';

import {PROFILE_SCREENS} from './constants';
import DashedLine from '@/components/DashLine';

import {useNavigation} from '@react-navigation/native';

import {useDispatch, useSelector} from 'react-redux';
import {logout} from '@/store/auth';
import {disconnect} from '@/store/wallet';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const profile = useSelector(state => state.authReducer.profile);
  const renderItem = ({item}) =>
    item?.isTitle ? (
      <Text
        customStyle={[
          styles.title,
          item?.isSecond && {marginTop: 30, marginBottom: 10},
        ]}>
        {item.name}
      </Text>
    ) : (
      <TouchableOpacity
        style={styles.itemMenu}
        onPress={() => {
          if (item?.isLogOut) {
            dispatch(disconnect());
            return dispatch(logout());
          }

          if (item?.route) {
            return navigation.navigate(item?.route);
          }
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={styles.icon} resizeMode="contain" source={item.icon} />
          <Text customStyle={styles.menuName}>{item.name}</Text>
        </View>
        <Image
          style={styles.iconArrow}
          resizeMode="contain"
          source={ARROW_RIGHT}
        />
      </TouchableOpacity>
    );
  return (
    <View style={styles.container}>
      <SafeAreaView
        edges={['top']}
        mode="padding"
        // style={[styles.safeArea, {backgroundColor: 'black'}]}
      />
      <View style={[styles.container, {padding: SPACING.innerContainer}]}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{width: wp(20), height: wp(20), borderRadius: 100}}
            resizeMode="contain"
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRieAa2n6WfexuRussvPylufCjOBXpon47vJQ&usqp=CAU',
            }}
          />
          <Text customStyle={styles.name}>
            {' '}
            {profile?.firstName} {profile?.lastName}
          </Text>
          <Text customStyle={styles.email}> {profile?.email}</Text>
        </View>
        <View style={styles.innerContainer}>
          <FlatList
            data={PROFILE_SCREENS}
            contentContainerStyle={{paddingBottom: 100}}
            keyExtractor={item => item.name.toString()}
            showsVerticalScrollIndicator={false}
            pagingEnabled
            ItemSeparatorComponent={(item, index) =>
              !item?.leadingItem?.isTitle ? (
                <View style={styles.dash}>
                  <DashedLine noDash color={COLORS.light_grey} />
                </View>
              ) : null
            }
            renderItem={renderItem}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
