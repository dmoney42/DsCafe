import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, FlatList, Dimensions} from 'react-native';
import styles from './HomeScreen.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import {MagnifyingGlassIcon, MapPinIcon} from 'react-native-heroicons/solid';
import {BellIcon} from 'react-native-heroicons/outline';
import {categories} from '../data/index';
import {coffeeItems} from '../data/index';
import ReanimatedCarousel from 'react-native-reanimated-carousel';
import CoffeeCard from '../../components/CoffeeCard';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const HomeScreen = () => {

  const [activeCategroy, setActiveCategory] = useState(1);


  //console.log("The style for coffee cards wrap is:", styles.coffeeCardsWrap);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/coffee-bean-background.png')}
      style={styles.backgroundImage}/>
   

    
          <SafeAreaView style={styles.topAreaWrap}>

                  {/* avatar and bell icons */}
                  <View style={styles.topIconsWrap}>
                    <Image source={require('../../assets/images/empty-avatar.png')} style={styles.avatar}/>

                      <View style={styles.currentlocationWrap}>
                        <Text><MapPinIcon size={25}/></Text>
                        <Text style={styles.currentLocation}>Palm Coast, FL</Text>
                      </View>
                      <Text><BellIcon size="27"/></Text>
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
                              style={[styles.categoryButtons,{backgroundColor: isActive? '#C27D48' : 'rgba(0,0,0,0.07)'}]}
                            >
                              <Text style={styles.categoryButtonText}>{item.title}</Text>
                            </TouchableOpacity>
                          )
                        }}
                        />
                     
                  </View>
                  
                  {/*Coffee Carousel */}
                  <View style={styles.coffeeCarouselWrap}> {/* ✅ Ensure proper height */}
                    
                      <FlatList
                        data={coffeeItems.filter(item => item.id === activeCategroy)} // ✅ Show only selected category
                        keyExtractor={(item) => String(item.id)} // ✅ Unique key for each item
                        showsVerticalScrollIndicator={false} // ✅ Hides scrollbar for cleaner UI
                        contentContainerStyle={{ paddingBottom: 100 }} // ✅ Prevents bottom cut-off
                        style={{ flexGrow: 1 }}
                        renderItem={({ item }) => <CoffeeCard item={item} />} // ✅ Display each CoffeeCard
                      />
                    
                  </View>
        
          </SafeAreaView>


    </View>


  );
};

export default HomeScreen;