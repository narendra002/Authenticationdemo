

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { generateOtp } from '../api';

const OtpScreen = () => {
  const [email, setEmail] = useState('');

  const handleGenerateOtp = async () => {
    await generateOtp(email);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Generate OTP" onPress={handleGenerateOtp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default OtpScreen;
