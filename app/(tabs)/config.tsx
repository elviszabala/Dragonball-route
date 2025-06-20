import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Switch,
  Alert,
  Pressable,
  StatusBar
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import * as Device from 'expo-device';
// --- Mock Data: In a real app, this data would come from your authentication state ---
const CURRENT_USER_DATA = {
  id: '3',
  name: 'Bulma',
  email: 'bulma.briefs@capsulecorp.com',
  avatar: 'https://placehold.co/150x150/FF69B4/FFFFFF/png?text=B',
  settings: {
    notificationsEnabled: true,
  },
};

// --- Main User Profile Screen ---

export default function config() {
  const [name, setName] = useState(CURRENT_USER_DATA.name);
  const [email, setEmail] = useState(CURRENT_USER_DATA.email);
  const [notificationsEnabled, setNotificationsEnabled] = useState(
    CURRENT_USER_DATA.settings.notificationsEnabled
  );
  const [editable, setEditable] = useState(false);

  const handleSaveChanges = () => {
    // In a real app, you would send this data to your backend API
    console.log('Saving data:', { name, email, notificationsEnabled });
    Alert.alert(
      'Profile Saved',
      'Your changes have been saved successfully.'
    );
  };

  const handleLogout = () => {
      // In a real app, this would clear authentication tokens and navigate to the login screen
      Alert.alert(
          "Log Out",
          "Are you sure you want to log out?",
          [
              { text: "Cancel", style: "cancel" },
              { text: "OK", onPress: () => console.log("User logged out!") }
          ]
      )
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* --- Profile Header --- */}
        <View style={styles.profileHeader}>
          <Image source={{ uri: CURRENT_USER_DATA.avatar }} style={styles.avatar} />
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.userEmail}>{email}</Text>
        </View>

        {/* --- Editable Fields --- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account Information</Text>
          <View style={styles.fieldContainer}>
            <Ionicons name="person-outline" style={styles.fieldIcon} />
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="#888"
              value={name}
              //onChangeText={setName}
              editable ={false}
            />
          </View>
          <View style={styles.fieldContainer}>
            <Ionicons name="mail-outline" style={styles.fieldIcon} />
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              placeholderTextColor="#888"
              value={email}
              //onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              editable={false}
            />
          </View>
          <View style={styles.fieldContainer}>
            <Ionicons name="logo-usd" style={styles.fieldIcon} />
            <TextInput
              style={styles.input}
              //placeholder="Email Address"
              placeholderTextColor="#888"
              value={"300"}
              //onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              editable={false}
            />
          </View>
        </View>

        {/* --- Settings --- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>
          <View style={styles.settingRow}>
            <Ionicons name="notifications-outline" style={styles.fieldIcon} />
            <Text style={styles.settingLabel}>Enable Notifications</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#f47521' }}
              thumbColor={notificationsEnabled ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setNotificationsEnabled(previousState => !previousState)}
              value={notificationsEnabled}
            />
          </View>
          <Link href="/membership" asChild>
            <Pressable style={styles.settingRow}>
              {({ pressed }) => (
                <View style={styles.settingRowContent}>
                  <Ionicons name="card-outline" style={styles.fieldIcon} />
                  <Text style={[styles.settingLabel, { color: pressed ? '#f47521' : '#ffffff' }]}>
                    View Membership Details
                  </Text>
                  <Ionicons name="chevron-forward" style={styles.fieldIcon} />
                </View>
              )}
            </Pressable>
          </Link>
          
           
        </View>

        {/* --- Action Buttons --- */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>

         <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>

        {/* Footer Section */}
        <View style={{ height: 50, paddingTop: 4, paddingBottom: 6 }} >
          <Text style={{ color: '#A9A9A9', textAlign: 'center' }}>
            © 2023 Version 1.0.0 - {Device.deviceName} - {Device.osName} {Device.osVersion}
            
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// --- Styles ---

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141519',
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
    paddingTop: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#f47521',
  },
  userName: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  userEmail: {
    color: '#A9A9A9',
    fontSize: 16,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingBottom: 5,
  },
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
    marginBottom: 15,
  },
  fieldIcon: {
    color: '#A9A9A9',
    fontSize: 20,
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    color: '#ffffff',
    paddingVertical: 12,
    fontSize: 16,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
    paddingVertical: 8,
    //paddingBottom: 8,
    marginBottom: 3,
  },
    settingRowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingLabel: {
    flex: 1,
    color: '#ffffff',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#f47521',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
   logoutButton: {
    backgroundColor: 'transparent',
    borderColor: '#DC143C',
    borderWidth: 1,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#DC143C',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
