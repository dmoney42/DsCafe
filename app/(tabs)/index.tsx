import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from './HomeScreen.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import {MapPinIcon} from 'react-native-heroicons/solid';
import {BellIcon} from 'react-native-heroicons/outline'


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/coffee-bean-background.png')}
      style={styles.backgroundImage}/>
   

    
    <SafeAreaView style={styles.topAreaWrap}>

      {/* avatar and bell icons */}

      
      <View style={styles.topIconsWrap}>
        <Image source={require('../../assets/images/empty-avatar.png')} style={styles.avatar}/>

          <View style={styles.currentlocationWrap}>
            <MapPinIcon size={25}/>
            <Text style={styles.currentLocation}>Palm Coast, FL</Text>
          </View>

      </View>
      <BellIcon size="27"/>
    
    </SafeAreaView>


    </View>


  );
};

export default HomeScreen;