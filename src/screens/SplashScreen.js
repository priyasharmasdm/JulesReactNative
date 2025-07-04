import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate app initialization
    setTimeout(() => {
      // Navigate to Auth or Main App
      // For now, let's assume we navigate to a Login screen
      navigation.replace('Login');
    }, 3000); // Display splash for 3 seconds
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Add your logo or branding here */}
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your actual logo
        style={styles.logo}
      />
      <Text style={styles.title}>JulesReactNative</Text>
      <Text style={styles.subtitle}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Or your brand's primary color
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#888888',
  },
});

export default SplashScreen;
