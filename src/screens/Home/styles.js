import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../utils';

export const styles = StyleSheet.create({
  // Common
  mgLef: {
    marginLeft: SIZES.padding,
  },

  //Container
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  //Trending
  trendingLabel: {
    ...FONTS.largeTitleBold,
    marginTop: SIZES.radius,
    marginHorizontal: SIZES.padding,
  },

  //Cate
  cateContainer: {
    marginTop: SIZES.radius,
    height: 260,
  },

  itemType: {
    width: 180,
    height: 240,
    marginHorizontal: SIZES.base,
    justifyContent: 'center',
  },
  //SVG card
  cardSvg: {
    position: 'absolute',
    top: 27,
    right: 0,
    width: '95%',
    height: '100%',
  },

  txtType: {
    ...FONTS.h5,
    color: COLORS.gray,
  },

  cardType: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: SIZES.base,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginRight: SIZES.padding,
    marginTop: SIZES.base,
    paddingLeft: SIZES.radius,
    paddingBottom: SIZES.padding,
  },
  typeShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 4.65,
    elevation: 10,
  },

  typeImg: {
    position: 'absolute',

    top: 50,
    right: 0,
    width: '98%',
    height: 80,
    transform: [{rotate: '-15deg'}],
  },
  typeDesc: {
    height: '35%',
    justifyContent: 'space-between',
  },
  typeName: {
    width: '75%',
    ...FONTS.body4,
    color: COLORS.white,
  },
  typePrice: {
    ...FONTS.h3,
    color: COLORS.white,
  },

  //Product
  productContainer: {
    flex: 1,
    marginTop: SIZES.padding,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexDirection: 'row',
  },
  productShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 4.65,
    elevation: 15,
  },

  imgRecently: {
    width: 70,
    marginLeft: SIZES.base,
  },
  listProduct: {
    flex: 1,
    paddingBottom: SIZES.padding,
  },
  productName: {
    ...FONTS.body3,
    color: COLORS.gray,
  },
  productPrice: {
    ...FONTS.h3,
    color: COLORS.black,
  },
});
