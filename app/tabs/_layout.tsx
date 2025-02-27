import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
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
          paddingBottom: 2,
          paddingTop: 5,
          borderTopWidth: 0,
        }, // Dark slate background
  
        tabBarItemStyle: {
          justifyContent: 'center', // Center tab items
          alignItems: 'center'
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
        name="add"
        options={{
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'add': 'add-circle'} color={color} size={35}/>
          )
          //tabBarButton: (props) => <CustomFAB {...props} />,
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
  );
}
/*
function CustomFAB({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        position: "absolute",
        bottom: 10,
        alignSelf: "center",
        backgroundColor: "#ffd33d",
        width: 65,
        height: 65,
        borderRadius: 32.5,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
      }}
    >
      <Ionicons name="add" size={30} color="#212832" />
    </TouchableOpacity>
  );
}
*/