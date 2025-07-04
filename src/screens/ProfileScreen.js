import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Platform, Alert } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons'; // Example for icons

const ProfileScreen = ({ navigation }) => {
  const [profileSheetVisible, setProfileSheetVisible] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('English'); // or 'Japanese'

  const handleLogout = () => {
    setProfileSheetVisible(false);
    // Add actual logout logic here (e.g., clear tokens, navigate to Auth)
    Alert.alert("Logged Out", "You have been successfully logged out.", [
        { text: "OK", onPress: () => navigation.replace('Login') } // Navigate to Login screen
    ]);
  };

  const handleChangeLanguage = () => {
    setCurrentLanguage(prevLang => prevLang === 'English' ? 'Japanese' : 'English');
    // Add actual language change logic here (e.g., i18n library)
    Alert.alert("Language Changed", `Language set to ${currentLanguage === 'English' ? 'Japanese' : 'English'}.`);
  };

  const handleChangePassword = () => {
    setProfileSheetVisible(false);
    // Navigate to a dedicated Change Password screen
    console.log('Navigate to Change Password Screen');
    // navigation.navigate('ChangePasswordScreen'); // Assuming you have this screen
    Alert.alert("Placeholder", "Navigate to Change Password Screen (not implemented).");
  };


  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Profile</Text>
      <View style={styles.content}>
        <Text style={styles.infoText}>
          Tap below to view and manage your profile settings.
        </Text>
        <TouchableOpacity
          style={styles.openButton}
          onPress={() => setProfileSheetVisible(true)}
        >
          <Text style={styles.openButtonText}>View Profile Options</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={profileSheetVisible}
        onRequestClose={() => setProfileSheetVisible(false)}
      >
        <View style={styles.bottomSheetContainer}>
          <View style={styles.bottomSheetContent}>
            <Text style={styles.bottomSheetTitle}>Profile Details</Text>

            {/* Placeholder User Info */}
            <View style={styles.userInfoContainer}>
              <Text style={styles.userInfoLabel}>Name:</Text>
              <Text style={styles.userInfoText}>Jules User</Text>
            </View>
            <View style={styles.userInfoContainer}>
              <Text style={styles.userInfoLabel}>Email:</Text>
              <Text style={styles.userInfoText}>jules.user@example.com</Text>
            </View>
            <View style={styles.userInfoContainer}>
              <Text style={styles.userInfoLabel}>Language:</Text>
              <Text style={styles.userInfoText}>{currentLanguage}</Text>
            </View>

            <TouchableOpacity style={styles.optionButton} onPress={handleChangeLanguage}>
              {/* <Ionicons name="language-outline" size={22} color="#333" style={styles.optionIcon} /> */}
              <Text style={styles.optionButtonText}>Change Language (JP ↔ EN)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionButton} onPress={handleChangePassword}>
              {/* <Ionicons name="lock-closed-outline" size={22} color="#333" style={styles.optionIcon} /> */}
              <Text style={styles.optionButtonText}>Change Password</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.optionButton, styles.logoutButton]} onPress={handleLogout}>
              {/* <Ionicons name="log-out-outline" size={22} color="#FFFFFF" style={styles.optionIcon} /> */}
              <Text style={[styles.optionButtonText, styles.logoutButtonText]}>Logout</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.closeSheetButton}
              onPress={() => setProfileSheetVisible(false)}
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
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  bottomSheetContent: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30, // For safe area on iOS if needed
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  bottomSheetTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  userInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    marginBottom: 8,
  },
  userInfoLabel: {
    fontSize: 16,
    color: '#555555',
    fontWeight: '500',
  },
  userInfoText: {
    fontSize: 16,
    color: '#333333',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '100%',
    marginBottom: 12,
  },
  optionIcon: {
    marginRight: 15,
  },
  optionButtonText: {
    fontSize: 17,
    color: '#333333',
    fontWeight: '500',
  },
  logoutButton: {
    backgroundColor: '#DC3545', // Red for logout
  },
  logoutButtonText: {
    color: '#FFFFFF',
  },
  closeSheetButton: {
    marginTop: 10,
    backgroundColor: '#6C757D', // Secondary/gray color for close
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

export default ProfileScreen;
