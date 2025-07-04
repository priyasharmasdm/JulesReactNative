import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const PrivacyPolicyScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Privacy Policy</Text>
        <Text style={styles.paragraph}>
          Last updated: [Date]
        </Text>
        <Text style={styles.paragraph}>
          [Your Company Name] ("us", "we", or "our") operates the JulesReactNative mobile application (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
        </Text>
        <Text style={styles.heading}>1. Information Collection and Use</Text>
        <Text style={styles.paragraph}>
          We collect several different types of information for various purposes to provide and improve our Service to you.
        </Text>
        <Text style={styles.subHeading}>Types of Data Collected</Text>
        <Text style={styles.listItem}>- Personal Data (e.g., Email address, Name)</Text>
        <Text style={styles.listItem}>- Usage Data (e.g., pages visited, features used)</Text>

        <Text style={styles.heading}>2. Use of Data</Text>
        <Text style={styles.paragraph}>
          [Your Company Name] uses the collected data for various purposes:
        </Text>
        <Text style={styles.listItem}>- To provide and maintain the Service</Text>
        <Text style={styles.listItem}>- To notify you about changes to our Service</Text>
        <Text style={styles.listItem}>- To allow you to participate in interactive features of our Service when you choose to do so</Text>
        <Text style={styles.listItem}>- To provide customer care and support</Text>
        <Text style={styles.listItem}>- To provide analysis or valuable information so that we can improve the Service</Text>
        <Text style={styles.listItem}>- To monitor the usage of the Service</Text>
        <Text style={styles.listItem}>- To detect, prevent and address technical issues</Text>

        {/* Add more sections as needed (e.g., Data Transfer, Disclosure of Data, Security of Data, Children's Privacy, Changes to This Privacy Policy) */}
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
         <Text style={styles.paragraph}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>

        <Text style={styles.heading}>Contact Us</Text>
        <Text style={styles.paragraph}>
          If you have any questions about this Privacy Policy, please contact us at [Your Contact Email/Info].
        </Text>
      </ScrollView>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    textAlign: 'justify',
  },
  listItem: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 10,
    marginBottom: 5,
  },
  closeButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PrivacyPolicyScreen;
