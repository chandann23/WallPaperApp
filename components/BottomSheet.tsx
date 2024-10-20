import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet ,Image, Button, useColorScheme} from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { WallPaper } from '@/hooks/UseWallPapers';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
const DowmloadPicture = ({ onClose,wallpaper }: { onClose: () => void ,wallpaper:WallPaper}) => {
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
        <Image style={styles.image} source={{uri:wallpaper.url}} />
          <View style={styles.topbar}>
<Ionicons 
  name={"close"} 
  size={24}
  color ={theme === "light" ? Colors.light.icon : Colors.dark.icon}
  />
<Ionicons 
  name={"heart"}
  size={24}
  color ={theme === "light" ? Colors.light.icon : Colors.dark.icon}
  />
          </View>
        <Button title='Downlaod'></Button>
        </BottomSheetView>
      </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  image: {
    height: '60%',
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
  }
});

export default DowmloadPicture;
