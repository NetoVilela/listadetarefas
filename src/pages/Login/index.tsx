import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styleLogin from "./styles";

import DarkModeButton from "../../components/DarkmodeButton";

const LoginPage = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  console.log(isDarkMode);
  
  return (
    <View style={styleLogin(isDarkMode).page}>
      <View style={styleLogin(isDarkMode).container}>
        <View style={styleLogin(isDarkMode).darkModeButton}>
          <DarkModeButton
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
        </View>
        <Text style={styleLogin(isDarkMode).title}>
          Login
        </Text>
        <TextInput
          style={styleLogin(isDarkMode).input}
          placeholder="Email"
          placeholderTextColor={isDarkMode ? '#000' : '#fff'}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styleLogin(isDarkMode).input}
          placeholder="Senha"
          secureTextEntry={true}
          placeholderTextColor={isDarkMode ? '#000' : '#fff'}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styleLogin(isDarkMode).button}>
          <Text style={styleLogin(isDarkMode).textButton}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginPage;
