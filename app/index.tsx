//Not sure why TS is saying this is not present because it is and because it shows on the web?
//FIXME: Doesn't display in Expo Go. Why?

import beachImage from '@/assets/meditation-images/beach.webp';
import React from 'react';
import { ImageBackground, Text, View } from 'react-native';

const App = () => {
  return (
    <View className='flex-1'>
      <ImageBackground source={beachImage} resizeMode='cover' className='flex-1'></ImageBackground>
      <Text>App</Text>
    </View>
  )
}

export default App;