import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ResizeMode, Video } from "expo-av";
import { icons } from "../constants";

const TempVideoCard = ({ video, title, users, avatar, thumbnail }) => {
  const [play, setPlay] = useState(false);

  const videoSource = video;
  const videoTitle = title || videoData.title;
  const videoUsers = users || videoData.users || {};
  const videoAvatar = avatar || videoUsers.avatar;
  const videoThumbnail = thumbnail || videoData.thumbnail;
  const username = videoUsers.username || videoUsers;
  

  return (
    
    <View className="flex flex-col items-center px-4 mb-14">
      <View className="flex flex-row gap-3 items-start">
        <View className="flex justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary flex justify-center items-center p-0.5">
            <Image
              source={{ uri: videoAvatar }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
          </View>

          <View className="flex justify-center flex-1 ml-3 gap-y-1">
            <Text
              className="font-psemibold text-sm text-black"
              numberOfLines={1}
            >
              {videoTitle}
            </Text>
            <Text
              className="text-xs text-black font-pregular"
              numberOfLines={1}
            >
              {username}
            </Text>
          </View>
        </View>

        <View className="pt-2">
          <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
        </View>
      </View>

      {play ? (
        <Video
          source={{ uri: videoSource }}
          className="w-full h-60 rounded-xl mt-3"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
          className="w-full h-60 rounded-xl mt-3 relative flex justify-center items-center"
        >
          <Image
            source={{ uri: videoThumbnail }}
            className="w-full h-full rounded-xl mt-3"
            resizeMode="cover"
          />

          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TempVideoCard;
