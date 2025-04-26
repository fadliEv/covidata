import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.name}</Text>
      <Text style={styles.info}>Usia: {data.age} tahun</Text>
      <Text style={styles.info}>Status: {data.status}</Text>
      <Text style={styles.info}>Lokasi: {data.location}</Text>

      <View style={styles.buttonGroup}>
        <Button title="Edit Data" color="#077A7D" onPress={() => {}} />
        <Button title="Hapus Data" color="red" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#077A7D',
  },
  info: {
    fontSize: 16,
    marginBottom: 8,
  },
  buttonGroup: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
