import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const TermsOfServiceScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Terms of Service</Text>
        <Text style={styles.paragraph}>
          Last updated: [Date]
        </Text>
        <Text style={styles.paragraph}>
          Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the JulesReactNative mobile application (the "Service") operated by [Your Company Name] ("us", "we", or "our").
        </Text>
        <Text style={styles.heading}>1. Acceptance of Terms</Text>
        <Text style={styles.paragraph}>
          By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
        </Text>
        <Text style={styles.heading}>2. Accounts</Text>
        <Text style={styles.paragraph}>
          When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
        </Text>
        {/* Add more sections as needed */}
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
         <Text style={styles.paragraph}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </Text>
        <Text style={styles.heading}>Contact Us</Text>
        <Text style={styles.paragraph}>
          If you have any questions about these Terms, please contact us at [Your Contact Email/Info].
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
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    textAlign: 'justify',
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

export default TermsOfServiceScreen;
