import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, Image, ScrollView} from 'react-native';
import Button, {BackButton, FavoriteButton} from '@/components/Button';
import Text from '@/components/Text';
import {COLORS, SPACING} from '@/theme/index';
import {
  DetailTitle,
  DetailCarousel,
  DetailDesc,
  DetailParameter,
} from './components';
import {SharedElement} from 'react-navigation-shared-element';

const DetailCarScreen = ({navigation, route}) => {
  const goBack = () => navigation.pop();

  // const gymDetail = useSelector(state => state.gymReducer.detail);

  const [data, setData] = useState({});

  useEffect(() => {
    const item = route.params;
    console.log('detail car: ', item);
    if (item.name != data?.name) {
      setData(item);
    }
  }, [navigation]);

  const showPrice = value => {
    const price = +value;
    var moneyFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    });

    return moneyFormatter.format(price);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          position: 'absolute',
          top: SPACING.innerContainer * 3,
          left: SPACING.innerContainer,
          zIndex: 1,
        }}>
        <BackButton isDark={false} onPress={goBack} />
      </View>

      <View
        style={{
          position: 'absolute',
          top: SPACING.innerContainer * 3,
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
          address={'146 Đường số 2, P.15, Quận Bình Thạnh, Tp Hồ Chí Minh'}
          isOpen={true}
        />
        {data?.description && <DetailDesc description={data?.description} />}
        <DetailParameter
          title={data?.name}
          address={'146 Đường số 2, P.15, Quận Bình Thạnh, Tp Hồ Chí Minh'}
          isOpen={true}
        />
      </ScrollView>

      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 4,
          flexDirection: 'row',
          padding: SPACING.medium,
          justifyContent: 'space-between',
          // alignItems: 'center',
          backgroundColor: COLORS.background,
          zIndex: 1,
        }}>
        <View style={{left: 10}}>
          <Text customStyle={{fontSize: 14, color: 'gray', fontWeight: '500'}}>
            Price
          </Text>
          <Text
            customStyle={{
              fontSize: 18,
              marginTop: 5,
              color: 'black',
              fontWeight: '500',
            }}>
            {showPrice(data?.price?.value)}
          </Text>
        </View>
        <View>
          <Button
            containerStyle={{right: 10, width: 200, borderRadius: 100}}
            content={'Mua ngay'}
            // onPress={() => navigate(screen.ORDER_PACKAGE, {gymId: data?._id})}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailCarScreen;
