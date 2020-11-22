import {
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { download } from 'ionicons/icons';
import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Ausweiss from '../components/Ausweiss';
import './Page.css';
import { useGlobalState } from '../core/context';

const Page: React.FC = () => {
  const { state } = useGlobalState();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Ausweiss</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <PDFDownloadLink document={<Ausweiss state={state} />}>
          <IonFab vertical="center" horizontal="center" slot="fixed">
            <IonFabButton>
              <IonIcon icon={download} />
            </IonFabButton>
          </IonFab>
        </PDFDownloadLink>
      </IonContent>
    </IonPage>
  );
};

export default Page;
