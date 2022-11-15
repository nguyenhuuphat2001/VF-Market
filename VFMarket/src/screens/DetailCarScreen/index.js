import React, {useEffect, useState} from 'react';
import {View, Image, ScrollView} from 'react-native';
import Button, {BackButton, FavoriteButton} from '@/components/Button';
import {BANNER} from '@assets/images';
import {OPENSANS_BOLD, COLORS, SPACING, MONT_REGULAR} from '@/theme/index';
import {
  DetailTitle,
  DetailCarousel,
  DetailDesc,
  DetailTabs,
} from './components';
import {navigate} from '@/navigation/navigationUtils';
import {useSelector} from 'react-redux';
import {SharedElement} from 'react-navigation-shared-element';
import screen from '@/constants/screen';

const DetailCarScreen = ({navigation, route}) => {
  const goBack = () => navigation.pop();

  const gymDetail = useSelector(state => state.gymReducer.detail);

  const [data, setData] = useState({});

  useEffect(() => {
    const item = route.params;
    console.log('item: ', item);
    if (item.name != data?.name) {
      setData(item);
    }
  }, [navigation]);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          position: 'absolute',
          top: SPACING.innerContainer * 2,
          left: SPACING.innerContainer,
          zIndex: 1,
        }}>
        <BackButton isDark={true} onPress={goBack} />
      </View>

      <View
        style={{
          position: 'absolute',
          top: SPACING.innerContainer * 2,
          right: SPACING.innerContainer,
          zIndex: 1,
        }}>
        <FavoriteButton isFavorite={true} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          backgroundColor: COLORS.background,
        }}>
        <SharedElement id={`item.${data?._id}.photo`}>
          <DetailCarousel images={data?.images ?? []} />
        </SharedElement>
        <DetailTitle
          title={data?.name}
          address={'146 Đường số 2, Phường 15, Quận Bình Thạnh, Tp Hồ Chí Minh'}
          isOpen={true}
        />

        <DetailDesc
          description="Lorem ipsum dolor sit amet, consectetur nmio adipiscing elit. Mauris viverra maecenas proin sed. Porttitor non dui facilisis feugiat liberoutio tellus facilisis feugiat liberoutio tellus facilisis feugiat liberoutio tellus"
          openTime={data?.openingTime?.from}
          closeTime={data?.openingTime?.to}
        />

        <DetailTabs />
      </ScrollView>

      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          padding: SPACING.innerContainer,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLORS.background,
          zIndex: 1,
        }}>
        {!!data?._id && (
          <Button
            content={'Đặt ngay'}
            onPress={() => navigate(screen.ORDER_PACKAGE, {gymId: data?._id})}
          />
        )}
      </View>
    </View>
  );
};

export default DetailCarScreen;
