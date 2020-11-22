import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  main: {
    fontSize: 12,
    marginBottom: 4,
  },
  note: {
    fontSize: 8,
  },
});

interface ExplanationProps {
  style?: any;
}

const Explanation: React.FC<ExplanationProps> = ({ style }) => {
  return (
    <View style={style}>
      <Text style={styles.main}>
        certifie que mon déplacement est lié au motif suivant (cocher la case)
        autorisé par le décret n°2020-1310 du 29 octobre 2020 prescrivant les
        mesures générales nécessaires pour faire face à l'épidémie de covid-19
        dans le cadre de l'état d'urgence sanitaire :
      </Text>
      <Text style={styles.note}>
        Note : les personnes souhaitant bénéficier de l’une de ces exceptions
        doivent se munir s’il y a lieu, lors de leurs déplacements hors de leur
        domicile, d’un document leur permettant de justifier que le déplacement
        considéré entre dans le champ de l’une de ces exceptions
      </Text>
    </View>
  );
};

export default Explanation;
