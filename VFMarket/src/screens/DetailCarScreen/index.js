import React, {useRef, useCallback, useMemo, useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {useDispatch, useSelector} from 'react-redux';
import SCREEN from '@/constants/screen';
import {navigate} from '@/navigation/navigationUtils';
import Button, {BackButton, FavoriteButton} from '@/components/Button';
import Text from '@/components/Text';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {COLORS, SPACING, MONT_MEDIUM} from '@/theme/index';
import {
  DetailTitle,
  DetailCarousel,
  DetailDesc,
  DetailParameter,
  CustomIndicator,
} from './components';
import {
  getAllowanceWallet,
  handleIncreaseAllowance,
  handleBuyTransaction,
} from '@/store/wallet/action';
import IncreaseAllowanceModal from '@/components/Modal/IncreaseAllowanceModal.js';
import SignTransactionModal from '@/components/Modal/SignTransactionModal.js';
import {checkingTransactionReceipt} from '../../blockchain/basic';

const DetailCarScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const goBack = () => navigation.pop();

  const ref = useRef(null);
  const [data, setData] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [buttonTitle, setButtonTitle] = useState('Connect');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalSignVisible, setModalSignVisible] = useState(false);
  // let onButtonPress = () => dispatch(handleIncreaseAllowance(currentAccount));

  const {currentAccount, allowance, buyHash} = useSelector(
    state => state.walletReducer,
  );

  useEffect(() => {
    const item = route.params;
    if (item.name != data?.name) {
      setData(item);
    }
  }, [navigation]);

  useEffect(() => {
    console.log('buyHash: ', buyHash);
    if (buyHash !== '') {
      try {
        let intervalId = setInterval(async () => {
          const respone = await checkingTransactionReceipt(buyHash);
          console.log('respone', respone);
          if (respone) {
            clearInterval(intervalId);
            setButtonTitle('Finish');
            setCurrentStep(3);
            return true;
          }
        }, 2000);
        console.log('intervalId', intervalId);
      } catch (err) {
        console.log('err: ', err);
      }
    }
  }, [buyHash]);

  useEffect(() => {
    console.log('allowance: ', allowance);
    if (currentAccount) {
      dispatch(getAllowanceWallet(currentAccount));
      setButtonTitle('Approve');
      setCurrentStep(1);
      // onButtonPress = () => setModalVisible(true);
      if (allowance > 0) {
        setButtonTitle('Submit');
        setCurrentStep(2);
      }
    }
  }, [allowance]);

  const onButtonPress = async () => {
    switch (buttonTitle) {
      case 'Connect': {
        navigate(SCREEN.INTRO_WALLET_SCREEN);
        break;
      }
      case 'Approve': {
        await dispatch(handleIncreaseAllowance(currentAccount));
        setModalVisible(true);
        break;
      }
      case 'Submit': {
        if (data?.launchId) {
          await dispatch(
            handleBuyTransaction({
              launchId: data.launchId,
              address: currentAccount,
            }),
          );
          setModalSignVisible(true);
        }
        break;
      }
    }
  };

  const onPress = useCallback(() => {
    ref?.current?.collapse();
  }, []);

  const onClose = useCallback(() => {
    ref?.current?.close();
  }, []);

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={0}
        appearsOnIndex={1}
      />
    ),
    [],
  );

  const snapPoints = useMemo(() => ['45%', '45%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

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
          marginBottom: 60,
        }}>
        <SharedElement id={`item.${data?._id}.photo`}>
          <DetailCarousel images={data?.images ?? []} />
        </SharedElement>
        <DetailTitle
          title={data?.name}
          address={'Ho Chi Minh City'}
          isOpen={true}
        />
        {data?.description && <DetailDesc description={data?.description} />}
        <DetailParameter />
      </ScrollView>

      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 4,
          flexDirection: 'row',
          padding: SPACING.large,
          justifyContent: 'space-between',
          backgroundColor: COLORS.background,
          zIndex: 0,
        }}>
        <View style={{left: 10}}>
          <Text
            customStyle={{
              fontSize: 16,
              color: '#525252',
              fontWeight: '500',
            }}>
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
            content="Buy"
            onPress={onPress}
          />
        </View>
      </View>
      <IncreaseAllowanceModal
        modalVisible={modalVisible}
        callbackChangeVisible={() => setModalVisible(false)}
      />
      <SignTransactionModal
        modalVisible={modalSignVisible}
        callbackChangeVisible={() => setModalSignVisible(false)}
      />
      <BottomSheet
        index={-1}
        backdropComponent={renderBackdrop}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        ref={ref}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            paddingHorizontal: SPACING.medium,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text customStyle={{fontWeight: '500', fontSize: 22}}>
                Validation
              </Text>
            </View>
            <TouchableOpacity onPress={onClose}>
              <Text
                customStyle={{
                  fontSize: 16,
                  fontWeight: '500',
                  color: COLORS.primary_text,
                }}>
                Close
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{width: '100%', paddingTop: 5}}
            contentContainerStyle={{paddingBottom: 60}}
            showsVerticalScrollIndicator={false}>
            <View style={{width: '100%'}}>
              <Text
                customStyle={{
                  fontSize: 14,
                  fontWeight: '400',
                  textAlign: 'left',
                  color: COLORS.primary_text,
                }}>
                Please follow below steps to validate your wallet and complete
                the transaction
              </Text>
            </View>
          </View>
          <CustomIndicator curStep={currentStep} />
          <Button
            containerStyle={{
              width: 200,
              borderRadius: 100,
              alignSelf: 'center',
            }}
            content={buttonTitle}
            onPress={onButtonPress}
          />
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default DetailCarScreen;
