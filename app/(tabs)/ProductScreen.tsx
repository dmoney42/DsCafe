import { View, Text, Image } from 'react-native'
import React from 'react'
import productStyles from './ProductScreen.styles';
import { StatusBar } from 'expo-status-bar';

export default function ProductScreen() {
  return (
    <View style={productStyles.productDetailWrap}>
      <StatusBar style="light" />
      <Image source={require('../../assets/images/product-background.jpg')} 
      style={{height: 200, boroderBttomLeftRadius: 50, borderBottomRightRadius: 50}}
      />
      <Text>ProductScreen</Text>
    </View>
  )
}