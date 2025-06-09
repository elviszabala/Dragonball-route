import { SafeAreaView, ScrollView, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';



export default function membership() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* --- Membership Header --- */}
        <View style={styles.membershipHeader}>
          <Text style={styles.membershipTitle}>Membership Details</Text>
          <Text style={styles.membershipSubtitle}>Your current plan and status</Text>
        </View>

        {/* --- Membership Plan Section --- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Current Plan</Text>
          <View style={styles.fieldContainer}>
            <Ionicons name="card-outline" style={styles.fieldIcon} />
            <TextInput
              style={styles.input}
              placeholder="Plan Name"
              placeholderTextColor="#888"
              value="Premium Plan"
              editable={false}
            />
          </View>
        </View>

        {/* --- Membership Status Section --- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Status</Text>
          <View style={styles.fieldContainer}>
            <Ionicons name="checkmark-circle-outline" style={styles.fieldIcon} />
            <TextInput
              style={styles.input}
              placeholder="Active"
              placeholderTextColor="#888"
              value="Active"
              editable={false}
            />
          </View>
        </View>

        {/* --- Action Buttons --- */}
        <View style={styles.buttonContainer}>
          <Button title="Renew Membership" onPress={() => console.log('Renew Membership')} />
          <Button title="Cancel Membership" onPress={() => console.log('Cancel Membership')} color="#ff6347" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 20,
  },
  membershipHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  membershipTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  membershipSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  fieldIcon: {
    fontSize: 20,
    color: '#888',
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});