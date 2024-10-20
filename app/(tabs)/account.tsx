import { Link } from "expo-router"
import { View, Text, Button, SafeAreaView } from "react-native"
import { useState } from "react"
import DowmloadPicture from "@/components/BottomSheet";
export default function Account() {

  const [pictureOpen, setPictureOpen] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <Text> Account </Text>
      <Button title="Open bottom sheet " onPress={() => setPictureOpen(true)} />
      {pictureOpen && <DowmloadPicture onClose={() => setPictureOpen(false)} />}

    </View>
  )
}

