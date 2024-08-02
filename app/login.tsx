import React, { useState } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import PhoneInput, { ICountry } from "react-native-international-phone-number";

export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation();

  const [selectedCountry, setSelectedCountry] = useState<null | ICountry>(null);
  const [inputValue, setInputValue] = useState<string>("");

  function handleInputValue(phoneNumber: string) {
    setInputValue(phoneNumber);
  }

  function handleSelectedCountry(country: ICountry) {
    setSelectedCountry(country);
  }

  const handleLogin = () => {
    // console.log("Login pressed", { phoneNumber });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.arrowBack} onPress={handleGoBack}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Entrar em sua conta</Text>
          <Text style={styles.subtitle}>
            Digite aqui seu numero de telefone
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <PhoneInput
            placeholder="Número de telefone"
            modalSearchInputPlaceholder="Pesquisar"
            customMask={["(99) 9999-9999", "(99) 99999-9999"]}
            value={inputValue}
            onChangePhoneNumber={handleInputValue}
            selectedCountry={selectedCountry}
            onChangeSelectedCountry={handleSelectedCountry}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.loginInfo}>
          Ao continuar você receberá um SMS para verificação. Podem ser
          aplicadas taxas de dados e mensagens.
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonContent}>Fazer login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("signup")}
        >
          <Text style={styles.buttonContent}>Não tenho uma conta</Text>
          <Ionicons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 60,
    backgroundColor: "#191919",
    padding: 16,
  },
  titleContainer: {
    gap: 8,
    marginTop: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  button: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "green",
    borderRadius: 8,
    width: "100%",
    padding: 10,
    gap: 16,
  },
  buttonContent: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  arrowBack: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 16,
  },
  buttonContainer: {
    width: "100%",
    gap: 16,
    marginTop: 16,
  },
  input: {
    width: "100%",
    padding: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
  loginInfo: {
    color: "white",
    fontSize: 14,
  },
});
