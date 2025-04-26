import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function DataCard({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.info}>Usia: {item.age} tahun</Text>
      <Text style={styles.info}>Status: {item.status}</Text>
      <Text style={styles.info}>Lokasi: {item.location}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#077A7D',
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  info: {
    fontSize: 14,
    color: '#ffffff',
  },
});
