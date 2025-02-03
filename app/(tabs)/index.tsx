import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from './HomeScreen.styles';
import { SafeAreaView } from 'react-native-safe-area-context';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/coffee-bean-background.png')}
      style={styles.backgroundImage}/>
      <Text style={styles.text}>Welcome to the Home Screen!</Text>


    <SafeAreaView className={styles.topIconsWrap}>
      <Image source={require('../../assets/images/empty-avatar.jpg')}
      style={styles.backgroundImage}/>
    </SafeAreaView>


    </View>


  );
};

export default HomeScreen;