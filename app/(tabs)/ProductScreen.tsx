import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import productStyles from './ProductScreen.styles';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftCircleIcon } from 'react-native-heroicons/outline';
import { HeartIcon, StarIcon } from 'react-native-heroicons/solid';

export default function ProductScreen(props) {
    const item = props.route.params;
    const navigation = useNavigation();
  return (
    <View style={productStyles.productDetailWrap}>
      <StatusBar style="light" />
      <Image source={require('../../assets/images/product-background.jpg')} 
      style={productStyles.productBackgroundImage}
      />
      <Text>ProductScreen</Text>
      <SafeAreaView style={productStyles.topIconsContainer}>
        <View style={productStyles.topIconsContainerChild1}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
                <ArrowLeftCircleIcon size="50" strokeWidth={1.8} color="white" />
            </TouchableOpacity>


            <TouchableOpacity style={productStyles.heartButton}>
                <Text><HeartIcon size="24" color="white" /></Text>
            </TouchableOpacity>
        </View>

        <View style={productStyles.productScreenCoffeeImageContainer}>
            <Image style={productStyles.coffeeImage} source={item.image} />
        </View>

        <View style={productStyles.reviewContainer}>
            <Text><StarIcon size="15" color="white" /></Text>
            <Text style={productStyles.reviewContainerText}>{item.stars}</Text>
        </View>

        <View style={productStyles.priceContainer}>
            <Text style={productStyles.priceContainerItemName}>{item.name}</Text>

            <Text style={productStyles.priceContainerPrice}>${item.price}</Text>
        </View>

        <View style={productStyles.coffeeSizeWrap}>
            <Text style={productStyles.coffeeSizeText}>
                Coffee Size
            </Text>
        </View>


      </SafeAreaView>
    </View>
  )
}