import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../(tabs)/index"; //we import the homescreen (index.tsx) from the (tabs) folder
import { LogBox, Text, View } from "react-native";
import { HomeIcon } from "react-native-heroicons/outline";
import navigationStyles from "./appNavigation.styles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeIcon as HomeOutline, HeartIcon as HeartOutline, ShoppingBagIcon as BagOutline } from "react-native-heroicons/outline";
import { HomeIcon as HomeSolid, HeartIcon as HeartSolid, ShoppingBagIcon as BagSolid } from "react-native-heroicons/solid";
import ProductScreen from "../(tabs)/ProductScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);



function HomeTabs(){
    return(
        <Tab.Navigator
            screenOptions={({route})=>({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({focused, color, size}) => menuIcons(route,focused),
                tabBarStyle: {
                    marginBottom: 20,
                    borderRadius: 50,
                    backgroundColor: '#C27D48',
                },

                tabBarItemStyle: {
                    marginTop: 5,
                }
            })}
        >
            <Tab.Screen name="Shop" component={HomeScreen} options={{title: "Shop"}}/>
            <Tab.Screen name="Favorite" component={FavoriteScreen} />
            <Tab.Screen name="Cart" component={CartScreen} />
        </Tab.Navigator>
    )
}

export default function AppNavigation() {
    return(
        
            <Stack.Navigator screenOptions={{
                contentStyle: {backgroundColor: 'white'}
            }}>
                <Stack.Screen name="Main" options={{headerShown: false}} component={HomeTabs} />
                <Stack.Screen name="Product" options={{headerShown: false}} component={ProductScreen} />            
            </Stack.Navigator>
       
    )
}


const menuIcons = (route, focused) =>{
    //console.log("The value of route is: " + JSON.stringify(route));
    //console.log("The value of focused is: " + focused);
    let icon; 
    if(route.name=="Shop"){
        icon = focused? <HomeSolid size="30" color= "#C27D48" /> : <HomeOutline size="30" strokeWidth={2} color="white" />
    }else if(route.name=="Favorite"){
        icon = focused? <HeartSolid size="30" color= "#C27D48" /> : <HeartOutline size="30" strokeWidth={2} color="white" />
    }else if(route.name=="Cart"){
        icon = focused? <BagSolid size="30" color= "#C27D48" /> : <BagOutline size="30" strokeWidth={2} color="white" />
    }

    let buttonClass = focused ? navigationStyles.navigationButtonActive: {};
    return(
        <View style={[navigationStyles.navigationWrap, buttonClass]}>
            <Text>{icon}</Text>
        </View>
    )
} 


const FavoriteScreen = () => (
    <View><Text>Favorite Screen</Text></View>
);

const CartScreen = () => (
    <View><Text>Cart Screen</Text></View>
);