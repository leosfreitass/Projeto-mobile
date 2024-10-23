import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  inputContainer: {
    marginBottom: 15,
  },

  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 10,
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#5E5ED4',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
