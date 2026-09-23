import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>FEEDANTS</Text>

      <Text style={styles.title}>
        Competition Details
      </Text>

      <Text style={styles.competitionName}>
        Feedants Competition
      </Text>

      <Text style={styles.description}>
        Participate in the competition and showcase your skills.
      </Text>

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },

  competitionName: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
  },

  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});