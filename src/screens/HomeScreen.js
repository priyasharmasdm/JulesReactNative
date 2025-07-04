import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const ModuleCard = ({ title, onPress }) => (
  <TouchableOpacity style={styles.moduleCard} onPress={onPress}>
    <Text style={styles.moduleTitle}>{title}</Text>
    {/* Add icons or brief info here if needed */}
  </TouchableOpacity>
);

const HomeScreen = ({ navigation }) => {
  // Placeholder navigation functions for modules
  const navigateToMaintenance = () => console.log('Navigate to Maintenance Data');
  const navigateToFacilityInfo = () => console.log('Navigate to Facility Information');
  const navigateToHiPro = () => console.log('Navigate to Hi-Pro');
  const navigateToRoutineInspection = () => console.log('Navigate to Routine Inspection');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <ModuleCard title="Maintenance Data" onPress={navigateToMaintenance} />
        <ModuleCard title="Facility Information" onPress={navigateToFacilityInfo} />
        <ModuleCard title="Hi-Pro (High Priority Info)" onPress={navigateToHiPro} />
        <ModuleCard title="Routine Inspection" onPress={navigateToRoutineInspection} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Light gray background
    paddingTop: Platform.OS === 'android' ? 25 : 0, // Adjust for status bar on Android
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF', // White header background
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0', // Light border color
  },
  scrollViewContent: {
    padding: 15,
  },
  moduleCard: {
    backgroundColor: '#FFFFFF', // White card background
    borderRadius: 8,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  moduleTitle: {
    fontSize: 18,
    fontWeight: '600', // Semi-bold
    color: '#333333', // Dark gray text
  },
});

export default HomeScreen;
