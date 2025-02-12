import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import coffeeCardStyles from './ui/CoffeeCard.styles';

export default function CoffeeCard({item}){
  return (
    


        <View style={coffeeCardStyles.coffeeCardWrap}> 
          <View style={coffeeCardStyles.coffeeCardShadow}>
            <Image style={coffeeCardStyles.coffeeCardImage} source={item.image}/>
          </View>
          
          <View style={coffeeCardStyles.coffeeCardTextWrap}>
            <Text style={coffeeCardStyles.coffeeCardText}>
              {item.name}
            </Text>

          </View>

        </View>
 
    

    
  )
}
