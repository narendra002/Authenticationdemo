import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {login} from '../api';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({route}) => {
  const {email} = route?.params;
  const [otp, setOtp] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    await login(email, otp);
    alert('Login successfully');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        value={email}
        editable={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOtp}
      />
      <Button title="Login" onPress={handleLogin} />
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

export default LoginScreen;
