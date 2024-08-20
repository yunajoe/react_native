import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  greetingText: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
  loginUserContainer: {
    borderWidth: 1, // Border width
    borderColor: 'black', // Border color
    borderStyle: 'solid', // Border style
    marginBottom: 20,
    padding: 6,
  },
  beforeLoginUserContainer: {
    marginTop: 20,
  },

  introduceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    borderWidth: 1, // Border width
    borderColor: 'black', // Border color
    borderStyle: 'solid', // Border style
    padding: 10,
    marginBottom: 20,
  },

  interestKeyWordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1, // Border width
    borderColor: 'black', // Border color
    borderStyle: 'solid', // Border style
    padding: 20,
    marginBottom: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1, // Border width
    borderColor: 'black', // Border color
    borderStyle: 'solid', // Border style
    padding: 20,
    marginBottom: 20,
  },
  divider: {
    borderWidth: 1,
    height: 1,
    borderColor: '#808080',
  },
  button_container: {
    flexDirection: 'column',
    rowGap: 10,
  },
});
