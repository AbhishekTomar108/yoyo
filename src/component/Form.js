import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import styles from '../style/styles';

const Form = () => {
  const [dob, setDob] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [datePickerFor, setDatePickerFor] = useState('');

  const showDatePicker = (field) => {
    setDatePickerFor(field);
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirm = (date) => {
    const formattedDate = date.toISOString().split('T')[0]; // Format: YYYY-MM-DD
    if (datePickerFor === 'dob') {
      setDob(formattedDate);
    } else if (datePickerFor === 'expiry') {
      setExpiryDate(formattedDate);
    }
    hideDatePicker();
  };

  return (
    <View style={styles.formContainer}>
     
      <Text style={styles.text}>Fill the Form</Text>

      <ScrollView contentContainerStyle={styles.scrollArea}>
            
           

      <Text>Name</Text>
      <TextInput style={styles.input} placeholder="Enter your name" />

      <Text>Email</Text>
      <TextInput style={styles.input} placeholder="Enter your email" keyboardType="email-address" />

      <Text>Date of Birth</Text>
      <TouchableOpacity onPress={() => showDatePicker('dob')}>
        <TextInput
          style={styles.input}
          placeholder="Date of Birth"
          value={dob}
          editable={false}
          pointerEvents="none"
        />
      </TouchableOpacity>

      <Text>Mobile Number</Text>
      <TextInput style={styles.input} placeholder="Mobile Number" keyboardType="phone-pad" />

      <Text>Total Limit</Text>
      <TextInput style={styles.input} placeholder="Total limit" keyboardType="numeric" />

      <Text>Available Limit</Text>
      <TextInput style={styles.input} placeholder="Available limit" keyboardType="numeric" />

      <Text>Card Holder Name</Text>
      <TextInput style={styles.input} placeholder="Card Holder Name" />

      <Text>Card Number</Text>
      <TextInput style={styles.input} placeholder="Card Number" keyboardType="number-pad" />

      <Text>Expiry Date</Text>
      <TouchableOpacity onPress={() => showDatePicker('expiry')}>
        <TextInput
          style={styles.input}
          placeholder="Expiry Date"
          value={expiryDate}
          editable={false}
          pointerEvents="none"
        />
      </TouchableOpacity>

      <Text>CVV</Text>
      <TextInput style={styles.input} placeholder="CVV" secureTextEntry keyboardType="number-pad" />

      <Button title="Submit" onPress={() => alert('Form Submitted!')} />

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

</ScrollView>
    </View>
  );
};

export default Form;
