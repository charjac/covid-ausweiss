import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

interface CheckboxProps {
  checked?: boolean;
  style?: any;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DEE5FF',
    width: 15,
    height: 15,
    justifyContent: 'center',
  },
  x: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 12,
    alignSelf: 'center',
  },
});

const Checkbox: React.FC<CheckboxProps> = ({ checked, style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      {checked && <Text style={styles.x}>X</Text>}
    </View>
  );
};

export default Checkbox;
