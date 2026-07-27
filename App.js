import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image
        style={styles.avatar}
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQILPZheJL4Ti5_JT8lb7eDBwILTH1oJA87e_qHag6CWQ&s=10' }}
      />

      <Text style={styles.name}>Juan Ramirez</Text>
      <Text style={styles.role}>Estudiante</Text>

      <Text style={styles.subtitulo}>Habilidades:</Text>
      <Text style={styles.skill}>- Trabajo en equipo</Text>
      <Text style={styles.skill}>- Bueno optimizando el trabajo</Text>
      <Text style={styles.skill}>- Bueno trabajando bajo presión</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  skill: {
    fontSize: 14,
  },
});