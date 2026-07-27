import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const HABILIDADES = ['React Native', 'JavaScript', 'UI/UX'];

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="auto" />
      <View style={styles.card}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://i.pravatar.cc/300?img=12' }}
        />

        <Text style={styles.name}>Ana Torres</Text>
        <Text style={styles.role}>Desarrolladora Mobile</Text>

        <View style={styles.divider} />

        <View style={styles.skillsContainer}>
          {HABILIDADES.map((habilidad) => (
            <View key={habilidad} style={styles.skillPill}>
              <Text style={styles.skillText}>{habilidad}</Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f2f4f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 320,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: '#6C63FF',
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  role: {
    fontSize: 15,
    color: '#6b7280',
    marginTop: 4,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 20,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  skillPill: {
    backgroundColor: '#EEF0FF',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  skillText: {
    color: '#4338CA',
    fontWeight: '600',
    fontSize: 13,
  },
});
