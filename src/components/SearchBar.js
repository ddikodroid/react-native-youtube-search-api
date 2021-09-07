import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {COLOR} from '../styles/Color';
import {WIDTH, HEIGHT, FONT} from '../styles/Dimension';
const SearchBar = (props) => {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.textInputField}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        accessibilityLabel={props.searchInputAccessibilityLabel}
      />
      <TouchableOpacity
        style={styles.submitField}
        onPress={props.onPress}
        accessibilityLabel={props.searchButtonAccessibilityLabel}>
        <Text style={FONT.inputFieldText}>Cari</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBarContainer: {
    width: WIDTH * 0.95,
    height: HEIGHT * 0.055,
    borderRadius: WIDTH * 0.02,
    marginVertical: HEIGHT * 0.01,
    backgroundColor: COLOR.gray,
    justifyContent: 'center',
    paddingLeft: WIDTH * 0.025,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  submitField: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    width: WIDTH * 0.15,
    height: HEIGHT * 0.055,
    alignItems: 'center',
    flexBasis: '25%',
  },
  textInputField: {
    flexBasis: '75%',
    ...FONT.inputFieldText,
  },
});
