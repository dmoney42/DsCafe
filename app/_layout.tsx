import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import AppNavigation from './navigation/appNavigation'; // ✅ Import the new navigation system

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {


  return (
    <>
      <StatusBar style="auto" />  
      <AppNavigation />  
      
    </>

    
  );
}
