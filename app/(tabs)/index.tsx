import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, FlatList} from 'react-native';
import styles from './HomeScreen.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import {MagnifyingGlassIcon, MapPinIcon} from 'react-native-heroicons/solid';
import {BellIcon} from 'react-native-heroicons/outline';
import {categories} from '../data/index';

const HomeScreen = () => {

  const [activeCategroy, setActiveCategory] = useState(1);
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
                      <BellIcon size="27"/>
                  </View>


                  {/*search bar area */}
                  <View style={styles.searchBarWrap}>
                    <View style={styles.searchBarContainer}>
                      <TextInput placeholder='Search' style={styles.searchTextBox} />
                      <TouchableOpacity>
                        <MagnifyingGlassIcon size="25" strokeWidth={2} color="white"/>
                    </TouchableOpacity>           
                    </View>
                  </View>


                  {/* categories*/}
                  <View style={styles.categoriesWrap}>
                      <FlatList
                        style={styles.categoryButtonFlatList}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={categories}
                        keyExtractor={item=> item.id}
                        //className="overflow-visible"
                        renderItem={({item})=>{

                          let isActive = item.id==activeCategroy;
                          let activeTextClass = isActive ? styles.activeCategoryButtonText : styles.notActiveCategoryButtonText;

                          return(
                            <TouchableOpacity
                              onPress={()=>{setActiveCategory(item.id)}}
                              style={[styles.categoryButtons,{backgroundColor: isActive? 'brown' : 'rgba(0,0,0,0.07)'}]}
                            >
                              <Text style={styles.categoryButtonText}>{item.title}</Text>
                            </TouchableOpacity>
                          )
                        }}
                        />
                        
                  </View>

                  <View></View>

          
          </SafeAreaView>


    </View>


  );
};

export default HomeScreen;