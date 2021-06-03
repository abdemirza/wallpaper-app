import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, ActivityIndicator, Animated, Button } from "react-native";
import Loading from "./Components/Loading";
import Wallpaper from "./Components/Wallpaper";
import Wallpapers from "./Components/Wallpapers";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [images, setImages] = useState([]);
  const [imageFocused, setImageFocused] = useState(false);
  const [scale, setScale] = useState(new Animated.Value(1));
  const imageFocusedHandler = () => {
    setImageFocused(!imageFocused);
    if(imageFocused){}

  };
  const loadWallpapers = () => {
    setLoading(true);
    axios
      .get(
        "https://api.unsplash.com/photos/random?count=30&client_id=sYVQRmePC-FTrvknhdLKIl4BmlP1C6DmzOKZP1r5p4c"
      )
      .then((res) => {
        setImages([])
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
        <Wallpapers data={images} onPress={() => imageFocusedHandler()} />
      )}
      {imageFocused && (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Button
            title="Refresh"
            onPress={() => {
              loadWallpapers()
            }}
          />
        </View>
      )}
    </View>
  );
};

export default App;
