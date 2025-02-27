import React from 'react';
import "../../global.css";
import { View, Text} from "react-native";


export default function Index() {
  return (
    <View className="bg-slate-900 flex-1 justify-center items-center">
      <Text className="text-white text-lg font-bold">Welcome to the Home Screen</Text>
    </View>
  );
}
