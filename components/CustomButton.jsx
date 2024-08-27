import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({title,handlePress,containerStyles, textStyles, loading}) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={0.7}
    className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${loading ? 'opacity-50':''}`}
      disabled={loading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton