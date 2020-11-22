import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

import Checkbox from './Checkbox';

interface ReasonProps {
  checked?: boolean;
  text: string;
  note?: string;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 8,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    fontSize: 10,
    marginBottom: 3,
  },
  note: {
    fontSize: 8,
  },
  checkbox: {
    marginRight: 5,
  },
});

const Reason: React.FC<ReasonProps> = ({ text, checked, note }) => {
  return (
    <View style={styles.container}>
      <Checkbox checked={checked} style={styles.checkbox} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
        {note && <Text style={styles.note}>{note}</Text>}
      </View>
    </View>
  );
};

export default Reason;
