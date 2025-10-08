import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function HomeScreen() {
    const handleLogout = async () => {
      try {
        await signOut(auth);
        console.log("User signed out");
      } catch (error) {
        console.log("Logout error:", error.message);
      }
    };
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Text style={styles.email}>{auth.currentUser?.email}</Text>

      <Button title="Logout" onPress={handleLogout} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})