import { Text, View, StyleSheet } from '@react-pdf/renderer';
import React from 'react';

import { AppState } from '../../core/reducer';

interface IdentityProps {
  state: AppState;
  style?: any;
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  text: {
    fontSize: 12,
  },
  intro: {
    marginBottom: 4,
  },
});

const Identity: React.FC<IdentityProps> = ({ state, style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Text style={{ ...styles.text, ...styles.intro }}>Je sousigné(e),</Text>
      <Text style={styles.text}>
        Mme/M. : {state.firstName} {state.lastName}
      </Text>
      <Text style={styles.text}>
        né(e) le : {state.birthDate} à {state.birthPlace}
      </Text>
      <Text style={styles.text}>demeurant {state.address}</Text>
    </View>
  );
};

export default Identity;
