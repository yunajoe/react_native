import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 14,
  },
  input_container: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10,
  },
  title: {
    color: 'black',
  },
  input: {
    borderWidth: 1,
  },
});
