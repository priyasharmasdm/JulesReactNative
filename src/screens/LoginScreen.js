import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Basic validation
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }
    // Replace with actual authentication logic
    console.log('Email:', email, 'Password:', password);
    // Navigate to Main App after successful login
    navigation.replace('MainApp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.legalLinksContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('TermsOfService')}>
          <Text style={styles.legalLinkText}>Terms of Service</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')}>
          <Text style={styles.legalLinkText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007BFF', // Primary button color
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#007BFF',
    fontSize: 16,
    marginBottom: 20,
  },
  legalLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 30,
    borderTopWidth: 1,
    borderTopColor: '#DDDDDD',
    paddingTop: 20,
  },
  legalLinkText: {
    color: '#555555',
    fontSize: 14,
  },
});

export default LoginScreen;
