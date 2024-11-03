import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  userCard: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  userCpf: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  userPhone: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  userEmail: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  flatListContainer: {
    paddingBottom: 20,
  },
});