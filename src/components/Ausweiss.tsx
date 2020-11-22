import React from 'react';
import { Document, Page, StyleSheet, Image } from '@react-pdf/renderer';

import reasons from '../core/reasons';
import { AppState } from '../core/reducer';
import Header from './pdf/Header';
import Identity from './pdf/Identity';
import Explanation from './pdf/Explanation';
import Reason from './pdf/Reason';
import Footer from './pdf/Footer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 50,
    paddingBottom: 0,
  },
  section: {
    marginBottom: 15,
  },
  bigQr: {
    height: 300,
    width: 300,
  },
});

interface AusweissProps {
  state: AppState & { qrCodeURI?: string };
}

const Ausweiss: React.FC<AusweissProps> = ({ state }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header style={styles.section} />
        <Identity state={state} style={styles.section} />
        <Explanation style={styles.section} />
        {reasons.map((props, idx) => (
          <Reason {...props} key={idx} />
        ))}
        {state.city && state.signatureURI && state.qrCodeURI && (
          <Footer
            city={state.city}
            signatureURI={state.signatureURI}
            qrCodeURI={state.qrCodeURI}
          />
        )}
      </Page>
      {state.qrCodeURI && (
        <Page size="A4">
          <Image src={state.qrCodeURI} style={styles.bigQr} />
        </Page>
      )}
    </Document>
  );
};

export default Ausweiss;
