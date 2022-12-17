import React from 'react';
import {View} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Text from '@/components/Text';

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

const ApproveLabel = ({
  title,
  hash,
  status,
  subTitle,
  isActive,
  paddingTop,
}) => {
  return (
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
const CustomIndicator = ({curStep}) => (
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
      currentPosition={curStep}
      stepCount={3}
      labels={['connect', 'approve', 'submit']}
      renderLabel={Label}
      renderStepIndicator={CustomStep}
    />
  </View>
);

export default CustomIndicator;
