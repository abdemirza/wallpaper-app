import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Animated } from "react-native";
import Loading from "./Components/Loading";
import Wallpaper from "./Components/Wallpaper";
import Wallpapers from "./Components/Wallpapers";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [images, setImages] = useState([]);
  const [scale, setScale] = useState(new Animated.Value(1));
  const [imageFocused, setImageFocused] = useState(false);
  const imageFocusedHandler = () => {
    setImageFocused(!imageFocused);
  };
  const loadWallpapers = () => {
    setLoading(true);
    axios
      .get(
        "https://api.unsplash.com/photos/random?count=30&client_id=sYVQRmePC-FTrvknhdLKIl4BmlP1C6DmzOKZP1r5p4c"
      )
      .then((res) => {
        for (let item of res.data) setImages((prev) => [...prev, item]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loadWallpapers();
  }, [refresh]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loading ? (
        <Loading />
      ) : (
        <Wallpapers data={images} onPress={()=>imageFocusedHandler()} />
      )}
    </View>
  );
};

export default App;
