import { View, Text,Image } from 'react-native'
import React from 'react'
import {images} from "../constants"
import CustomButton from "./CustomButton"
import { router } from 'expo-router'

const EmptyState = ({title,subtitle}) => {
  return (
    <View className="justify-center items-center  px-4 ">
        <Image source={images.empty} className="w-[270px] h-[300px]"resizeMode='contain'/>   
        <Text className="font-pmedium text-sm text-black-100">
         {subtitle}
        </Text>
        <Text className="text-xl text-center font-psemibold text-black mt-2">
            {title}
        </Text> 
        <CustomButton
        title="Create Video"
        handlePress={()=> router.push('/create')}
        containerStyles="w-full my-5"
        />
    </View>
  )
}

export default EmptyState