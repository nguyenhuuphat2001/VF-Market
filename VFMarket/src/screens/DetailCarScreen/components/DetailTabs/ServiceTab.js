// import { View, Image, FlatList } from 'react-native'
// import React from 'react'
// import Text from '@/components/Text'
// import { COLORS, SPACING, MONT_BOLD, FONT_SIZE, MONT_REGULAR, MONT_MEDIUM } from '@/theme/index';
// import { GYM, YOGA, BOXING, SAUNA, WIFI, AIR } from '@assets/images';

// // Sports
// const sports = [
//   { name: 'Gym', image: GYM },
//   { name: 'Yoga', image: YOGA },
//   { name: 'Boxing', image: BOXING },
//   { name: 'Cycle', image: GYM },
// ]

// const renderSportItem = ({ item }) => {
//   return (
//     <View
//       style={{
//         borderWidth: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         minWidth: 80,
//         padding: SPACING.medium,
//         borderRadius: SPACING.small,
//         borderColor: COLORS.border_color,
//         marginRight: SPACING.small,
//       }}
//     >
//       <Image source={item.image} resizeMode='contain' style={{ width: 28, height: 28 }} />
//       <Text customStyle={{ fontSize: FONT_SIZE.small, paddingTop: SPACING.xs }}>{item.name}</Text>
//     </View>
//   )
// }

// const Sports = () => {
//   return (
//     <FlatList
//       data={sports}
//       horizontal
//       renderItem={renderSportItem}
//       keyExtractor={item => item.name}
//       showsHorizontalScrollIndicator={false}
//     />
//   )
// }

// // Facilities
// const facilities = [
//   { name: 'Wifi miễn phí', image: WIFI },
//   { name: 'Điều hoà', image: AIR },
//   { name: 'Xông hơi', image: SAUNA },
// ]

// const renderFacilityItem = ({ item }) => {
//   return (
//     <View
//       style={{
//         flexDirection: 'row',
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         paddingVertical: 2
//       }}
//     >
//       <Image
//         source={item.image}
//         resizeMode='contain'
//         style={{ width: 25, height: 25 }}
//       />
//       <Text
//         customStyle={{
//           fontSize: FONT_SIZE.small,
//           paddingTop: SPACING.xs,
//           marginLeft: SPACING.small
//         }}>
//         {item.name}
//       </Text>
//     </View>
//   )
// }

// const Facilities = () => {
//   return (
//     <FlatList
//       data={facilities}
//       renderItem={renderFacilityItem}
//       keyExtractor={item => item.name}
//     />
//   )
// }

// const ServiceTab = () => {
//   return (
//     <View style={{ flex: 1, }}>
//       <View style={{
//         borderBottomWidth: 1,
//         borderBottomColor: COLORS.border_color,
//         paddingVertical: SPACING.medium
//       }}>
//         <Text
//           customStyle={{
//             fontSize: FONT_SIZE.medium,
//             marginBottom: SPACING.small
//           }}>
//           Các bộ môn
//         </Text>
//         <Sports />
//       </View>

//       <View style={{
//         borderBottomWidth: 1,
//         borderBottomColor: COLORS.border_color,
//         paddingVertical: SPACING.medium,
//         width: '100%'
//       }}>
//         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//           <Text
//             customStyle={{
//               fontSize: FONT_SIZE.medium,
//               marginBottom: SPACING.small
//             }}>
//             Tiện nghi
//           </Text>
//           <Text
//             customStyle={{
//               fontSize: FONT_SIZE.small,
//               marginBottom: SPACING.small,
//               color: COLORS.orange
//             }}>
//             Hiển thị thêm
//           </Text>
//         </View>
//         <Facilities />
//       </View>
//     </View>

//   )
// }

// export default ServiceTab
