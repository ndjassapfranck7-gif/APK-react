import { useState } from "react";
import { Text, TextInput, StyleSheet} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import Input from "@/components/common/input";
import Button from "@/components/common/button";

export default function signup() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassowrd] = useState("");

  const router = useRouter();
  const inscription = () => {

    if (
    nom.trim() === "" ||
    email.trim() === "" ||
    password.trim() === "" ||
    confirmpassword.trim() === ""
  ) {
    alert("Veuillez remplir tous les champs.");
    return;
  }

  if (confirmpassword !== password) {
    alert("les mot de passe ne corresponde pas");
    return;
  }

    router.push("/Home/index");
  };

  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Inscription</Text>

      {/* saisie le nom */}

      <Input
        placeholder="entrer votre nom" 
        value={nom}
        onChangeText={setNom} />

      {/* saisie de l'email */}

      <Input
        placeholder="enter votre email"
        value={email}
        onChangeText={setEmail}
      />

      {/* saisie de mot de passe */}

      <Input
        placeholder="entrer votre mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* confirme mot de passe */}

      <Input
        placeholder="confirme votre mot de passe"
        value={confirmpassword}
        onChangeText={setConfirmPassowrd}
        secureTextEntry
      />

      {/* boutton s'inscrire */}

      <Button 
          title="S'iscrire" 
          onPress={inscription}
      />
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
    color:  "#2563EB",
  },
})