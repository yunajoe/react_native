import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    height: 60,
    padding: 5,
    position: 'relative',
    borderColor: 'black', // Set the border color
    borderWidth: 1, // Specify the width of the border
    backgroundColor: 'white',
    width: '100%',
  },
  user_info: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    rowGap: 5,
  },
  radio_icon: {
    position: 'absolute',
    right: 5,
    top: 16,
  },
  email: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,
  },
});
