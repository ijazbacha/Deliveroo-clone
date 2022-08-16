import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React from 'react'

const image = { uri: "https://reactjs.org/logo-og.png" };

export default function CategoryCard({imgUrl, title}) {
  return (
    <TouchableOpacity className=' mb-2  mr-2 rounded bg-gray-200 relative'>
      <Image  source={{uri: imgUrl}} resizeMode="cover" className='w-20 h-20 rounded' />
      <Text className='text-white font-bold absolute bottom-1 left-1'>{title}</Text>
    </TouchableOpacity>
  )
}