import { SafeAreaView, Text, TextInput, StyleSheet } from "react-native";
import DatePicker from 'react-native-datepicker';


export default function CreateRecord() {
  return (
    <SafeAreaView style={styles.container}>
        <TextInput style={styles.input} placeholder="Issuing Country" />
      <TextInput style={styles.input} placeholder="Passport Number" />
      <TextInput style={styles.input} placeholder="Surname" />
      <TextInput style={styles.input} placeholder="Given Name" />
      <Text style={styles.label}>Date of Birth</Text>
      <DatePicker
        style={{ width: 200, marginBottom: 16 }}
        mode="date"
        placeholder="DD/MM/YYYY"
        format="DD/MM/YYYY"
      />
      <TextInput style={styles.input} placeholder="Sex" />
      <TextInput style={styles.input} placeholder="Place of Birth" />
      <Text style={styles.label}>Issued Date</Text>
      <DatePicker
        style={{ width: 200, marginBottom: 16 }}
        mode="date"
        placeholder="DD/MM/YYYY"
        format="DD/MM/YYYY"
      />
      <Text style={styles.label}>Expiration Date</Text>
      <DatePicker
        style={{ width: 200, marginBottom: 16 }}
        mode="date"
        placeholder="DD/MM/YYYY"
        format="DD/MM/YYYY"
      />
      <TextInput style={styles.input} placeholder="Issuing Authority" />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'white'
      },
  });