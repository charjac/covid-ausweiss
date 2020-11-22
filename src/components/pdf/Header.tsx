import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  titleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  title: {
    fontWeight: 'ultrabold',
  },
  disclaimerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  disclaimer: {
    textAlign: 'center',
    fontSize: 10,
  },
});

interface HeaderProps {
  style?: any;
}

const Header: React.FC<HeaderProps> = ({ style }) => {
  return (
    <View style={style}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>ATTESTATION DE DÉPLACEMENT DÉROGATOIRE</Text>
      </View>
      <View style={styles.disclaimerWrapper}>
        <Text style={styles.disclaimer}>
          En application du décret n°2020-1310 du 29 octobre 2020 prescrivant
          les mesures générales nécessaires pour faire face à l'épidémie de
          covid-19 dans le cadre de l'état d'urgence sanitaire
        </Text>
      </View>
    </View>
  );
};

export default Header;
