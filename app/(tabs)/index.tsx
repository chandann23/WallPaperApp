import { Link } from "expo-router"
import { SafeAreaView, Image, StyleSheet, View, FlatList } from "react-native"
import { useState } from "react"
import DowmloadPicture from "@/components/BottomSheet";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { WallPaper, useWallPapers } from "@/hooks/UseWallPapers";
import { ImageCard } from "@/components/ImageCard";
import { ThemedView } from "@/components/ThemedView";





export default function App() {


  const [selectedWallpaper, setSelectedWallpaper] = useState<WallPaper | null>(null);
  const [pictureOpen, setPictureOpen] = useState(false);
  const wallpapers = useWallPapers();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerImage={<Image style={{ flex: 1 }} source={{ uri: wallpapers[0].url }} />}
        headerBackgroundColor={{ dark: 'black', light: 'white' }}>
        <View style={styles.container}>
          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={wallpapers.filter((_,index)=>index%2===0)}
              renderItem={({ item }) =>
              <View style={styles.imageContainer}>
              <ImageCard
                wallpaper={item}
   onPress={()=>{
                  setSelectedWallpaper(item);
                }}
              />
                </View>
            }
              keyExtractor={(item) => item.name}
            />
          </ThemedView>
          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={wallpapers.filter((_,index)=>index%2===1)}
              renderItem={({ item }) =>
<View style={styles.imageContainer}>
              <ImageCard 
                wallpaper={item} 
                onPress={()=>{setSelectedWallpaper(item);}}
              />
                </View>}
              keyExtractor={(item) => item.name}
            />
          </ThemedView>
        </View>
      </ParallaxScrollView>
      {selectedWallpaper && <DowmloadPicture onClose={()=>setSelectedWallpaper(null)} wallpaper={selectedWallpaper} />}
    </SafeAreaView>

  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    paddingVertical: 10,
  }
})
