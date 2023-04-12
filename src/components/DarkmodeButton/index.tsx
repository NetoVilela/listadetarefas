import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';

type Props = {
  isDarkMode: boolean,
  setIsDarkMode: (isDarkMode: boolean) => void,
}

const DarkModeButton = ({ isDarkMode, setIsDarkMode }: Props) => {

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const icon = isDarkMode ? '🌞' : '🌙';

  return (
    <TouchableOpacity onPress={toggleDarkMode}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ marginRight: 10, fontSize: 35 }}>{icon}</Text>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>
    </TouchableOpacity>
  );
};

export default DarkModeButton;
