import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface FABProps {
  onPress: () => void;
  className?: string;
}

export default function FAB({ onPress, className }: FABProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`absolute bottom-5 left-1/2 -translate-x-1/2 bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${className}`}
    >
      <Ionicons name="add" size={32} color="black" />
    </TouchableOpacity>
  );
}
