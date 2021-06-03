import React from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";

const Wallpaper = ({ imageData,onPress}) => {
  const { height, width } = Dimensions.get("window");
  return (
    <TouchableWithoutFeedback onPress={onPress}>     
      <Animated.View style={{ height, width }}>
        <Image
          style={{ flex: 1, height: null, width: null }}
          resizeMode="cover"
          source={{ uri: imageData.urls.regular }}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Wallpaper;
