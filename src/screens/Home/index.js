import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {data, images} from '../../utils';
import {styles} from './styles';

import {Svg, Polygon} from 'react-native-svg';
import ModalProduct from '../../components/Home/ModalProduct';

const renderTrending = (item, index, onPress) => {
  var marginIndex = {};
  if (index == 0) marginIndex = styles.mgLef;
  return (
    <View style={[styles.itemType, styles.typeShadow, marginIndex]}>
      <Text style={styles.txtType}>{item.type}</Text>

      <View style={[styles.cardType, {backgroundColor: item.bgColor}]}>
        <View style={styles.typeDesc}>
          <Text style={styles.typeName}>{item.name}</Text>
          <Text style={styles.typePrice}>{item.price}</Text>
        </View>
      </View>

      <View style={styles.cardSvg}>
        <Svg height="100%" width="100%">
          <Polygon points="0,0 160,0 160,80" fill="white"></Polygon>
        </Svg>
      </View>

      <TouchableOpacity style={styles.typeImg} onPress={() => onPress(item)}>
        <Image style={{width: '98%', height: 80}} source={item.img}></Image>
      </TouchableOpacity>
    </View>
  );
};

const renderRecently = (item, index, onPress) => {
  return (
    <TouchableOpacity
      style={{flexDirection: 'row', flex: 1}}
      onPress={() => onPress(item)}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <Image
          source={item.img}
          resizeMode="contain"
          style={{width: 130, height: 100}}></Image>
      </View>
      <View style={{flex: 1.5, justifyContent: 'center', marginLeft: 20}}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Home = () => {
  const [trending, setTrending] = useState(data.trending);
  const [recently, setRecently] = useState(data.recently);

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectSize, setSelectSize] = useState('');

  const onPressItem = item => {
    setSelectedItem(item);
  };
  console.log('value', trending);
  return (
    <View style={styles.container}>
      {selectedItem && (
        <ModalProduct
          item={selectedItem}
          size={selectSize}
          onClose={() => setSelectedItem(null)}></ModalProduct>
      )}
      {/* Title */}

      <Text style={styles.trendingLabel}>TRENDING</Text>

      {/* List categories */}
      <View style={styles.cateContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={trending}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) =>
            renderTrending(item, index, onPressItem)
          }></FlatList>
      </View>

      {/* List product */}
      <View style={[styles.productContainer, styles.productShadow]}>
        <View style={styles.imgRecently}>
          <Image
            style={{width: '100%', height: '100%'}}
            resizeMode="contain"
            source={images.recentlyViewedLabel}></Image>
        </View>
        <View style={styles.listProduct}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={recently}
            keyExtractor={item => item.id.toString()}
            renderItem={({item, index}) =>
              renderRecently(item, index, onPressItem)
            }></FlatList>
        </View>
      </View>
    </View>
  );
};

export default Home;
