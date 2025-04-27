import { View, FlatList, Text, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import DataCard from '../components/DataCard';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';


export default function HomeScreen({ navigation }) {
  const { dataList } = useContext(DataContext);
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* HEADER STATIC */}
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Ionicons name="shield-checkmark-outline" size={48} color="#077A7D" />
          <Text style={styles.title}>Covidata</Text>
          <Text style={styles.subtitle}>
            Pendataan masyarakat terdampak COVID-19
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Ionicons name="information-circle-outline" size={24} color="#ffffff" />
          <Text style={styles.infoText}>
            Pastikan data yang Anda input akurat untuk membantu penanganan COVID-19.
          </Text>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Daftar Data Warga</Text>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate('AddData')}
          >
            <Ionicons name="add-circle" size={28} color="#077A7D" />
          </TouchableOpacity>
        </View>
      </View>

      {/* LIST SCROLLABLE */}
      <FlatList
        data={dataList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ paddingHorizontal: 16 }}>
            <DataCard
              item={item}
              onPress={() => navigation.navigate('Detail', { data: item })}
            />
          </View>
        )}
        style={styles.listArea}
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F9F8',
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#077A7D',
    marginTop: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#555555',
    textAlign: 'center',
    marginTop: 4,
  },
  infoBox: {
    backgroundColor: '#34A0A4',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  infoText: {
    color: '#ffffff',
    marginLeft: 8,
    fontSize: 14,
    flex: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#077A7D',
  },
  addButton: {
    marginLeft: 8,
  },
  listArea: {
    flex: 1,
  },
});
