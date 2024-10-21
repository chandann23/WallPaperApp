import { View, Text } from "react-native"
import { SplitView } from "@/components/splitView";
import { useLibraryWallpapers } from "@/hooks/UseWallPapers";
import { ThemedView } from "@/components/ThemedView";

export default function Library() {
  const wallpapers = useLibraryWallpapers()
  return (
    <ThemedView style={{ flex: 1 }}>
      <SplitView wallpapers={wallpapers} />
    </ThemedView>
  )
} 
