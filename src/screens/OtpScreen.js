import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {generateOtp} from '../api';
import {useNavigation} from '@react-navigation/native';

const OtpScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  const [page, setPage] = useState('Register');
  const handleGenerateOtp = async () => {
    await generateOtp(email);
    alert('OTP sent to your email');
    page === 'Register'
      ? navigation.navigate('Register', {email})
      : navigation.navigate('Login', {email});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Generate OTP</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={handleGenerateOtp}>
        <Text style={styles.buttonText}>Generate OTP</Text>
      </TouchableOpacity>
      {page === 'Register' ? (
        <TouchableOpacity
          style={styles.button}
          onPress={() => setPage('Login')}>
          <Text style={styles.buttonText}>Already have an account?</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={() => setPage('Register')}>
          <Text style={styles.buttonText}>Don't have an account?</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  button: {
    height: 40,
    width: '80%',
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OtpScreen;
