import React from 'react';
import { Text, View, Image, StyleSheet } from '@react-pdf/renderer';

import { formatDate, get10minAgo } from '../../helpers/date';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: 30,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signatureWrapper: {
    flexDirection: 'row',
    marginTop: 10,
  },
  signature: {
    width: 120,
    height: 120,
  },
  text: {
    fontSize: 10,
    marginBottom: 4,
  },
  qrCode: {
    width: 100,
    height: 100,
  },
});

interface FooterProps {
  city: string;
  signatureURI: string;
  qrCodeURI: string;
}

const Footer: React.FC<FooterProps> = ({ city, signatureURI, qrCodeURI }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fait à : {city}</Text>
      <View style={styles.content}>
        <View>
          <Text style={styles.text}>
            Le {formatDate(new Date())}, à {get10minAgo(new Date())}
          </Text>
          <Text style={styles.text}>
            (Date et heure de début de sortie à mentionner obligatoirement)
          </Text>
          <View style={styles.signatureWrapper}>
            <Text style={styles.text}>Signature: </Text>
            <View>
              <Image src={signatureURI} style={styles.signature} />
            </View>
          </View>
        </View>
        <View>
          <Image style={styles.qrCode} src={qrCodeURI} />
        </View>
      </View>
    </View>
  );
};

export default Footer;
