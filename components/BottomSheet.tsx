import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Image, Button, useColorScheme, Pressable } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { WallPaper } from '@/hooks/UseWallPapers';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { ThemedText } from './ThemedText';
const DowmloadPicture = ({ onClose, wallpaper }: { onClose: () => void, wallpaper: WallPaper }) => {
  // ref
  const theme = useColorScheme() ?? 'light';
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <BottomSheet
      onClose={onClose}
      snapPoints={["95%"]}
      enablePanDownToClose={true}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      handleIndicatorStyle={{
        display: 'none',
      }}
      handleStyle={{
        display: 'none',
      }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Image style={styles.image} source={{ uri: wallpaper.url }} />
        <View style={styles.topbar}>
          <Ionicons
            name={"close"}
            size={24}
            color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
          />
          <View style={styles.iconsBar}>
            <Ionicons
              name={"heart"}
              size={24}
              color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
            />
            <Ionicons
              name={"share"}
              size={24}
              color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
              style={{ paddingLeft: 6 }}
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          <ThemedText style={styles.text}>{wallpaper.name}</ThemedText>
        </View>
        <DownlaodButton />
      </BottomSheetView>
    </BottomSheet>
  );
};

function DownlaodButton() {

  const theme = useColorScheme() ?? 'light';
  return (

    <Pressable
      style={
        { backgroundColor: "black", padding: 10, margin: 20, justifyContent: "center", flexDirection: "row", borderRadius: 10 }}>

      <Ionicons
        style={{ paddingRight: 5, paddingBottom: 3 }}
        name={"download"}
        size={24}
        color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
      />

      <Text style={{ fontSize: 20, color: "white", fontWeight: "600" }}>Download</Text>

    </Pressable>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  image: {
    height: '80%',
    borderRadius: 15,
  },
  topbar: {
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  iconsBar: {
    display: 'flex',
    flexDirection: 'row',
  },
  textContainer: {
    width: '100%'
  },
  text: {
    fontSize: 30,
    fontWeight: "600",
    paddingTop: 20,
    color: Colors.light.text,
    textAlign: 'center',

  }

});

export default DowmloadPicture;
