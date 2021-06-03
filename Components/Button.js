import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

const Button = () => {
  return (
    <TouchableWithoutFeedback>
      <Text></Text>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    borderRadius: "5",
  },
});
export default Button;
