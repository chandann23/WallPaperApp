import { SplitView } from "@/components/splitView"
import { useSuggestedWallpapers,  } from "@/hooks/UseWallPapers"
import { View, Text } from "react-native"
import { ThemedView } from "@/components/ThemedView"
export default function Suggested() {
  const wallpapers = useSuggestedWallpapers()
  return (
    <ThemedView style={{ flex: 1 }}>
      <SplitView wallpapers={wallpapers}/>
    </ThemedView>
  )
} 
