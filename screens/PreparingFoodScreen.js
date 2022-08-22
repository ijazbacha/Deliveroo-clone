import { View, Text } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';

const PreparingFoodScreen = () => {
  return (
    <View className='bg-[#b38823] flex-1 justify-center items-center'>
      <Animatable.Image
      source={require('../assets/preparing-food.gif')}
      animation="slideInUp"
      iterationCount={1}
      className='h-96 w-96'
       />
       <Animatable.Text animation="slideInUp" iterationCount={1}
       className='text-lg text-white font-bold text-center'>
        Waiting for Restaurant to accept your order!
       </Animatable.Text>
    </View>
  )
}

export default PreparingFoodScreen