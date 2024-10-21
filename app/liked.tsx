  import { SplitView } from "@/components/splitView"
import { useLikedWallpapers, useWallpapers } from "@/hooks/UseWallPapers"
import { View, Text } from "react-native"
  import { ThemedView } from "@/components/ThemedView"
export default function Liked() {
    const wallpapers = useLikedWallpapers()
  return (
 
      <ThemedView style={{ flex: 1 }}>
        <SplitView wallpapers={wallpapers}/>
      </ThemedView>
  )
}
