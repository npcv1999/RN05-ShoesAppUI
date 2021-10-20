import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Image,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../utils';

function renderShoeSizes(selectedItem, selectedSize) {
  const [selectSize, setSelectSize] = useState(selectedSize);
  return selectedItem.sizes.map((item, index) => {
    return (
      <TouchableOpacity
        key={index}
        style={{
          width: 35,
          height: 25,
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 5,
          marginBottom: 10,
          backgroundColor:
            selectedItem.sizes[index] == selectSize ? COLORS.white : null,
          borderWidth: 1,
          borderColor: COLORS.white,
          borderRadius: 5,
        }}
        onPress={() => {
          setSelectSize(item);
          console.log('select', selectSize);
        }}>
        <Text
          style={{
            color:
              selectedItem.sizes[index] == selectSize
                ? COLORS.black
                : COLORS.white,
            ...FONTS.body4,
          }}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  });
}

const ModalProduct = ({onClose, item, size}) => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={true}>
        <View style={styles.centeredView}>
          <View style={[styles.cardItem, {backgroundColor: item.bgColor}]}>
            <View style={{alignItems: 'center', marginTop: -SIZES.padding * 4}}>
              <Image
                source={item.img}
                resizeMode="contain"
                style={{
                  width: '100%',
                  height: 170,
                  transform: [{rotate: '-15deg'}],
                }}></Image>
            </View>

            <Text
              style={{
                marginTop: SIZES.padding,
                marginHorizontal: SIZES.padding,
                color: COLORS.white,
                ...FONTS.body2,
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                marginTop: SIZES.base / 2,
                marginHorizontal: SIZES.padding,
                color: COLORS.white,
                ...FONTS.body3,
              }}>
              {item.type}
            </Text>
            <Text
              style={{
                marginTop: SIZES.radius,
                marginHorizontal: SIZES.padding,
                color: COLORS.white,
                ...FONTS.h1,
              }}>
              {item.price}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: SIZES.radius,
                marginHorizontal: SIZES.padding,
              }}>
              <View>
                <Text style={{color: COLORS.white, ...FONTS.body3}}>
                  Select size
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                  marginLeft: SIZES.radius,
                }}>
                {renderShoeSizes(item, size)}
              </View>
              <TouchableOpacity onPress={onClose}>
                <Text>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalProduct;

const styles = StyleSheet.create({
  centeredView: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  cardItem: {
    width: '85%',
    justifyContent: 'center',
  },
});
