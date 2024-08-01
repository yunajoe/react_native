import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  interest_keyword_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1, // Border width
    borderColor: 'black', // Border color
    borderStyle: 'solid', // Border style
    padding: 15,
    marginBottom: 20,
  },

  press: {
    backgroundColor: 'red',
  },
  icon: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'flex-end',
  },
  data: {
    position: 'absolute',
    right: 20,
    top: -6,
  },
});
