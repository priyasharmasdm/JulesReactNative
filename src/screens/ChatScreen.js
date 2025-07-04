import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Platform } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons'; // Example for icons

// Dummy data for chat options - in a real app, these would lead to actual chat rooms/logic
const CHAT_OPTIONS = [
  { id: '1', type: 'group', name: 'General Group Chat', description: 'Talk with all members' },
  { id: '2', type: 'direct', name: 'Chat with Admin', description: 'Get support or ask questions' },
  // Add more chat rooms or direct message options here if needed
];

const ChatOptionItem = ({ item, onPress }) => (
  <TouchableOpacity style={styles.chatItem} onPress={() => onPress(item)}>
    {/* <Ionicons
      name={item.type === 'group' ? 'chatbubbles-outline' : 'person-outline'}
      size={28}
      color="#007BFF"
      style={styles.chatIcon}
    /> */}
    <View style={styles.chatTextContainer}>
      <Text style={styles.chatName}>{item.name}</Text>
      <Text style={styles.chatDescription}>{item.description}</Text>
    </View>
    {/* <Ionicons name="chevron-forward-outline" size={22} color="#C7C7CC" /> */}
  </TouchableOpacity>
);

const ChatScreen = ({ navigation }) => {
  const handleChatSelection = (chatOption) => {
    if (chatOption.type === 'group') {
      console.log('Navigate to Group Chat:', chatOption.name);
      // navigation.navigate('GroupChatScreen', { chatId: chatOption.id, chatName: chatOption.name });
      alert(`Open Group Chat: ${chatOption.name} (Not Implemented)`);
    } else if (chatOption.type === 'direct') {
      console.log('Navigate to Direct Chat with Admin:', chatOption.name);
      // navigation.navigate('DirectMessageScreen', { userId: 'admin', userName: 'Admin' });
      alert(`Open Direct Chat: ${chatOption.name} (Not Implemented)`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chat</Text>
      <FlatList
        data={CHAT_OPTIONS}
        renderItem={({ item }) => (
          <ChatOptionItem item={item} onPress={handleChatSelection} />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
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
  listContainer: {
    paddingVertical: 10,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF', // Lighter separator
  },
  chatIcon: {
    marginRight: 15,
  },
  chatTextContainer: {
    flex: 1,
  },
  chatName: {
    fontSize: 17,
    fontWeight: '600', // Semi-bold
    color: '#333333',
    marginBottom: 3,
  },
  chatDescription: {
    fontSize: 14,
    color: '#777777',
  },
});

export default ChatScreen;
