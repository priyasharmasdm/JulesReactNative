import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Platform, Modal } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons'; // Example for icon

const InquiryScreen = () => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const contactNumber = '+1234567890'; // Replace with actual static contact number

  const handleCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${contactNumber}`;
    } else {
      phoneNumber = `telprompt:${contactNumber}`;
    }
    Linking.canOpenURL(phoneNumber)
      .then(supported => {
        if (!supported) {
          Alert.alert('Phone number is not available');
        } else {
          return Linking.openURL(phoneNumber);
        }
      })
      .catch(err => console.error('An error occurred', err));
    setBottomSheetVisible(false); // Close bottom sheet after initiating call
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Inquiry</Text>
      <View style={styles.content}>
        <Text style={styles.infoText}>
          Have questions or need assistance? Tap below to open contact options.
        </Text>
        <TouchableOpacity
          style={styles.openButton}
          onPress={() => setBottomSheetVisible(true)}
        >
          <Text style={styles.openButtonText}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={bottomSheetVisible}
        onRequestClose={() => {
          setBottomSheetVisible(!bottomSheetVisible);
        }}
      >
        <View style={styles.bottomSheetContainer}>
          <View style={styles.bottomSheetContent}>
            <Text style={styles.bottomSheetTitle}>Contact Information</Text>
            <Text style={styles.contactNumberText}>
              Phone: {contactNumber}
            </Text>
            <TouchableOpacity style={styles.callButton} onPress={handleCall}>
              {/* <Ionicons name="call" size={24} color="#FFFFFF" style={{marginRight: 10}} /> */}
              <Text style={styles.callButtonText}>Call Now</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeSheetButton}
              onPress={() => setBottomSheetVisible(false)}
            >
              <Text style={styles.closeSheetButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  infoText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: '#333333',
  },
  openButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  openButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Bottom Sheet Styles
  bottomSheetContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background
  },
  bottomSheetContent: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  bottomSheetTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333333',
  },
  contactNumberText: {
    fontSize: 18,
    color: '#555555',
    marginBottom: 25,
  },
  callButton: {
    flexDirection: 'row',
    backgroundColor: '#28A745', // Green color for call button
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 15,
  },
  callButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeSheetButton: {
    backgroundColor: '#DC3545', // Red color for close button
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  closeSheetButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default InquiryScreen;
