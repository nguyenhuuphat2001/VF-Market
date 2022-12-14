import React, {useRef, useCallback, useMemo, useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SharedElement} from 'react-navigation-shared-element';
import {useDispatch, useSelector} from 'react-redux';
import Button, {BackButton, FavoriteButton} from '@/components/Button';
import Text from '@/components/Text';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {COLORS, SPACING, MONT_MEDIUM} from '@/theme/index';
import {
  DetailTitle,
  DetailCarousel,
  DetailDesc,
  DetailParameter,
} from './components';

const CustomStep = ({position, stepStatus}) => {
  const finished = stepStatus === 'finished';
  const unfinished = stepStatus === 'unfinished';
  return (
    <View
      style={[
        {
          width: 20,
          height: 20,
          justifyContent: 'center',
          alignItems: 'center',
        },
        unfinished
          ? {
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 16,
            }
          : {},
      ]}>
      {finished ? (
        <Icon name="check-circle" size={20} />
      ) : (
        <Text
          customStyle={{
            fontSize: 12,
            fontWeight: '500',
            color: 'white',
          }}>
          {position + 1}
        </Text>
      )}
    </View>
  );
};

// type TransactionValidationLabel = 'token' | 'starNFT' | 'keywordNFT' | 'submit';

const ApproveLabel = ({
  title,
  hash,
  status,
  subTitle,
  isActive,
  paddingTop,
}) => {
  return (
    // <View style={[styles.labelContainer, {paddingTop}]}>
    <View style={{width: '100%'}}>
      <Text
        customStyle={{
          fontWeight: '500',
          fontSize: 14,
          color: isActive ? 'black' : 'gray',
        }}>
        {title}
      </Text>

      {subTitle ? (
        <Text customStyle={{fontWeight: '400', fontSize: 13}}>{subTitle}</Text>
      ) : null}
    </View>
  );
};

const Label = ({position, stepStatus, label, currentPosition}) => {
  const isActive = stepStatus === 'current';

  switch (label) {
    case 'connect':
      return (
        <ApproveLabel
          title="Connect wallet"
          subTitle="You should connect wallet to buy NFT"
          isActive={isActive}
          // status={erc20Token?.status}
          // hash={erc20Token?.hash}
          paddingTop={24}
        />
      );
    case 'approve':
      return (
        <ApproveLabel
          title="Approve NFT collection"
          subTitle="To allow buy NFTs from your wallet. You only need to approve once."
          isActive={isActive}
          // status={keywordNFT?.status}
          // hash={keywordNFT?.hash}
        />
      );
    case 'submit':
      return (
        // // <View style={[styles.labelContainer, {paddingBottom: 24}]}>
        // <View>
        //   <Text
        //     variant="body2Bold"
        //     style={{
        //       color: isActive ? '#fff' : COLORS.neutral5,
        //     }}>
        //     Submit transaction
        //   </Text>

        // </View>
        <ApproveLabel
          title=" Submit transaction"
          // subTitle="To allow transfer NFTs from your wallet. You only need to approve once."
          isActive={isActive}
          // status={keywordNFT?.status}
          // hash={keywordNFT?.hash}
        />
      );
    default:
      return null;
  }
};

const DetailCarScreen = ({navigation, route}) => {
  const goBack = () => navigation.pop();

  const ref = useRef(null);
  const [data, setData] = useState({});
  const [currentStep, setCurrentStep] = useState(-1);
  const [buttonTitle, setButtonTitle] = useState('Connect');

  const currentAccount = useSelector(
    state => state.walletReducer.currentAccount,
  );

  useEffect(() => {
    const item = route.params;
    if (item.name != data?.name) {
      setData(item);
    }
  }, [navigation]);

  useEffect(() => {
    if (currentAccount) {
      setCurrentStep(1);
      setButtonTitle('Approve');
    }
  }, []);

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
          zIndex: 1,
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
            content={buttonTitle}
            onPress={onPress}
          />
        </View>
      </View>
      <BottomSheet
        index={-1}
        // opacity={1}
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
          <View style={{height: 200}}>
            <StepIndicator
              direction="vertical"
              customStyles={{
                labelAlign: 'flex-start',
                separatorStrokeWidth: 3,
                stepStrokeWidth: 0,
                stepIndicatorSize: 25,
                currentStepStrokeWidth: 0,
                currentStepIndicatorSize: 25,
                stepIndicatorCurrentColor: '#00BDFF',

                separatorStrokeUnfinishedWidth: 3,
                separatorStrokeFinishedWidth: 1,
                stepStrokeUnFinishedColor: '#777E90',
                separatorUnFinishedColor: '#777E90',
                stepIndicatorUnFinishedColor: '#353945',

                separatorStrokeFinishedWidth: 0,
                separatorFinishedColor: '#0A688A',
                stepIndicatorFinishedColor: '#0A688A',
              }}
              currentPosition={currentStep}
              stepCount={3}
              labels={['connect', 'approve', 'submit']}
              renderLabel={Label}
              renderStepIndicator={CustomStep}
            />
          </View>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default DetailCarScreen;
