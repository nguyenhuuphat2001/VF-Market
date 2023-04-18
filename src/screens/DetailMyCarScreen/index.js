import React, {useRef, useCallback, useMemo, useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Header from '@/components/Header';
import Text from '@/components/Text';
import {COLORS, SPACING, MONT_MEDIUM} from '@/theme/index';

import styles from './styles';
import {getTokenInfo, getOwners} from '../../blockchain/blockchain.erc721';
import {getShortAddress} from '@/utils/helper';

const DetailCarScreen = ({navigation, route}) => {
  const [data, setData] = useState();
  const [NftInfo, setNftInfo] = useState({});
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    const item = route.params;
    console.log('tokenId: ', item);
    setData(item);
    useGetTokenInfo(item);
    useGetOwners(item);
    // if (item.name != data?.name) {
    //   setData(item);
    // }
  }, [navigation]);

  const useGetTokenInfo = async tokenId => {
    const info = await getTokenInfo(tokenId);
    setNftInfo(info.nft);
  };

  const useGetOwners = async tokenId => {
    const listOwners = await getOwners(tokenId);
    setOwners(listOwners);
  };

  const RenderPairInfo = ({keyText, value, isAdr}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          // justifyContent: 'space-between',
          paddingHorizontal: 10,
          marginTop: 10,
        }}>
        <Text
          customStyle={{
            fontSize: 16,
            fontWeight: '500',
            color: COLORS.primary_text,
          }}>
          {keyText}:
        </Text>
        {isAdr && value ? (
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(`https://testnet.bscscan.com/address/${value}`)
            }>
            <Text
              customStyle={{
                fontSize: 16,
                fontWeight: '400',
                // fontFamily: MONT_REGULAR,
                color: COLORS.blue,
              }}>
              {' '}
              {getShortAddress(value)}
            </Text>
          </TouchableOpacity>
        ) : (
          <Text
            customStyle={{
              fontSize: 16,
              fontWeight: '400',
              // fontFamily: MONT_REGULAR,
              color: COLORS.primary_text,
            }}>
            {'  '}
            {value}
          </Text>
        )}
      </View>
    );
  };

  return (
    <View style={[styles.container]}>
      <Header title="Detail NFT" />
      <RenderPairInfo
        keyText={'carType'}
        value={NftInfo?.carType}
        isAdr={false}
      />
      <RenderPairInfo
        keyText={'carModel'}
        value={NftInfo?.carModel}
        isAdr={false}
      />
      <RenderPairInfo
        keyText={'engineAddress'}
        value={NftInfo?.engineAddress}
        isAdr={true}
      />
      <RenderPairInfo
        keyText={'brakesAddress'}
        value={NftInfo?.brakesAddress}
        isAdr={true}
      />

      <RenderPairInfo
        keyText={'exhaustAddress'}
        value={NftInfo?.exhaustAddress}
        isAdr={true}
      />
      <Text
        customStyle={{
          fontSize: 16,
          fontWeight: '500',
          color: COLORS.primary_text,
          paddingHorizontal: 10,
          marginTop: 10,
        }}>
        Owner history:
      </Text>
      {owners && owners.length > 0
        ? owners.map((address, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  Linking.openURL(
                    `https://testnet.bscscan.com/address/${address}`,
                  )
                }
                style={[styles.address]}>
                <Text
                  customStyle={{
                    fontSize: 16,
                    fontWeight: '400',
                    // fontFamily: MONT_REGULAR,
                    color: COLORS.blue,
                  }}>
                  {'- '}
                  {address ? getShortAddress(address) : ''}
                </Text>
              </TouchableOpacity>
            );
          })
        : null}
    </View>
  );
};

export default DetailCarScreen;
