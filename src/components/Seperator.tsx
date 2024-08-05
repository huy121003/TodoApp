import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
interface widthHeight {
  width: number;
  height: number;
}
const Seperator: React.FC<widthHeight> = ({height,width}) => {
  return <View style={{width: width, height: height}} />;
};

export default Seperator;

const styles = StyleSheet.create({});
