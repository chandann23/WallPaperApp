import { View, Text, SafeAreaView, StyleSheet, useColorScheme } from "react-native"
import { useState, useEffect } from "react"
import { Link } from "expo-router"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import Suggested from "../suggested"
import Liked from "../liked"
import Library from "../library"
import { Colors } from "@/constants/Colors"
import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView"
const Tab = createMaterialTopTabNavigator()

export default function Foryou() {
  const theme = useColorScheme() ?? "light"

  const [count, setCount] = useState(0)

  useEffect(() => {
    let interval = setInterval(() => {
      setCount(c => c + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
  <ThemedSafeAreaView style={styles.container}>
    <Tab.Navigator  
      style={{flex:1}}
      screenOptions={{
        tabBarActiveTintColor:Colors[theme].tint,
        tabBarStyle:{
          backgroundColor : Colors[theme].background
        },
        tabBarIndicatorStyle:{
          backgroundColor: Colors[theme].notch,
          height:5

        }
      }}

    >
      <Tab.Screen name="library" component={Library} />
      <Tab.Screen name="liked" component={Liked} />
      <Tab.Screen name="suggested" component={Suggested} />
    </Tab.Navigator>
      </ThemedSafeAreaView>
  )
}
const styles = StyleSheet.create({
  container : {
    flex:1
  }
})



