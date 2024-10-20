import { View, Text } from "react-native"
import { useState, useEffect } from "react"
import { Link } from "expo-router"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import Suggested from "../suggested"
import Liked from "../liked"
import Library from "../library"
const Tab = createMaterialTopTabNavigator()

export default function Foryou() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    let interval = setInterval(() => {
      setCount(c => c + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (

    <Tab.Navigator>
      <Tab.Screen name="suggested" component={Suggested} />
      <Tab.Screen name="liked" component={Liked} />
      <Tab.Screen name="library" component={Library} />
    </Tab.Navigator>
  )
}




