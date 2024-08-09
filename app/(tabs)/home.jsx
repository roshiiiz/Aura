import { View, Text, FlatList,Image, RefreshControl, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from "../../constants"
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'
import { getAllPosts } from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite'
import VideoCard from '../../components/VideoCard'


const Home = () => {
const{data:posts,refetch}= useAppwrite(getAllPosts);


const [refreshing, setrefreshing] = useState(false)
const onRefresh = async () => {
  setrefreshing(true);
  await refetch();
  setrefreshing(false);
}

  return (
    <SafeAreaView className="bg-grey h-full">
      <FlatList
      data={posts}
      keyExtractor={(item)=>item.$id}
      renderItem={({item})=>(
        <VideoCard video={item}/>
      )}

      ListHeaderComponent={()=>(
        <View className="my-6 px-4 space-y-6">
          <View className="justify-between items-start flex-row mb-6">
            <View>
              <Text className="font-pmedium text-sm text-black-100">
                Welcome Back
              </Text>
              <Text className="text-2xl font-psemibold text-black">
                RoshiiiZ
              </Text>
            </View>
            <View className="mt-1.5">
              <Image
              source={images.logoSmall}
              className="w-9 h-10"
              resizeMode='contain'
              />
            </View>
          </View>
          <SearchInput/>
          <View className="w-full flex-1 pt-5 pb-8">
            <Text className=" text-black-100 text-lg font-pregular mb-3">
              Latest Videos
            </Text>
            <Trending posts={[{id:1},{id:2},{id:3}]??[]} />
          </View>
        </View>
      )}
      ListEmptyComponent={()=>(
        <EmptyState
        title="No Videos Found"
        subtitle="Be The First One To Upload A Video"
        />
      )}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />
      
    </SafeAreaView>
  )
}

export default Home