import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import FAB from "../../components/Button";
import { Button } from 'react-native';

export default function TabLayout() {
  return (
    <>
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ffd33d',
        tabBarStyle: { 
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          backgroundColor: '#263238', // Transparent effect
          borderRadius: 20,
          height: 65,
          paddingBottom: 5,
          paddingTop: 5,
          borderTopWidth: 0,
          paddingHorizontal: 30
        }, // Dark slate background
  
        tabBarItemStyle: {
          justifyContent: 'center', // Center tab items
          alignItems: 'center',
          flex: 1,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={35} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'chatbubbles' : 'chatbubbles-outline'} color={color} size={35}/>
          ),
        }}
      />
      <Tabs.Screen
          name="placeholder"
          options={{
            tabBarLabel: () => null,
            tabBarIcon: () => null, // No icon, just spacing
          }}
        />
      <Tabs.Screen
        name="calender"
        options={{
          title: 'Calendar',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'calendar' : 'calendar-outline'} color={color} size={35}/>
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'notifications' : 'notifications-outline'} color={color} size={35}/>
          ),
        }}
      />
    </Tabs>
    {/* Floating Action Button */}
    <FAB onPress={() => console.log("FAB Pressed!")} />
    </>
  );
}
