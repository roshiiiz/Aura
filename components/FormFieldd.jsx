import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import {icons} from '../constants'

const FormFieldd = ({title,value,placeholder,handleChangeText,otherStyles,...props}) => {
    const [showPassword, setshowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="w-full h-16 px-4 bg-grey rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center">
        <TextInput
        className="flex-1 text-black font-psemibold "
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7B7B8B"
        onChangeText={handleChangeText}
        secureTextEntry={title==='Password' && !showPassword}
        />

         {title==='Password' && (
            <TouchableOpacity onPress={()=>
                setshowPassword(!showPassword)}>
                    <Image source={!showPassword ? icons.eye:
                    icons.eyehide} className="w-6 h-6 resizeMode='contain'"
                    />
                </TouchableOpacity>
         )}
      </View>

    </View>
  )
}

export default FormFieldd