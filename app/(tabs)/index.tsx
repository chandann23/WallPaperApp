import { SafeAreaView, Image, StyleSheet, View, FlatList } from "react-native"
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { WallPaper, useWallpapers } from "@/hooks/UseWallPapers";
import { SplitView } from "@/components/splitView";
import DowmloadPicture from "@/components/BottomSheet";
import { useState } from "react"



export default function App() {

  const [selectedWallpaper, setSelectedWallpaper] = useState<WallPaper | null>(null);
  const wallpapers = useWallpapers();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerImage={<Image style={{ flex: 1 }} source={{ uri: wallpapers[0].url }} />}
        headerBackgroundColor={{ dark: 'black', light: 'white' }}>
        <SplitView wallpapers={wallpapers} />
      </ParallaxScrollView>

    </SafeAreaView>

  )
}

