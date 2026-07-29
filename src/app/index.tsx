import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Link, useRouter} from "expo-router";
import { StatusBar } from "react-native";

import Button from "@/components/common/button";
import Input from "@/components/common/input";
import React from "react";
import signup from "./(auth)/signup";

export default function auth() {
  const [ email, setEmail] = useState("");
  const [ password, setPassword] = useState("");
  const router = useRouter();

  const seConnecter = () => {

    if(
      email.trim() === "" ||
      password.trim() === ""
    ){
      alert("veuillez remplir les deux champs");
      return;
    }

     router.push("/Home/index");
  }
  return (
    
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>connexion</Text>
     
      {/* champ email */}

    <Input
     placeholder="entrer votre email"
     value={email}
     onChangeText={setEmail}
     />

      {/* champ mot de passe */}
      
    <Input
    placeholder="entrer votre mot de passe"
    value={password}
    onChangeText={setPassword}
    secureTextEntry
    />

    {/* boutton connexion */}

    <Button
      title="se connecter"
      onPress={seConnecter}
    />
    <View>
      <Link  href="/signup"  style={styles.signup}>s'inscrire</Link>
    </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#2563EB",
  },
  signup: {
    padding: 10,
    color: "blue",
  },
})