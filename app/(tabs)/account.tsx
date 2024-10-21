import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Button, Pressable, Text, View, useColorScheme, StyleSheet, Appearance } from "react-native";
import { Colors } from '@/constants/Colors';
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ScrollView } from "react-native-gesture-handler";
import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";

export default function account() {
  return <ThemedSafeAreaView style={{ flex: 1 }}>
    <ScrollView style={{ flex: 1 }}>
      <Header />
      <ThemedView style={{ flex: 1 }}>
        <LoginButtons />
        <ThemeSelector />
        <AppIcons />
        <ThemedText style={{ fontSize: 12, fontWeight: "light", textAlign: "center" }}>Panels © 2024</ThemedText>


        <ThemedText style={{ fontSize: 12, fontWeight: "light", textAlign: "center" }}>Panels WallPaper Mobile App LLC.</ThemedText>

        <ThemedText style={{ fontSize: 25, fontWeight: "bold", padding: 20 }}>ABout</ThemedText>

        <ThemedText style={{ fontSize: 18, fontWeight: "semibold", padding: 20 }}>Account</ThemedText>
        <ThemedText style={{ fontSize: 18, fontWeight: "semibold", padding: 20 }}>Privacy Policy</ThemedText>
        <ThemedText style={{ fontSize: 18, fontWeight: "semibold", padding: 20 }}>Terms of Service</ThemedText>

        <ThemedText style={{ fontSize: 18, fontWeight: "semibold", padding: 20 }}>Version 1.2.3</ThemedText>

      </ThemedView>
    </ScrollView>
  </ThemedSafeAreaView>
}



function AppIcons() {
  const theme = useColorScheme() ?? "light";
  return (
    <ThemedView style={{ flex: 1, padding: 20 }}>
      <ThemedText style={{ fontSize: 25, fontWeight: "600" }}>App icons</ThemedText>
      <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 15, }}>

        <Pressable style={{
          padding: 10,
          borderWidth: 1,
          borderColor: theme === 'light' ? Colors.light.text : Colors.dark.icon, borderRadius: 5, flex: 0.3
        }}>
          <ThemedText style={{ width: "100%", textAlign: "center" }}>Add</ThemedText>
        </Pressable>


        <Pressable style={{
          padding: 10,
          borderWidth: 1,
          borderColor: theme === 'light' ? Colors.light.text : Colors.dark.icon, borderRadius: 5, flex: 0.3
        }}>
          <ThemedText style={{ width: "100%", textAlign: "center" }}>Add</ThemedText>
        </Pressable>


        <Pressable style={{
          padding: 10,
          borderWidth: 1,
          borderColor: theme === 'light' ? Colors.light.text : Colors.dark.icon, borderRadius: 5, flex: 0.3
        }}>
          <ThemedText style={{ width: "100%", textAlign: "center" }}>Add</ThemedText>
        </Pressable>

      </View>

    </ThemedView>
  )
}


function ThemeSelector() {
  return <ThemedView style={styles.margin}>
    <ThemedText style={styles.textBig}>Settings</ThemedText>
    <ThemedText>Theme</ThemedText>
    <ThemedView style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
      <ThemeButton title={"Dark"} selected={false} colorScheme="dark" />
      <ThemeButton title={"Light"} selected={false} colorScheme="light" />
      <ThemeButton title={"System"} selected={false} colorScheme={null} />
    </ThemedView>
  </ThemedView>
}

function ThemeButton({ title, selected, colorScheme }: { selected: boolean, title: string, colorScheme: "dark" | "light" | null }) {
  const theme = useColorScheme() ?? "light";

  return <Pressable style={{
    padding: 10,
    borderWidth: 1,
    borderColor: theme === 'light' ? Colors.light.text : Colors.dark.icon, borderRadius: 5, flex: 0.3
  }}>
    <ThemedText style={{ width: "100%", textAlign: "center" }}>{title}</ThemedText>
  </Pressable>
}

function LoginButtons() {
  const theme = useColorScheme() ?? 'light';
  return <>
    <AuthButton
      label={"Sign in"}
      icon={<Ionicons
        name={'logo-google'}
        size={24}
        color={theme === 'light' ? Colors.light.text : Colors.dark.icon}
      />}
    />
    <AuthButton
      label={"Sign in"}
      icon={<Ionicons
        name={'logo-apple'}
        size={24}
        color={theme === 'light' ? Colors.light.text : Colors.dark.icon}
      />}
    />
  </>
}

function Header() {
  return <ThemedView style={styles.topbar}>
    <ThemedText style={styles.textBig}>Panels</ThemedText>
    <ThemedText>Sign in to save your data</ThemedText>
  </ThemedView>
}

function AuthButton({ label, icon }: {
  label: string,
  icon: any
}) {
  const theme = useColorScheme() ?? 'light';

  return <Pressable style={{
    backgroundColor: theme,
    padding: 10,
    marginHorizontal: 40,
    marginVertical: 5,
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme === 'light' ? Colors.light.text : Colors.dark.icon
  }}>
    {icon}
    <ThemedText style={{
      fontSize: 20,
      fontWeight: "600",
    }}>{label}</ThemedText>
  </Pressable>
}

const styles = StyleSheet.create({
  textBig: {
    fontSize: 25,
    fontWeight: "600",
    marginBottom: 10,
  },
  topbar: {
    padding: 20,
  },
  themeSelectorContainer: {
    flex: 1
  },
  themeSelectorChild: {

  },
  margin: {
    padding: 20
  }

});
