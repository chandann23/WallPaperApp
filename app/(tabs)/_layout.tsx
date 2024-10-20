import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
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
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />

    </Tabs>
  );
}

//slot is similar to childern in next js
