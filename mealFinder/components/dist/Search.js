// import React, {useState} from 'react';
// import {
//   ActivityIndicator,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableHighlight,
//   View,
// } from 'react-native';
// import Food from './item/Food';
// import RandomFood from './item/RanDomFood';
// import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
// import {faShuffle} from '@fortawesome/free-solid-svg-icons/faShuffle';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// function Search(): React.JSX.Element {
//   const [searchedValue, setSearchedValue] = useState('');
//   const [searchedTitle, setSearchTitle] = useState('');
//   const [isLoading, setIsLoading] = useState(true);
//   // search데이터보관하는곳
//   const [data, setData] = useState([]);
//   // random데이터
//   const [randomData, setRandomData] = useState([]);
//   // API호출을 했는지 check
//   const [isAPICalled, setIsAPICalled] = useState(false);
//   //검색어 입력 입력 안 했을때
//   const [noSearchKeyword, setNoSearchKeyword] = useState<string | null>('');
//   const getSearchFood = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch(
//         `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedValue}`,
//       );
//       const json = await response.json();
//       setData(json.meals);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   const getRanDomFood = async () => {
//     try {
//       const response = await fetch(
//         'https://www.themealdb.com/api/json/v1/1/random.php',
//       );
//       const json = await response.json();
//       setRandomData(json.meals);
//     } catch (error) {
//       console.error(error);
//     } finally {
//     }
//   };
//   // random펑션
//   const onPressRandomFunction = () => {
//     getRanDomFood();
//   };
//   // 검색 펑션
//   const onPressFunction = () => {
//     if (searchedValue.trim().length === 0) {
//       setIsAPICalled(false);
//     } else {
//       setSearchTitle(searchedValue.trim());
//       setSearchedValue('');
//       setIsAPICalled(true);
//       getSearchFood();
//     }
//   };
//   const noDataText = (
//     <Text style={[styles.title, wrapperStyle.titleContainer]}>
//       검색어를 입력해주세요
//     </Text>
//   );
//   const conditionDataText =
//     data === null ? (
//       <Text style={[styles.title, wrapperStyle.titleContainer]}>
//         {searchedTitle} 검색어의 데이터가 없습니다
//       </Text>
//     ) : (
//       <Text style={[styles.title, wrapperStyle.titleContainer]}>
//         {searchedTitle} 검색어의 결과 입니다
//       </Text>
//     );
//   return (
//     <View style={{flex: 1, backgroundColor: '#355e3b'}}>
//       <Text style={styles.appTitle}>Meal Finder</Text>
//       <View style={wrapperStyle.container}>
//         <View style={wrapperStyle.subContainer}>
//           <TextInput
//             multiline
//             maxLength={40}
//             style={styles.inputStyle}
//             placeholder="Search for meals or keywords"
//             placeholderTextColor="#808080"
//             onChangeText={setSearchedValue}
//             value={searchedValue}
//             underlineColorAndroid="rgba(0,0,0,0)"
//           />
//           <TouchableHighlight
//             underlayColor="rgba(10, 68, 18, 0.9)"
//             style={styles.searchButtonStyle}
//             onPress={() => {
//               setRandomData([]);
//               if (searchedValue.trim().length === 0) {
//                 setNoSearchKeyword('검색어가 없습니다');
//               } else {
//                 onPressFunction();
//                 setNoSearchKeyword('');
//               }
//             }}>
//             <View>
//               <FontAwesomeIcon icon={faSearch} />
//             </View>
//           </TouchableHighlight>
//         </View>
//         <TouchableHighlight
//           underlayColor="rgba(10, 68, 18, 0.9)"
//           style={styles.randomButtonStyle}
//           onPress={onPressRandomFunction}>
//           <View>
//             <FontAwesomeIcon icon={faShuffle} />
//           </View>
//         </TouchableHighlight>
//       </View>
//       <View>
//         {randomData.length > 0
//           ? null
//           : noSearchKeyword && noSearchKeyword?.length > 0
//           ? noDataText
//           : isAPICalled &&
//             (isLoading ? (
//               <View style={styles.spinner}>
//                 <ActivityIndicator />
//               </View>
//             ) : (
//               conditionDataText
//             ))}
//       </View>
//       {randomData?.length > 0 ? (
//         <RandomFood data={randomData} />
//       ) : (
//         noSearchKeyword?.length === 0 && <Food data={data} />
//       )}
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   appTitle: {
//     textAlign: 'center',
//     fontWeight: 'bold',
//     color: 'white',
//     fontSize: 30,
//     marginBottom: 10,
//   },
//   spinner: {
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   title: {
//     color: 'white',
//     textAlign: 'center',
//     fontSize: 20,
//   },
//   inputStyle: {
//     backgroundColor: 'white',
//     width: 300,
//     borderWidth: 1,
//     borderColor: 'black',
//     borderTopLeftRadius: 4,
//     borderBottomLeftRadius: 4,
//     fontSize: 14,
//     borderBottomWidth: 0,
//   },
//   searchButtonStyle: {
//     borderWidth: 1,
//     borderColor: '#dedede',
//     color: '#fff',
//     fontSize: 14,
//     padding: 8,
//     // cursor: 'pointer',
//     borderTopLeftRadius: 0,
//     borderBottomLeftRadius: 0,
//     borderLeftWidth: 0,
//     borderTopRightRadius: 4,
//     borderBottomRightRadius: 4,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   randomButtonStyle: {
//     borderWidth: 1,
//     borderColor: '#dedede',
//     color: '#fff',
//     fontSize: 14,
//     padding: 8,
//     textAlign: 'center',
//     borderRadius: 4,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
// });
// const wrapperStyle = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     columnGap: 10,
//     justifyContent: 'center',
//   },
//   subContainer: {
//     flexDirection: 'row',
//   },
//   titleContainer: {
//     marginTop: 10,
//     marginBottom: 10,
//   },
// });
// export default Search;
