import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import coffeeCardStyles from './CoffeeCard.styles';
import { PlusIcon, StarIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

export default function CoffeeCard({item}){

  const navigation = useNavigation();
  return (
  
        <View style={coffeeCardStyles.coffeeCardWrap}> 
          <View style={coffeeCardStyles.coffeeCardShadow}>
            <Image style={coffeeCardStyles.coffeeCardImage} source={item.image}/>
          </View>
          
          <View style={coffeeCardStyles.coffeeCardTextWrap}>
                <Text style={coffeeCardStyles.coffeeCardText}>
                  {item.name}
                </Text>

                <View style={coffeeCardStyles.reviewsWrap}>
                  <Text><StarIcon size="15" color="white" /></Text>
                  <Text style={coffeeCardStyles.reviewStars}>{item.stars}</Text>
                </View>

                <View style={coffeeCardStyles.volumeWrap}>
                  <Text style={coffeeCardStyles.volumeText1}>Volume: </Text>
                  <Text style={coffeeCardStyles.volumeText2}>{item.volume}</Text>
                </View>

                <View style={coffeeCardStyles.priceWrap}>
                  <Text style={coffeeCardStyles.priceText}>${item.price}</Text>
                  <TouchableOpacity 
                    onPress={()=>{
                      navigation.navigate('Product', {...item})
                    }}
                    style={coffeeCardStyles.plusIconWrap}>
                    <Text><PlusIcon size="25" strokeWidth={2} color="brown"/></Text>
                  </TouchableOpacity>
                </View>

          </View>



        </View>
 
    

    
  )
}
