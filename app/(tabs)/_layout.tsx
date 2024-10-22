import { Colors } from '@/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';
export default function TabLayout() {
  const theme = useColorScheme() ?? "light";
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: Colors[theme].tint,
      tabBarStyle: {
        backgroundColor: Colors[theme].background,
      },

    }}>
      <Tabs.Screen

        name="foryou"
        options={{

          title: 'For you',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />



      <Tabs.Screen
        name="index"
        options={{
          title: 'explore',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: 'account',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
        }}
      />

    </Tabs>
  );
}

//slot is similar to childern in next js
