import React from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

const Wallpaper = ({ imageData,onPress }) => {
  const { height, width } = Dimensions.get("window");
  return (
    <TouchableWithoutFeedback onPress={onPress}>     
      <View style={{ height, width }}>
        <Image
          style={{ flex: 1, height: null, width: null }}
          resizeMode="cover"
          source={{ uri: imageData.urls.regular }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Wallpaper;
