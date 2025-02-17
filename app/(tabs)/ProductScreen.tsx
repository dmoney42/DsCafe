import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import productStyles from './ProductScreen.styles';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftCircleIcon } from 'react-native-heroicons/outline';
import { HeartIcon, StarIcon } from 'react-native-heroicons/solid';

export default function ProductScreen(props) {
    const item = props.route.params;
    const navigation = useNavigation();
    const [size, setSize] = useState('small');

    console.log("The current size selected is: " + size);

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

            <View style={productStyles.coffeeSizeContainer}>

                <TouchableOpacity 
                    style={[productStyles.coffeeSizeButton, size=="small" ? productStyles.activeSizeButton : productStyles.notActiveSizeButton]}
                    onPress={()=> setSize('small')}
                >
                    <Text style={[size=='small'? productStyles.activeSizeButtonText : productStyles.notActiveSizeButtonText]}>Small</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[productStyles.coffeeSizeButton, size=="medium" ? productStyles.activeSizeButton : productStyles.notActiveSizeButton]}
                    onPress={()=> setSize('medium')}
                >
                    <Text style={[size=='medium'? productStyles.activeSizeButtonText : productStyles.notActiveSizeButtonText]}>Medium</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[productStyles.coffeeSizeButton, size=="large" ? productStyles.activeSizeButton : productStyles.notActiveSizeButton]}
                    onPress={()=> setSize('large')}
                >
                    <Text style={[size=='large'? productStyles.activeSizeButtonText : productStyles.notActiveSizeButtonText]}>Large</Text>
                </TouchableOpacity>

                                               
            </View>

        </View>

        <View style={productStyles.productAboutWrap}>

            <Text style={productStyles.productAboutTitle}>
                About
            </Text>

            <Text style={productStyles.productAboutDescription}>
                {item.desc}
            </Text>
        </View>

        <View style={productStyles.volumeWrap}>
            <View style={productStyles.volumeContainer}>
                <Text style={productStyles.volumeContainerTitle}>Volume</Text>
            </View>
        </View>

      </SafeAreaView>
    </View>
  )
}