import { View, TextInput, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { useContext, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import { DataContext } from '../contexts/DataContext';

export default function AddDataScreen({ navigation }) {

  const { addData } = useContext(DataContext);

  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [location, setLocation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Untuk Dropdown Picker
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(null);
  const [items, setItems] = useState([
    { label: 'Terkonfirmasi', value: 'Terkonfirmasi' },
    { label: 'Dalam Perawatan', value: 'Dalam Perawatan' },
    { label: 'Sembuh', value: 'Sembuh' },
  ]);

  const handleSubmit = () => {
    if (!name || !birthDate || !status || !location) {
      setErrorMessage('Semua field wajib diisi!');
      return;
    }

    const newData = {
      id: Date.now().toString(), 
      name,
      age: calculateAge(birthDate),
      status,
      location,
    };

    addData(newData);
    navigation.goBack();
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || birthDate;
    setShowDatePicker(false);
    setBirthDate(currentDate);
  };

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <View style={styles.container}>      
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      {/* Input Nama */}
      <View style={styles.inputGroup}>
        <Ionicons name="person-outline" size={20} color="#34A0A4" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nama"
          value={name}
          onChangeText={(text) => {
            setName(text);
            setErrorMessage('');
          }}
        />
      </View>

      {/* Input Tanggal Lahir */}
      <TouchableOpacity style={styles.inputGroup} onPress={() => setShowDatePicker(true)}>
        <Ionicons name="calendar-outline" size={20} color="#34A0A4" style={styles.icon} />
        <Text style={[styles.input, { color: birthDate ? '#333' : '#999' }]}>
          {birthDate ? birthDate.toLocaleDateString() : 'Tanggal Lahir'}
        </Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={birthDate || new Date(2000, 0, 1)}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onChangeDate}
          maximumDate={new Date()}
        />
      )}

      {/* Dropdown Status */}
      <View style={{ marginBottom: open ? 160 : 20 }}>
        <DropDownPicker
            open={open}
            value={status}
            items={items}
            setOpen={setOpen}
            setValue={setStatus}
            setItems={setItems}
            placeholder="Pilih Status"
            style={styles.dropdownOnly}
            dropDownContainerStyle={styles.dropdownContainer}
            placeholderStyle={{ color: '#999' }}
            textStyle={{ fontSize: 16 }}
            onOpen={() => setErrorMessage('')}
        />
        </View>

      {/* Input Lokasi */}
      <View style={styles.inputGroup}>
        <Ionicons name="location-outline" size={20} color="#34A0A4" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Lokasi"
          value={location}
          onChangeText={(text) => {
            setLocation(text);
            setErrorMessage('');
          }}
        />
      </View>

      {/* Tombol Simpan */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
        <Ionicons name="save-outline" size={20} color="#fff" />
        <Text style={styles.saveButtonText}>Simpan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F9F8',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#077A7D',
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  errorText: {
    color: '#E63946',
    fontSize: 14,
    marginBottom: 16,
    textAlign: 'center',
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#077A7D',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 16,
    height: 50,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  dropdown: {
    backgroundColor: '#fff',
    borderColor: '#077A7D',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 50,
  },
  dropdownContainer: {
    backgroundColor: '#fff',
    borderColor: '#077A7D',
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#077A7D',
    paddingVertical: 14,
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
  dropdownOnly: {
    backgroundColor: '#ffffff',
    borderColor: '#077A7D',
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  
});
